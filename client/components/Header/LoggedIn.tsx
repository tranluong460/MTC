"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Avatar from "../Avatar";
import UserMenu from "./UserMenu";
import { IUser } from "@/interface/user";

type LoggedInProps = {
  user: IUser;
};

const LoggedIn: React.FC<LoggedInProps> = ({ user }) => {
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [show, setShow] = useState({ user: false, notification: false });

  const toggleShowUser = () =>
    setShow({ user: !show.user, notification: false });

  const toggleShowNotification = () =>
    setShow({ user: false, notification: !show.notification });

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(target) &&
      !target.closest(".dropdown-menu--notification") &&
      !target.closest(".dropdown-menu--profile")
    )
      setShow({ user: false, notification: false });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <li
        ref={dropdownRef}
        className={`${show.notification ? "show" : ""} dropdown py-3`}
      >
        <Link
          href="#"
          onClick={toggleShowNotification}
          className="d-block text-body px-3 py-2"
        >
          <i className="nh-icon icon-bell" />
        </Link>

        <div
          className={`${
            show.notification ? "show" : ""
          } dropdown-menu dropdown-menu-right dropdown-menu--notification pb-0 rounded-0`}
        >
          <ul className="list-unstyled mb-2 nh-list px-4">
            <li>
              <p className="text-center">Không có thông báo nào</p>
            </li>
          </ul>

          <div className="bg-light border-top">
            <Link href="#" className="d-block text-primary py-2 pl-4">
              Xem tất cả
            </Link>
          </div>
        </div>
      </li>

      <li
        ref={dropdownRef}
        className={`${show.user ? "show" : ""} dropdown py-3`}
      >
        <Link
          href="#"
          onClick={toggleShowUser}
          className="d-flex align-items-center text-body px-3 py-2 cursor-pointer"
        >
          <div className="nh-avatar nh-avatar--24 mr-2">
            <Avatar image={user?.image} />
          </div>

          {user.name || "User"}
        </Link>

        <UserMenu show={show} user={user} />
      </li>
    </>
  );
};

export default LoggedIn;
