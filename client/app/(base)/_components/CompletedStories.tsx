import Link from "next/link";
import NomineeCard from "./NomineeCard";

const CompletedStories = () => {
  return (
    <div className="nh-section">
      <div className="d-flex align-items-center my-4">
        <h2 className="h4 m-0 font-weight-semibold"> Mới hoàn thành </h2>
        <Link href="#" className="link--see-more ml-auto text-primary">
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
    </div>
  );
};

export default CompletedStories;
