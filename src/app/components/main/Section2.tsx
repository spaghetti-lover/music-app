import { Card } from "@/app/interfaces/card/Card";
import { CardShow } from "../card/CardShow";

export const Section2 = () => {
  const SongType: Card[] = [
    {
      title: "Nhac Tre",
      description: "Top 100 Nhạc Trẻ hay nhất hiện nay",
      image: "/images/nhactre.png",
    },
    {
      title: "Pop Âu Mỹ",
      description: "Top 100 Pop Âu Mỹ hay nhất hiện nay",
      image: "/images/popaumy.png",
    },
    {
      title: "Nhạc EDM",
      description: "Top 100 Nhạc Electronic/Dance Âu Mỹ",
      image: "/images/nhacedm.png",
    },
    {
      title: "Nhạc Trữ Tình",
      description: "Top 100 Nhạc Trữ Tình hay nhất hiện nay",
      image: "/images/trutinh.png",
    },
    {
      title: "Nhạc Hàn Quốc",
      description: "Top 100 Nhạc Hàn Quốc hay nhất hiện nay",
      image: "/images/hanquoc.png",
    },
  ];
  return (
    <>
      <div className="my-[30px]">
        <CardShow title="Danh mục nổi bật" data={SongType} />
      </div>
    </>
  );
};
