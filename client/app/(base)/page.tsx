import Link from "next/link";

import BookCard from "./_components/BookCard";
import GuideCard from "./_components/GuideCard";
import ReviewCard from "./_components/ReviewCard";
import BookNewCard from "./_components/BookNewCard";
import ReadingCard from "./_components/ReadingCard";
import { guide } from "../../data/guide";

const HomePage = () => {
  const shuffledGuide = guide.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <main className="main pb-4">
      <div className="container">
        <div className="page-content rounded-2">
          <div className="row">
            <div className="col-8">
              <section className="nh-section">
                <div className="d-flex align-items-center mb-4">
                  <h2 className="h4 mb-0">Biên tập viên đề cử</h2>
                  <Link
                    href="#"
                    className="link--see-more ml-auto text-primary"
                  >
                    Xem tất cả
                  </Link>
                </div>

                <div className="row">
                  <BookCard />
                  <BookCard />
                </div>

                <hr />

                <div className="row">
                  <BookCard />
                  <BookCard />
                </div>

                <hr />

                <div className="row">
                  <BookCard />
                  <BookCard />
                </div>

                <hr />

                <div className="row">
                  <BookCard />
                  <BookCard />
                </div>
              </section>
            </div>

            <div className="col-4">
              <section className="nh-section">
                <div className="continue-reading-template">
                  <div className="d-flex align-items-center mb-3">
                    <h2 className="h4 mb-0">Đang đọc</h2>
                    <Link
                      href="#"
                      className="link--see-more ml-auto text-primary"
                    >
                      Xem tất cả
                    </Link>
                  </div>

                  <ul className="list-unstyled m-0">
                    <ReadingCard />
                    <ReadingCard />
                    <ReadingCard />
                    <ReadingCard />
                    <ReadingCard />
                  </ul>
                </div>
              </section>

              <hr className="my-3" />

              <section className="nh-section">
                <div className="d-flex align-items-center mb-3">
                  <h2 className="h4 mb-0">Hướng dẫn</h2>

                  <Link
                    href="#"
                    className="link--see-more ml-auto text-primary"
                  >
                    Xem tất cả
                  </Link>
                </div>

                <ul className="list-unstyled m-0 nh-list">
                  {shuffledGuide.map((g) => (
                    <GuideCard key={g.id} name={g.name} />
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        <section className="nh-section py-3">
          <div className="d-flex align-items-center mb-3 ">
            <h2 className="h4 mb-0"> Mới cập nhật</h2>
            <Link href="#" className="link--see-more ml-3 text-primary">
              Xem tất cả
            </Link>
          </div>

          <table className="table table-striped table-borderless table-hover border-top fz-14">
            <tbody>
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
              <BookNewCard />
            </tbody>
          </table>
        </section>
      </div>

      <div className="home-ranking py-4">
        <div className="container py-2">
          <div className="row">
            <div className="col-4">
              <section className="nh-section home-ranking-block bg-white rounded-2 px-4 pt-3 pb-2">
                <div className="d-flex align-items-center py-1">
                  <h2 className="h4 m-0 font-weight-semibold">
                    Nhận thưởng tuần
                  </h2>
                  <Link
                    href="#"
                    className="link--see-more ml-auto text-primary"
                  >
                    Xem tất cả
                  </Link>
                </div>

                <div className="list-unstyled list-ranking m-0">List</div>
              </section>
            </div>

            <div className="col-4">
              <section className="nh-section home-ranking-block bg-white rounded-2 px-4 pt-3 pb-2">
                <div className="d-flex align-items-center py-1">
                  <h2 className="h4 m-0 font-weight-semibold">Mở khóa tuần</h2>
                  <Link
                    href="#"
                    className="link--see-more ml-auto text-primary"
                  >
                    Xem tất cả
                  </Link>
                </div>

                <ul className="list-unstyled list-ranking m-0">List</ul>
              </section>
            </div>

            <div className="col-4">
              <section className="nh-section home-ranking-block bg-white rounded-2 px-4 pt-3 pb-2">
                <div className="d-flex align-items-center py-1">
                  <h2 className="h4 m-0 font-weight-semibold"> Đề cử tuần</h2>
                  <Link
                    href="#"
                    className="link--see-more ml-auto text-primary"
                  >
                    Xem tất cả
                  </Link>
                </div>

                <ul className="list-unstyled list-ranking m-0">List</ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-4">
          <div className="col-8">
            <section className="nh-section">
              <div className="d-flex align-items-center mb-4">
                <h2 className="h4 m-0 font-weight-semibold">Đánh giá cao</h2>
                <Link href="#" className="link--see-more ml-auto text-primary">
                  Xem tất cả
                </Link>
              </div>

              <div className="row">
                <BookCard rate />
                <BookCard rate />
              </div>

              <hr />

              <div className="row">
                <BookCard rate />
                <BookCard rate />
              </div>

              <hr />

              <div className="row">
                <BookCard rate />
                <BookCard rate />
              </div>
            </section>
          </div>

          <div className="col-4">
            <div className="d-flex align-items-center mb-4">
              <h2 className="h4 m-0 font-weight-semibold">Mới đánh giá</h2>
              <Link href="#" className="link--see-more ml-auto text-primary">
                Xem tất cả
              </Link>
            </div>

            <ul className="list-unstyled">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </ul>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-4">
            <section className="nh-section rounded bg-yellow-white p-4">
              <div className="d-flex align-items-center mb-4">
                <h2 className="h4 m-0 font-weight-semibold">Mới đăng</h2>
                <Link href="#" className="link--see-more ml-auto text-primary">
                  Xem tất cả
                </Link>
              </div>

              <div className="nh-group-slider js-slider">1</div>
            </section>
          </div>

          <div className="col-8">
            <section className="nh-section">
              <div className="d-flex align-items-center my-4">
                <h2 className="h4 m-0 font-weight-semibold">Mới hoàn thành</h2>
                <Link href="" className="link--see-more ml-auto text-primary">
                  Xem tất cả
                </Link>
              </div>

              <div className="row">
                <BookCard />
                <BookCard />
              </div>

              <hr />

              <div className="row">
                <BookCard />
                <BookCard />
              </div>

              <hr />

              <div className="row">
                <BookCard />
                <BookCard />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
