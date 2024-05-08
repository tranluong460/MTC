const RegisterForm = () => {
  return (
    <form className="modal-body">
      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="text"
          placeholder="Email"
          className="form-control border-0 bg-light px-4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Mật khẩu</label>

        <input
          id="password"
          type="password"
          placeholder="Nhập mật khẩu"
          className="form-control border-0 bg-light px-4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirm_password">Nhập lại khẩu</label>

        <input
          id="confirm_password"
          type="password"
          placeholder="Nhập lại mật khẩu"
          className="form-control border-0 bg-light px-4"
        />
      </div>

      <div className="form-group">
        <button className="btn btn-primary btn-md btn-shadow btn-block font-weight-semibold">
          Đăng ký
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
