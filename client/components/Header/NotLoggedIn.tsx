"use client";

import Link from "next/link";
import { useState } from "react";

const NotLoggedIn = () => {
  const [modal, setModal] = useState({ show: false, type: "" });

  const toggleModal = (show: boolean, type: string) => setModal({ show, type });

  return (
    <>
      <li>
        <Link
          href="#"
          onClick={() => toggleModal(true, "login")}
          className="d-block px-3 py-2"
        >
          Đăng nhập
        </Link>
      </li>

      <li>
        <Link
          href="#"
          onClick={() => toggleModal(true, "register")}
          className="d-block px-3 py-2"
        >
          Đăng ký
        </Link>
      </li>
    </>
  );
};

export default NotLoggedIn;
