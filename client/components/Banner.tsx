import Link from "next/link";

const Banner = () => {
  return (
    <Link href="#">
      <span
        className="top-bg-op-box"
        style={{
          backgroundImage:
            "url(https://static.cdnno.com/storage/topbox/7718aafff5eff59005a5ce7ea61a9cb4.webp)",
          position: "absolute",
          zIndex: 0,
          left: 0,
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
