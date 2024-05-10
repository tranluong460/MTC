import Link from "next/link";

type GuideCardProps = {
  name: string;
};

const GuideCard: React.FC<GuideCardProps> = ({ name }) => {
  return (
    <li>
      <Link href="#" className="d-block py-1 mb-1 text-truncate">
        {name}
      </Link>
    </li>
  );
};

export default GuideCard;
