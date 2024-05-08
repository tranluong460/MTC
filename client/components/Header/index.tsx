import Link from "next/link";

import Logo from "../Logo";
import Search from "./Search";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="header--read">
      <nav className="navbar navbar--read navbar-light navbar-expand">
        <div className="container px-3">
          <Link href="/" className="navbar-brand mr-4">
            <Logo />
          </Link>

          <NavLink />

          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;
