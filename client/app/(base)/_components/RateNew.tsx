import Image from "next/image";
import Link from "next/link";

const RateNew = () => {
  return (
    <li className="px-4 py-3 pb-4 bg-yellow-white rounded-2 mb-3">
      <div className="d-flex align-items-center">
        <div className="mr-2">
          <Link href="#">
            <Image
              src="https://static.cdnno.com/user/f01d87a4f4aece6c7dd7374e6d283898/50.jpg?1608430973"
              alt="nOzJY54870"
              width={45}
              height={1000}
              className="rounded-circle overflow-hidden mr-2"
            />
          </Link>
        </div>

        <div className="pl-1">
          <div className="text-secondary">
            <Link href="#" className="font-weight-semibold text-body">
              nOzJY54870
            </Link>
            &nbsp;đánh giá
          </div>

          <Link href="#" className="text-danger font-weight-semibold">
            Hokage: Ta Uchiha, Nằm Yên!
          </Link>
        </div>

        <div className="ml-auto bg-danger rounded-3 h6 my-0 text-white px-2 py-1">
          0.50
        </div>
      </div>

      <div className="mt-2 pt-1 text-overflow-3-lines">
        Đọc hơn 100 chap thì drop. Truyện đồng nhân hắc ám bản Naruto nhưng lại
        chơi buff hàng trí cả làng. Nói chung tác non, tình tiết ko đủ.
      </div>
    </li>
  );
};

export default RateNew;
