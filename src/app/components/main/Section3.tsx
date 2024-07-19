import { Card } from "@/app/interfaces/card/Card";
import { CardShow } from "../card/CardShow";

export const Section3 = () => {
  const SingerList: Card[] = [
    {
      title: "Sơn Tùng M-TP",
      description: "Top 100 Sơn Tùng M-TP hay nhất hiện nay",
      image: "/images/sontungmtp.png",
    },
    {
      title: "Nal",
      description: "Top 100 Nal hay nhất hiện nay",
      image: "/images/nal.png",
    },
    {
      title: "Tuấn Hưng",
      description: "Top Tuấn Hưng hay nhất hiện nay",
      image: "/images/tuanhung.png",
    },
    {
      title: "Jimmy Nguyễn",
      description: "Top 10 Jimmy Nguyễn hay nhất hiện nay",
      image: "/images/jimmynguyen.png",
    },
    {
      title: "BigDaddy",
      description: "Top 10 BigDaddy hay nhất hiện nay",
      image: "/images/bigdaddy.png",
    },
  ];
  return (
    <>
      <div className="my-[30px]">
        <CardShow title="Ca Sĩ Nổi Bật" data={SingerList} />
      </div>
    </>
  );
};
