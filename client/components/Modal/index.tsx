import Link from "next/link";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type ModalProps = {
  show: boolean;
  type: string;
  toggleModal: (show: boolean, type: string) => void;
};

const Modal: React.FC<ModalProps> = ({ show, type, toggleModal }) => {
  if (!show) return null;

  const backdrop = "modal-backdrop";

  const toggleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === backdrop) toggleModal(false, "");
  };

  return (
    <div id="modal">
      <div
        id={backdrop}
        onClick={toggleBackdrop}
        className={`${show ? "show" : ""} modal modal-auth fade`}
        style={{ paddingRight: "17px", display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="list-unstyled d-flex m-auto">
                <li>
                  <Link
                    href="#"
                    onClick={() => toggleModal(true, "login")}
                    className={`${
                      type === "login" ? "" : "text-tertiary"
                    } d-block h3 m-0 p-3`}
                  >
                    Đăng nhập
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    onClick={() => toggleModal(true, "register")}
                    className={`${
                      type === "register" ? "" : "text-tertiary"
                    } d-block h3 m-0 p-3`}
                  >
                    Đăng ký
                  </Link>
                </li>
              </ul>

              <button onClick={() => toggleModal(false, "")} className="close">
                <i className="nh-icon icon-close" />
              </button>
            </div>

            {type === "login" && <LoginForm />}
            {type === "register" && (
              <RegisterForm onClickLogin={() => toggleModal(true, "login")} />
            )}

            {type === "login" && (
              <div className="modal-footer justify-content-center bg-light text-center">
                Bạn chưa có tài khoản?&nbsp;
                <Link
                  href="#"
                  onClick={() => toggleModal(true, "register")}
                  className="text-primary font-weight-semibold"
                >
                  Đăng ký ngay
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`modal-backdrop fade ${show ? "show" : ""}`} />
    </div>
  );
};

export default Modal;
