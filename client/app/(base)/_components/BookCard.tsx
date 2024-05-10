import Image from "next/image";
import Link from "next/link";

type BookCardProps = {
  rate?: boolean;
};

const BookCard: React.FC<BookCardProps> = ({ rate }) => {
  return (
    <div className="col-6">
      <div className="media">
        <Link href="#" className="nh-thumb nh-thumb--72 shadow mr-3">
          <Image
            src="https://static.cdnno.com/poster/ma-chung-1/150.jpg?1710409580"
            alt="Book name"
            width={72}
            height={1000}
          />
        </Link>

        <div className="media-body">
          <h2 className="fz-body text-overflow-1-lines mb-2">
            <Link href="#" className="d-block">
              Ma Chủng
            </Link>
          </h2>

          {rate && (
            <div className="d-flex align-items-center mb-2">
              <div className="bg-primary rounded-3 h6 my-0 mr-3 text-white px-2 py-1">
                5.00
              </div>
              <div className="text-success"> 5 đánh giá </div>
            </div>
          )}

          <div className="text-secondary fz-14 text-overflow-2-lines">
            Thế có âm dương, đạo chia chính ma.Chính, lấy linh khí thiên địa, cố
            bản bồi nguyên.Ma, trộm cơ sinh tử, cấp công cận lợi.Hai bên đều là
            đại đạo nhưng lại không chung đường. Từ thuở xa xưa, chính ma đã sớm
            bất lưỡng lập, gặp nhau ở đâu liền đánh giết tại đó.Thiếu niên Hứa
            Tử Du bước ra từ Lò Luyện Cổ, tinh thông sinh tồn, trầm luân ma đạo,
            từng bước lên đỉnh cao, ngự ma nhìn chúng sinh.PS: Mọi tình tiết
            trong truyện đều là hư cấu.
          </div>

          <div className="d-flex align-items-center mt-2 py-1">
            <div className="d-flex align-items-center mr-auto text-secondary">
              <span className="truncate-140 text-left">
                <i className="nh-icon icon-user-edit mr-1" /> Vệ Huyền Hy
              </span>
            </div>

            <Link href="#">
              <span className="d-inline-block border border-primary small px-2 text-primary truncate-100">
                Tiên Hiệp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
