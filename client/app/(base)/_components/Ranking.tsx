import Image from "next/image";
import Link from "next/link";
import RankingCard from "./RankingCard";

type RankingProps = {
  label: string;
  read?: boolean;
  popular?: boolean;
};

const Ranking: React.FC<RankingProps> = ({ label, read, popular }) => {
  return (
    <section className="nh-section home-ranking-block bg-white rounded-2 px-4 pt-3 pb-2">
      <div className="d-flex align-items-center py-1">
        <h2 className="h4 m-0 font-weight-semibold">{label}</h2>

        <Link href="#" className="link--see-more ml-auto text-primary">
          Xem tất cả
        </Link>
      </div>

      <ul className="list-unstyled list-ranking m-0">
        <li className="item item-featured">
          <div className="index index-1">
            <i className="svg-icon icon-medal-1" />
          </div>

          <div className="content media align-items-center py-1">
            <div className="info py-3">
              <h2 className="mb-1 fz-body text-overflow-1-lines">
                <Link href="#" className="d-block">
                  Ta Có Thể Phục Chế Thiên Phú
                </Link>
              </h2>

              <div
                className={`${
                  read
                    ? "text-success"
                    : popular
                    ? "text-warning"
                    : "text-primary"
                } d-flex align-items-center mb-2`}
              >
                <span className="mr-2">1189</span>

                {read ? (
                  <i className="nh-icon icon-eye-glasses" />
                ) : popular ? (
                  <i className="nh-icon icon-up fz-13" />
                ) : (
                  <i className="nh-icon icon-flower" />
                )}
              </div>

              <div className="d-flex align-items-center text-secondary fz-13 mb-1 text-overflow-1-lines">
                <i className="nh-icon icon-user-edit mr-2" /> Kiếm Thần Vô Địch
              </div>

              <div className="d-flex align-items-center text-secondary fz-13 text-overflow-1-lines">
                <i className="nh-icon icon-book mr-2" /> Huyền Huyễn
              </div>
            </div>

            <div className="thumb ml-auto pr-3 py-3">
              <div className="book-cover">
                <Link href="#" className="book-cover-link">
                  <Image
                    src="https://static.cdnno.com/poster/ta-co-the-phuc-che-thien-phu/150.jpg?1710449250"
                    alt="Ta Có Thể Phục Chế Thiên Phú"
                    width={1000}
                    height={1000}
                  />
                </Link>

                <span className="book-cover-shadow" />
              </div>
            </div>
          </div>
        </li>

        <RankingCard index={2} />
        <RankingCard index={3} />
        <RankingCard index={4} />
        <RankingCard index={5} />
        <RankingCard index={6} />
        <RankingCard index={7} />
        <RankingCard index={8} />
        <RankingCard index={9} />
        <RankingCard index={10} />
      </ul>
    </section>
  );
};

export default Ranking;
