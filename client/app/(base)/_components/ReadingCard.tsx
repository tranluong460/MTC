import Image from "next/image";
import Link from "next/link";

const ReadingCard = () => {
  return (
    <li className="media align-items-center py-2 mb-1">
      <Link href="#" className="nh-thumb nh-thumb--32 shadow mr-3">
        <Image
          alt="Book"
          width={1000}
          height={1000}
          src="https://static.cdnno.com/poster/ma-chung-1/150.jpg?1710409580"
        />
      </Link>

      <div className="media-body">
        <h2 className="fz-body mb-1">
          <Link href="#" className="text-overflow-1-lines">
            Ma Chủng
          </Link>
        </h2>

        <div className="text-muted text-overflow-1-lines">
          Đã đọc: 255/255
          <Link href="#">
            <small className="text-muted ml-1">
              <i className="nh-icon icon-trash small" />
            </small>
          </Link>
        </div>
      </div>

      <Link href="#" className="float-left">
        <small className="text-primary">Đọc tiếp</small>
      </Link>
    </li>
  );
};

export default ReadingCard;
