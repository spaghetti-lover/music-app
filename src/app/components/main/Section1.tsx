import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa";
export const Section1 = () => {
  interface MenuMusic {
    title: string;
    views: number;
    singer: string;
    image: string;
  }

  const MenuMusic: MenuMusic[] = [
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      views: 24500,
      image: "/images/hoquanghieu.png",
    },
    {
      title: "Hoa Nở Bên Đường",
      singer: "Quang Đăng Trần, ACV",
      views: 20500,
      image: "/images/HoaNoBenDuong.png",
    },
    {
      title: "Hứa Đợi Nhưng Chẳng Tới",
      singer: "Lâm Tuấn, Vương Thiên Tuấn",
      views: 18200,
      image: "/images/HuaDoiNhungChangToi.png",
    },
  ];

  return (
    <div className="flex">
      <div className="relative flex items-center w-[50%] rounded-[15px] bg-[url('/images/HeroSection.png')] pt-[40px] px-[30px]">
        <div className=" mr-[180px]">
          <h3 className="text-[32px] font-bold">Nhạc EDM</h3>
          <p className="text-[14px] font-medium">
            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
            nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
          </p>
        </div>
        <div>
          <Image
            src="/images/Singer.png"
            alt="Hero"
            width={200}
            height={300}
            className="bottom-0 right-0 absolute"
          />
        </div>
      </div>
      <div className="w-[50%] ml-[20px]">
        <h3 className="text-[24px] font-bold">Nghe nhiều</h3>
        <div>
          <ul>
            {MenuMusic.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-[20px] border-b border-[#333]"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="mx-[10px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={76}
                        height={76}
                      />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-[#909090]">
                        {item.singer}
                      </p>
                      <p className="text-[12px]">{item.views} lượt nghe</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="mx-[10px] rounded-full inline-flex justify-center items-center text-white w-[34px] h-[34px] text-[15px] border border-white hover:bg-primary hover:border-primary">
                      <FaPlay />
                    </button>
                    <button className="mx-[10px] rounded-full inline-flex justify-center items-center text-white w-[34px] h-[34px] text-[15px] border border-white hover:bg-primary hover:border-primary">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
