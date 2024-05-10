import Link from "next/link";

const BookNewCard = () => {
  return (
    <tr>
      <td className="align-middle text-tertiary">
        <span className="text-overflow-1-lines">Huyền Huyễn</span>
      </td>

      <td className="align-middle w-25">
        <h2 className="fz-body m-0 text-overflow-1-lines">
          <Link href="#">Ma Chủng</Link>
        </h2>
      </td>

      <td className="align-middle w-25">
        <Link href="#" className="text-overflow-1-lines">
          Chương 355: Chân vạc
        </Link>
      </td>

      <td className="align-middle">
        <span className="text-overflow-1-lines">Vệ Huyền Hy</span>
      </td>

      <td className="align-middle text-tertiary">
        <span className="text-overflow-1-lines">Alone</span>
      </td>

      <td className="align-middle text-tertiary text-right">1 ngày trước</td>
    </tr>
  );
};

export default BookNewCard;
