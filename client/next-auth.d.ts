import NextAuth, { Session } from "next-auth";
import { JWT } from "@auth/core/jwt";
import { IUser } from "./interface/user";

declare module "next-auth" {
  interface Session {
    token?: {
      access_token?: string;
      refresh_token?: string;
      access_token_exp?: any;
    };
    user: IUser | AdapterUser;
    error?: RefreshAccessTokenError;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    _id?: string;
    token?: {
      access_token?: string;
      refresh_token?: string;
      access_token_exp?: any;
    };
  }
}
