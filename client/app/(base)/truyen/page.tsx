import { Metadata } from "next";

import { getCategoryBy } from "../../../libs/category";
import { ICategory } from "../../../interface/category";
import { IParams } from "../../../interface/params";

export async function generateMetadata({
  searchParams,
}: IParams): Promise<Metadata> {
  const { c, p } = searchParams;

  const category: ICategory = c ? await getCategoryBy({ slug: c }) : "";
  const categoryName = category ? `- ${category.name} ` : "";

  const pageNumber = p || 1;

  return {
    title: `Danh Sách Truyện Convert ${categoryName}- Mới cập nhật - Trang ${pageNumber}`,
    description: `Trang ${pageNumber} - Danh sách truyện ${categoryName}- Mới cập nhật tại ${process.env.FRONTEND_URL}`,
  };
}

const TimKiemTruyen = ({ searchParams }: IParams) => {
  return (
    <div>
      TimKiemTruyen
      <p>Category: {searchParams.c}</p>
      <p>Page: {searchParams.p || 1}</p>
    </div>
  );
};

export default TimKiemTruyen;
