import Link from "next/link";

import NomineeCard from "./_components/NomineeCard";
import ReadingCard from "./_components/ReadingCard";
import GuideItem from "./_components/GuideItem";
import RecentCard from "./_components/RecentCard";
import Ranking from "./_components/Ranking";
import RateNew from "./_components/RateNew";
import NewStories from "./_components/NewStories";
import CompletedStories from "./_components/CompletedStories";
import { guide } from "../../data/guide";
import { getAllBook } from "../../libs/book";
import { IBook } from "../../interface/book";

const TrangChu = async () => {
  const shuffledGuide = guide.sort(() => 0.5 - Math.random()).slice(0, 6);

  const recentBook: IBook[] = await getAllBook();

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
                  <NomineeCard />
                  <NomineeCard />
                </div>

                <hr />

                <div className="row">
                  <NomineeCard />
                  <NomineeCard />
                </div>

                <hr />

                <div className="row">
                  <NomineeCard />
                  <NomineeCard />
                </div>

                <hr />

                <div className="row">
                  <NomineeCard />
                  <NomineeCard />
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
                    <GuideItem key={g.id} name={g.name} />
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>

        <section className="nh-section py-3">
          <div className="d-flex align-items-center mb-3 ">
            <h2 className="h4 mb-0"> Mới cập nhật </h2>
            <Link href="#" className="link--see-more ml-3 text-primary">
              Xem tất cả
            </Link>
          </div>

          <table className="table table-striped table-borderless table-hover border-top fz-14">
            <tbody>
              {recentBook.map((book) => (
                <RecentCard key={book.slug} book={book} />
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="home-ranking py-4">
        <div className="container py-2">
          <div className="row">
            <div className="col-4">
              <Ranking label="Đọc nhiều tuần" read />
            </div>

            <div className="col-4">
              <Ranking label="Thịnh hành tuần" popular />
            </div>

            <div className="col-4">
              <Ranking label="Đề cử tuần" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-4">
          <div className="col-8">
            <section className="nh-section">
              <div className="d-flex align-items-center mb-4">
                <h2 className="h4 mb-3"> Đánh giá cao </h2>

                <Link href="#" className="link--see-more ml-auto text-primary">
                  Xem tất cả
                </Link>
              </div>

              <div className="row">
                <NomineeCard rate />
                <NomineeCard rate />
              </div>

              <hr />

              <div className="row">
                <NomineeCard rate />
                <NomineeCard rate />
              </div>

              <hr />

              <div className="row">
                <NomineeCard rate />
                <NomineeCard rate />
              </div>

              <hr />
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
              <RateNew />
              <RateNew />
              <RateNew />
            </ul>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-4">
            <NewStories />
          </div>

          <div className="col-8">
            <CompletedStories />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrangChu;
