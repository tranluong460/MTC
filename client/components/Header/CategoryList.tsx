"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ICategory } from "../../interface/category";

type CategoryListProps = {
  category_list: ICategory[];
};

const CategoryList: React.FC<CategoryListProps> = ({ category_list }) => {
  const searchParams = useSearchParams();
  const cate = searchParams.get("c");

  return (
    <div className="row no-gutters">
      {category_list?.map((category) => (
        <Link
          key={category.slug}
          href={{
            pathname: "/",
            search: "c=" + category.slug,
          }}
          className={`${
            cate === category.slug ? "active" : ""
          } dropdown-item col-6 d-flex align-items-center`}
        >
          <i className="svg-icon mr-2" />
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
