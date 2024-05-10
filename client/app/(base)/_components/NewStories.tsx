import Link from "next/link";

const NewStories = () => {
  return (
    <section className="nh-section rounded bg-yellow-white p-4">
      <div className="d-flex align-items-center mb-4">
        <h2 className="h4 mb-3"> Mới đăng </h2>

        <Link href="#" className="link--see-more ml-auto text-primary">
          Xem tất cả
        </Link>
      </div>

      <div className="nh-group-slider js-slider"></div>
    </section>
  );
};

export default NewStories;
