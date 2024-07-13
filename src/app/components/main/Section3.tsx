import { Card } from "@/app/interfaces/Card";
import { CardShow } from "../card/CardShow";

export const Section3 = () => {
  const SingerList: Card[] = [
    {
      title: "Sơn Tùng M-TP",
      sub_title: "Top 100 Sơn Tùng M-TP hay nhất hiện nay",
      image: "/images/sontungmtp.png",
      link: "/",
    },
    {
      title: "Nal",
      sub_title: "Top 100 Nal hay nhất hiện nay",
      image: "/images/nal.png",
      link: "/",
    },
    {
      title: "Tuấn Hưng",
      sub_title: "Top Tuấn Hưng hay nhất hiện nay",
      image: "/images/tuanhung.png",
      link: "/",
    },
    {
      title: "Jimmy Nguyễn",
      sub_title: "Top 10 Jimmy Nguyễn hay nhất hiện nay",
      image: "/images/jimmynguyen.png",
      link: "/",
    },
    {
      title: "BigDaddy",
      sub_title: "Top 10 BigDaddy hay nhất hiện nay",
      image: "/images/bigdaddy.png",
      link: "/",
    },
  ];
  return (
    <>
      <div className="my-[30px]">
        <h1 className="mb-[20px] font-bold text-[24px]">Ca Sĩ Nổi Bật</h1>
        <CardShow data={SingerList} />
      </div>
    </>
  );
};
