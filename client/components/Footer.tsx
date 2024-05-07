import Link from "next/link";
import Image from "next/image";

import Logo from "./Logo";

const Footer = () => {
  return (
    <div id="footer">
      <hr className="my-0" />

      <footer className="footer text-center py-4">
        <div className="container">
          <Link href="/" className="d-inline-block py-1 my-2">
            <Logo large />
          </Link>

          <div className="w-75 m-auto">
            Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ
            được convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng
            góp, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ
            các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
          </div>

          <div className="footer-app mt-4">
            <div className="d-flex align-items-center justify-content-center py-1">
              <Link href="#" className="mr-3">
                <Image
                  src="/app-store.png"
                  alt="App Store"
                  height={1000}
                  width={1000}
                  className="h-[34px] w-[97px]"
                />
              </Link>

              <Link href="#">
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  height={1000}
                  width={1000}
                  className="h-[34px] w-[97px]"
                />
              </Link>
            </div>
          </div>

          <ul className="list-unstyled mt-4 mb-0 d-flex justify-content-center">
            <li>
              <Link
                href="#"
                target="_blank"
                className="d-inline-block px-3 py-2"
              >
                Điều khoản dịch vụ
              </Link>
            </li>

            <li>
              <Link
                href="#"
                target="_blank"
                className="d-inline-block px-3 py-2"
              >
                Chính sách bảo mật
              </Link>
            </li>

            <li>
              <Link
                href="#"
                target="_blank"
                className="d-inline-block px-3 py-2"
              >
                Về bản quyền
              </Link>
            </li>

            <li>
              <Link
                href="#"
                target="_blank"
                className="d-inline-block px-3 py-2"
              >
                Hướng dẫn sử dụng
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
