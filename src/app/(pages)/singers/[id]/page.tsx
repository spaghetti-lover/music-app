import { CardInfo } from "@/app/components/card/CardInfo.";
import { SongList } from "@/app/components/song/SongList";
import { ISongList } from "@/app/interfaces/song/ISongList";

export default function SingerPage() {
  const songLists: ISongList[] = [
    {
      title: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      duration: "4:32",
      image: "/images/sontungmtp.png",
      link: "/",
    },
    {
      title: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      duration: "4:32",
      image: "/images/sontungmtp.png",
      link: "/",
    },
    {
      title: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      duration: "4:32",
      image: "/images/sontungmtp.png",
      link: "/",
    },
    {
      title: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      duration: "4:32",
      image: "/images/sontungmtp.png",
      link: "/",
    },
    {
      title: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      duration: "4:32",
      image: "/images/sontungmtp.png",
      link: "/",
    },
    {
      title: "Nơi này có anh",
      singer: "Sơn Tùng MTP",
      duration: "4:32",
      image: "/images/sontungmtp.png",
      link: "/",
    },
  ];
  return (
    <>
      <CardInfo
        title="Sơn Tùng MTP"
        sub_title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        image="/images/sontungmtp.png"
      />
      <SongList title={"Danh sách bài hát"} songs={songLists} />
    </>
  );
}
