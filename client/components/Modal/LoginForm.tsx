import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="modal-body">
      <div className="form-group">
        <div className="d-flex mb-2">
          <label htmlFor="email" className={`m-0`}>
            Email
          </label>

          <Link href="#" className="text-primary ml-auto">
            Gửi lại email kích hoạt
          </Link>
        </div>

        <input
          id="email"
          type="email"
          placeholder="Nhập email"
          className="form-control border-0 bg-light px-4"
        />
      </div>

      <div className="form-group">
        <div className="d-flex mb-2">
          <label htmlFor="password" className={`m-0`}>
            Mật khẩu
          </label>

          <Link href="#" className="text-primary ml-auto">
            Quên mật khẩu?
          </Link>
        </div>

        <input
          id="password"
          type="password"
          placeholder="Nhập mật khẩu"
          className="form-control border-0 bg-light px-4"
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
        <button className="btn btn-primary btn-md btn-shadow btn-block font-weight-semibold">
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
