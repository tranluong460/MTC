import * as z from "zod";
import toast from "react-hot-toast";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas/auth";
import { registerAccount } from "../../actions/auth";

type RegisterFormProps = {
  onClickLogin: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onClickLogin }) => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      registerAccount(values).then((data) => {
        data?.error && toast.error(data.message);

        if (data?.success) {
          toast.success(data.message);
          onClickLogin();
        }
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="modal-body">
      <div className="form-group">
        <label
          htmlFor="email"
          className={errors.password ? "text-red-500" : ""}
        >
          Email
        </label>

        <input
          id="email"
          type="text"
          disabled={isPending}
          placeholder="Email"
          className="form-control border-0 bg-light px-4"
          {...register("email")}
        />
      </div>

      <div className="form-group">
        <label
          htmlFor="password"
          className={errors.password ? "text-red-500" : ""}
        >
          Mật khẩu
        </label>

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
        <label
          htmlFor="confirm_password"
          className={errors.password ? "text-red-500" : ""}
        >
          Nhập lại khẩu
        </label>

        <input
          id="confirm_password"
          type="password"
          disabled={isPending}
          placeholder="Nhập lại mật khẩu"
          className="form-control border-0 bg-light px-4"
          {...register("confirm_password")}
        />
      </div>

      <div className="form-group">
        <button
          disabled={isPending}
          className="btn btn-primary btn-md btn-shadow btn-block font-weight-semibold"
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
