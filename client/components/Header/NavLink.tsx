import Link from "next/link";
import { Suspense } from "react";

import CategoryList from "./CategoryList";
import { ICategory } from "../../interface/category";
import { getAllCategory } from "../../libs/category";

const NavLink = async () => {
  const category_list: ICategory[] = await getAllCategory();

  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown dropdown-hover">
        <Link href="#" className="nav-link d-flex align-items-center">
          <i className="nh-icon icon-menu fz-13 mr-2" />
          Thể loại
        </Link>

        <div className="dropdown-menu dropdown-menu--category rounded-0">
          <Suspense fallback={<div>Đang lấy dữ liệu...</div>}>
            <CategoryList category_list={category_list} />
          </Suspense>
        </div>
      </li>
    </ul>
  );
};

export default NavLink;
