import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";

const SourceSansPro = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin-ext", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.FRONTEND_URL || "https://metruyencv.vercel.app"
  ),
  icons: "/logo.png",
  openGraph: {
    type: "website",
    url: process.env.FRONTEND_URL,
    title: "Mê Truyện Chữ - Truyện Convert",
    description:
      "Mê Truyện Chữ là nền tảng online miễn phí đọc truyện chữ được convert hoặc dịch kỹ lưỡng do các converter và dịch giả đóng góp, cập nhật liên tục hàng ngày hàng giờ với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...",
    images: "/meTruyenChu.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`page-home ${SourceSansPro.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
