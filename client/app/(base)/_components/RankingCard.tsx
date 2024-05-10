import Link from "next/link";

type RankingCardProps = {
  index: number;
};

const RankingCard: React.FC<RankingCardProps> = ({ index }) => {
  return (
    <li className="item">
      <div className="index index-4">
        {index === 2 ? (
          <i className="svg-icon icon-medal-2" />
        ) : index === 3 ? (
          <i className="svg-icon icon-medal-3" />
        ) : (
          index
        )}
      </div>

      <div className="content media align-items-center py-1">
        <div className="media-body py-2">
          <h2 className="m-0 fz-body font-weight-normal pr-3 text-overflow-1-lines">
            <Link href="#" className="d-block">
              Trường Sinh, Bắt Đầu Từ Tạp Dịch Nuôi Gà
            </Link>
          </h2>
        </div>

        <span className="text-secondary">73,719</span>
      </div>
    </li>
  );
};

export default RankingCard;
