import type { Metadata } from "next";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Mê Truyện Chữ - MeTruyenChu - TruyenCv",
  description:
    "Mê Truyện Chữ là nền tảng online miễn phí đọc truyện chữ truyenCv được convert hoặc dịch kỹ lưỡng do các converter và dịch giả đóng góp, cập nhật liên tục hàng ngày hàng giờ với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...",
  keywords: ["me truyen chu", "truyen cv", "truyen convert", "truyen chu"],
};

export default function BaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <Banner />
      {children}
      <Footer />
    </>
  );
}
