import { object, string } from "zod";

export const LoginSchema = object({
  email: string({ required_error: "Email không được để trống" })
    .min(1, "Email là bắt buộc")
    .email("Email không đúng định dạng"),
  password: string({ required_error: "Mật khẩu không được để trống" })
    .min(1, "Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu tối thiểu 8 ký tự")
    .max(32, "Mật khẩu không quá 32 ký tự"),
});

export const RegisterSchema = object({
  email: string({ required_error: "Email không được để trống" })
    .min(1, "Email là bắt buộc")
    .email("Email không đúng định dạng"),
  password: string({ required_error: "Mật khẩu không được để trống" })
    .min(1, "Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu tối thiểu 8 ký tự")
    .max(32, "Mật khẩu không quá 32 ký tự"),
  confirm_password: string({
    required_error: "Nhập lại mật khẩu không được để trống",
  }).min(1, "Mật khẩu là bắt buộc"),
});
