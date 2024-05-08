import * as z from "zod";
import Link from "next/link";
import toast from "react-hot-toast";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "../../schemas/auth";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);

    startTransition(() => {
      toast.success("Đăng nhập thành công");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-body">
      <div className="form-group">
        <div className="d-flex mb-2">
          <label
            htmlFor="email"
            className={`m-0 ${errors.email ? "text-red-500" : ""}`}
          >
            Email
          </label>

          <Link href="#" className="text-primary ml-auto">
            Gửi lại email kích hoạt
          </Link>
        </div>

        <input
          id="email"
          type="email"
          disabled={isPending}
          placeholder="Nhập email"
          className="form-control border-0 bg-light px-4"
          {...register("email")}
        />
      </div>

      <div className="form-group">
        <div className="d-flex mb-2">
          <label
            htmlFor="password"
            className={`m-0 ${errors.password ? "text-red-500" : ""}`}
          >
            Mật khẩu
          </label>

          <Link href="#" className="text-primary ml-auto">
            Quên mật khẩu?
          </Link>
        </div>

        <input
          id="password"
          type="password"
          disabled={isPending}
          placeholder="Nhập mật khẩu"
          className="form-control border-0 bg-light px-4"
          {...register("password")}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            id="remember"
            type="checkbox"
            className="custom-control-input"
          />

          <label htmlFor="remember" className="custom-control-label">
            &nbsp;Ghi nhớ mật khẩu
          </label>
        </div>
      </div>

      <div className="form-group">
        <button
          disabled={isPending}
          className="btn btn-primary btn-md btn-shadow btn-block font-weight-semibold"
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
