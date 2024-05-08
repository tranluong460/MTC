import Link from "next/link";

const Banner = () => {
  return (
    <Link href="#" target="_blank">
      <span
        className="top-bg-op-box"
        style={{
          backgroundImage:
            "url('https://static.cdnno.com/storage/topbox/e092191c942b9f3f1c62cc74cfe9df35.webp')",
          position: "absolute",
          zIndex: 0,
          left: "0px",
          overflow: "hidden",
          width: "100%",
          height: "388px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 0px",
          backgroundSize: "cover",
        }}
      />
    </Link>
  );
};

export default Banner;
