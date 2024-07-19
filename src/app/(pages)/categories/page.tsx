import { CardInfo } from "@/app/components/card/CardInfo.";
import { SongList } from "@/app/components/song/SongList";
import { ISongList } from "@/app/interfaces/song/ISongList";

export default function CategoryPage() {
  const songLists: ISongList[] = [
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      duration: "4:32",
      image: "/images/hoquanghieu.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      duration: "4:32",
      image: "/images/hoquanghieu.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      duration: "4:32",
      image: "/images/hoquanghieu.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      duration: "4:32",
      image: "/images/hoquanghieu.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      duration: "4:32",
      image: "/images/hoquanghieu.png",
      link: "/",
    },
    {
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu, Huỳnh Văn",
      duration: "4:32",
      image: "/images/hoquanghieu.png",
      link: "/",
    },
  ];
  return (
    <>
      <CardInfo
        title="Nhạc Trẻ"
        description="Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục."
        image="/images/nhactre.png"
      />
      <SongList title={"Danh sách bài hát"} songs={songLists} />
    </>
  );
}
