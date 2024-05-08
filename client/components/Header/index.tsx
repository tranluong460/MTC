import Link from "next/link";

import Logo from "../Logo";
import Search from "./Search";
import { ICategory } from "../../interface/category";
import { getAllCategory } from "../../libs/category";
import NavLink from "./NavLink";

const Header = async () => {
  const category_list: ICategory[] = await getAllCategory();

  return (
    <header className="header--read">
      <nav className="navbar navbar--read navbar-light navbar-expand">
        <div className="container px-3">
          <Link href="/" className="navbar-brand mr-4">
            <Logo />
          </Link>

          <NavLink category_list={category_list} />

          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;
