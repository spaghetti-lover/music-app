import { SongList } from "@/app/components/song/SongList";
import { ISongList } from "@/app/interfaces/song/ISongList";

export default function WishlistPage() {
  const songLists: ISongList[] = [
    {
      title: "Cô Phòng",
      singer: "Sơn Tùng M-TP",
      duration: "4:32",
      image: "/images/noinaycoanh.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Sơn Tùng M-TP",
      duration: "4:32",
      image: "/images/noinaycoanh.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Sơn Tùng M-TP",
      duration: "4:32",
      image: "/images/noinaycoanh.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Sơn Tùng M-TP",
      duration: "4:32",
      image: "/images/noinaycoanh.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Sơn Tùng M-TP",
      duration: "4:32",
      image: "/images/noinaycoanh.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Sơn Tùng M-TP",
      duration: "4:32",
      image: "/images/noinaycoanh.png",
      link: "/",
    },
  ];
  return (
    <>
      <SongList title={"Bài hát yêu thích"} songs={songLists} />
    </>
  );
}
