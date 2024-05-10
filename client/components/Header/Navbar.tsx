"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ICategory } from "../../interface/category";

type NavbarProps = {
  category_list: ICategory[];
};

const Navbar: React.FC<NavbarProps> = ({ category_list }) => {
  const searchParams = useSearchParams();

  const cate_id = searchParams.get("c");

  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown dropdown-hover">
        <Link href="#" className="nav-link d-flex align-items-center">
          <i className="nh-icon icon-menu fz-13 mr-2" /> Thể loại
        </Link>

        <div className="dropdown-menu dropdown-menu--category rounded-0">
          <div className="row no-gutters">
            {category_list?.map((category) => (
              <Link
                key={category.slug}
                href={{
                  pathname: "truyen/",
                  search: "c=" + category.slug,
                }}
                className={`${
                  cate_id === category.slug ? "active" : ""
                } dropdown-item col-6 d-flex align-items-center`}
              >
                <i className="svg-icon mr-2" />
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </li>

      <li className="nav-item dropdown dropdown-hover">
        <Link href="#" className="nav-link d-flex align-items-center">
          Bảng xếp hạng
        </Link>

        <div className="dropdown-menu rounded-0">
          <Link href="#" className="dropdown-item">
            Thịnh hành
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
