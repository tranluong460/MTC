import Image from "next/image";

type AvatarProps = {
  image: string | undefined;
  large?: boolean;
};

const Avatar: React.FC<AvatarProps> = ({ image, large }) => {
  return (
    <Image
      src={image || "/user.jpg"}
      alt="Avatar"
      width={1000}
      height={1000}
      className={large ? "w-11 h-11" : "w-6 h-6"}
    />
  );
};

export default Avatar;
