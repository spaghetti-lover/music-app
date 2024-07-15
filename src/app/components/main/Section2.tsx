import { Card } from "@/app/interfaces/card/Card";
import { CardShow } from "../card/CardShow";

export const Section2 = () => {
  const SongType: Card[] = [
    {
      title: "Nhac Tre",
      sub_title: "Top 100 Nhạc Trẻ hay nhất hiện nay",
      image: "/images/nhactre.png",
      link: "/categories",
    },
    {
      title: "Pop Âu Mỹ",
      sub_title: "Top 100 Pop Âu Mỹ hay nhất hiện nay",
      image: "/images/popaumy.png",
      link: "/",
    },
    {
      title: "Nhạc EDM",
      sub_title: "Top 100 Nhạc Electronic/Dance Âu Mỹ",
      image: "/images/nhacedm.png",
      link: "/",
    },
    {
      title: "Nhạc Trữ Tình",
      sub_title: "Top 100 Nhạc Trữ Tình hay nhất hiện nay",
      image: "/images/trutinh.png",
      link: "/",
    },
    {
      title: "Nhạc Hàn Quốc",
      sub_title: "Top 100 Nhạc Hàn Quốc hay nhất hiện nay",
      image: "/images/hanquoc.png",
      link: "/",
    },
  ];
  return (
    <>
      <div className="my-[30px]">
        <h1 className="mb-[20px] font-bold text-[24px]">Danh Mục Nổi Bật</h1>
        <CardShow data={SongType} />
      </div>
    </>
  );
};
