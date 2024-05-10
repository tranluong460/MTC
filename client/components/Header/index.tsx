import Link from "next/link";
import Image from "next/image";

import Logo from "../Logo";
import NavLink from "./NavLink";
import LoggedIn from "./LoggedIn";
import SearchBar from "./SearchBar";
import NotLoggedIn from "./NotLoggedIn";
import { currentUser } from "../../libs/user";
import { getAllCategory } from "../../libs/category";

const Header = async () => {
  const user = await currentUser();
  const category_list = await getAllCategory();

  return (
    <header className="header--read">
      <nav className="navbar navbar--read navbar-light navbar-expand">
        <div className="container px-3">
          <Link href="/" className="navbar-brand mr-4">
            <Logo />
          </Link>

          <NavLink category_list={category_list} />

          <SearchBar />

          <ul
            className={
              user
                ? "navbar-nav navbar-nav--auth ml-auto"
                : "list-unstyled mb-0 ml-auto d-flex justify-content-center"
            }
          >
            <li className={user ? "nav-item mr-4" : "mr-4"}>
              <Link
                href="#"
                target="_blank"
                className={
                  user
                    ? "nav-link d-flex align-items-center"
                    : "d-flex align-items-center px-3 py-2"
                }
              >
                <Image
                  src="/new.png"
                  alt="New"
                  width={1000}
                  height={1000}
                  className="mr-2 w-6 h-6"
                />
                <span>Đăng truyện</span>
              </Link>
            </li>

            {user ? <LoggedIn user={user} /> : <NotLoggedIn />}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
