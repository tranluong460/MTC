import NextAuth, { AuthError } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./schemas/auth";
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

        const response = await fetch(process.env.BACKEND_URL + "/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedFields.data),
        });

        const data = await response.json();

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

      if (token && token.token && !token.token.refresh_token)
        throw new Error("Missing refresh token");

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
