import moment from "moment";
import Link from "next/link";

import { IBook } from "../../../interface/book";
import { formatTimeAgo } from "../../../libs/utils";

type RecentCardProps = {
  book: IBook;
};

const RecentCard: React.FC<RecentCardProps> = ({ book }) => {
  const timeDifference = moment.duration(moment().diff(book.new_chap_at));
  const formattedTime = formatTimeAgo(timeDifference);

  return (
    <tr>
      <td className="align-middle text-tertiary">
        <span className="text-overflow-1-lines">{book.category_id.name}</span>
      </td>

      <td className="align-middle w-25">
        <h2 className="fz-body m-0 text-overflow-1-lines">
          <Link href="#">{book.name}</Link>
        </h2>
      </td>

      <td className="align-middle w-25">
        <Link href="#" className="text-overflow-1-lines">
          Chương 92: Tình huynh đệ là trên hết
        </Link>
      </td>

      <td className="align-middle">
        <span className="text-overflow-1-lines">{book.author_id.name}</span>
      </td>

      <td className="align-middle text-tertiary">
        <span className="text-overflow-1-lines">{book.user_id.name}</span>
      </td>

      <td className="align-middle text-tertiary text-right">{formattedTime}</td>
    </tr>
  );
};

export default RecentCard;
