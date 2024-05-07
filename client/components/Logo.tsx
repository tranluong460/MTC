import Image from "next/image";

type LogoProps = {
  large?: boolean;
};

const Logo: React.FC<LogoProps> = ({ large }) => {
  return (
    <Image
      src="/logo.png"
      className={`${large ? "w-16 h-16" : "w-12 h-12"}`}
      alt="Logo"
      width={1000}
      height={1000}
    />
  );
};

export default Logo;
