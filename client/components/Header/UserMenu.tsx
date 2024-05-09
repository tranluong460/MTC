import Link from "next/link";
import toast from "react-hot-toast";
import { useTransition } from "react";

import Avatar from "../Avatar";
import { IUser } from "../../interface/user";
import { logoutAccount } from "../../actions/auth";

type UserMenuProps = {
  show: { user: boolean };
  user: IUser;
};

const UserMenu: React.FC<UserMenuProps> = ({ show, user }) => {
  const [isPending, startTransition] = useTransition();

  const toggleLogout = async () => {
    startTransition(() => {
      logoutAccount()
        .then(() => {
          toast.success("Đăng xuất thành công");

          setTimeout(() => {
            location.reload();
          }, 500);
        })
        .catch(() => {
          toast.error("Đã có lỗi xả ra");
        });
    });
  };

  const userMenu = [
    {
      url: "#",
      label: "Hồ sơ",
    },
    {
      url: "#",
      label: "Tủ truyện",
    },
    {
      url: "#",
      label: "Cài đặt",
    },
    {
      url: "#",
      label: "Tài sản",
    },
    {
      url: "#",
      label: "Mua kẹo",
    },
    {
      url: "#",
      label: "Nâng cấp",
    },
    {
      url: "#",
      label: "Nhận thưởng",
    },
  ];

  return (
    <div
      className={`${
        show.user ? "show" : ""
      } dropdown-menu dropdown-menu-right dropdown-menu--profile px-4 rounded-0`}
    >
      <div className="media mb-4">
        <div className="nh-avatar nh-avatar--45 mr-3">
          <Avatar image={user.image} large />
        </div>

        <div className="media-body">
          <div className="font-weight-semibold mb-1">{user.name || "User"}</div>

          <ul className="list-unstyled d-flex flex-wrap">
            <li className="d-flex align-items-center mr-4">
              <i className="svg-icon icon-flower mr-2" />

              <Link href="#">{user.ballot}</Link>
            </li>

            <li className="d-flex align-items-center">
              <i className="svg-icon icon-candy text-primary mr-2" />

              <Link href="#">{user.balance}</Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="list-unstyled m-0">
        {userMenu.map((menu) => (
          <li key={menu.label} className="mt-2">
            <Link href={menu.url} className="d-block py-2">
              {menu.label}
            </Link>
          </li>
        ))}

        <li className="dropdown-divider" />

        <li>
          <Link
            href="#"
            onClick={toggleLogout}
            className={`${isPending ? "cursor-not-allowed" : ""} d-block py-2`}
          >
            Thoát
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
