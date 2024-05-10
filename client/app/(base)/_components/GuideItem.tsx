import Link from "next/link";

type GuideItemProps = {
  name: string;
};

const GuideItem: React.FC<GuideItemProps> = ({ name }) => {
  return (
    <li>
      <Link href="#" className="d-block py-1 mb-1 text-truncate">
        {name}
      </Link>
    </li>
  );
};

export default GuideItem;
