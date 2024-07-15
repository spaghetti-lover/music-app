import { CardShow } from "@/app/components/card/CardShow";
import { Card } from "@/app/interfaces/card/Card";

export default function SingerListPage() {
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
      <CardShow data={SingerList} />
    </>
  );
}
