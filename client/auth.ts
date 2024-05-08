import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas/auth";
import { LoginAccount } from "./libs/auth";
import { refreshToken } from "./actions/auth";
import { getUserById } from "./libs/user";

export const { auth, handlers, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) return null;

        const data = await LoginAccount(validatedFields.data);

        if (data?.error) throw new AuthError(data.message, { cause: data });

        return data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      const currentTime = Math.floor(Date.now() / 1000);
      const expirationTime =
        token && token.token && token.token.access_token_exp;

      if (currentTime < expirationTime) return token;

      return await refreshToken(token);
    },
    async session({ session, token }) {
      if (!token._id || !token.token) return session;

      const user = await getUserById(token._id);

      session.user = user;
      session.token = token.token;

      return session;
    },
  },
});
