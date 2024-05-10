import Image from "next/image";
import Link from "next/link";

type NomineeCardProps = {
  rate?: boolean;
};

const NomineeCard: React.FC<NomineeCardProps> = ({ rate }) => {
  return (
    <div className="col-6">
      <div className="media">
        <Link href="#" className="nh-thumb nh-thumb--72 shadow mr-3">
          <Image
            src="https://static.cdnno.com/poster/lien-choi-cai-tro-choi-lam-sao-thanh-tien/150.jpg?1686918926"
            alt="Image"
            width={1000}
            height={1000}
          />
        </Link>

        <div className="media-body">
          <h2 className="fz-body text-overflow-1-lines mb-2 ">
            <Link href="#" className="d-block">
              Liền Chơi Cái Trò Chơi, Làm Sao Thành Tiên
            </Link>
          </h2>

          {rate && (
            <div className="d-flex align-items-center mb-2">
              <div className="bg-danger rounded-3 h6 my-0 mr-3 text-white px-2 py-1">
                5.00
              </div>
              <div className="text-success">3 đánh giá</div>
            </div>
          )}

          <div className="text-secondary fz-14 text-overflow-2-lines">
            Mục Dã mang theo trò chơi hệ thống hồn xuyên Tu Tiên Giới, trở thành
            một cái bất nhập lưu tông môn tạp dịch đệ tử, thăng tiên vô vọng hắn
            dứt khoát bày nát đắm chìm trong thế giới trò chơi bên trong lá gan
            bạo. Tại hiện thực bên trong, hắn là một cái tầng dưới chót tu tiên
            giả, mỗi ngày đào mỏ nhổ cỏ làm ruộng, trải qua tiên hiệp 996 bình
            thường sinh hoạt.Tại trò chơi bên trong, hắn đại sát tứ phương, 【
            đao kiếm phong ma 】 bên trong một đao chém nát thập phương yêu ma,
            trở thành nhân gian chúa cứu thế; 【 dưới bầu trời 】 bên trong
            luyện Chân Vũ pháp thân, một quyền phá toái thương khung, hiệu quá
            Hư Vũ tổ; 【 thú dữ thiên tề 】 hóa cự thú thôn phệ thiên địa, thống
            ngự bát phương Thú tộc, thành thú bên trong chí tôn. . .Lá gan lấy
            lá gan, thẳng đến ngày nào đó. A, ta làm sao thành tiên?
          </div>

          <div className="d-flex align-items-center mt-2 py-1">
            <div className="d-flex align-items-center mr-auto text-secondary">
              <span className="truncate-140 text-left">
                <i className="nh-icon icon-user-edit mr-1" />
                Hạ Thụ Cầm
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

export default NomineeCard;
