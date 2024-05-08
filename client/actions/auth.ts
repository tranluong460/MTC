"use server";

import * as z from "zod";
import { JWT } from "next-auth/jwt";
import { AuthError } from "next-auth";

import { signIn } from "../auth";
import { LoginSchema } from "../schemas/auth";

export const loginAccount = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success)
    return {
      message: "Dữ liệu không hợp lệ",
      error: "Bad Request",
      statusCode: 400,
    };

  try {
    await signIn("credentials", validatedFields.data);
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause) return error.cause;

      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Thông tin đăng nhập không hợp lệ",
            error: "403",
            statusCode: 500,
          };
        default:
          return {
            message: "Đã có lỗi xảy ra",
            error: "Error",
            statusCode: 500,
          };
      }
    }

    throw error;
  }
};

export const refreshToken = async (token: JWT) => {
  const response = await fetch(
    process.env.BACKEND_URL + "/auth/refresh-token",
    {
      method: "POST",
      headers: {
        authorization: "Bearer " + token.token?.refresh_token,
      },
    }
  );

  const data = await response.json();

  if (data.error) return null;

  token.token = data;

  return token;
};
