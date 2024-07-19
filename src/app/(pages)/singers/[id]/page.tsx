import { CardInfo } from "@/app/components/card/CardInfo.";
import { SongList } from "@/app/components/song/SongList";
import { getSingerDetail, getSingerList } from "@/app/helpers/getSinger";
import { getSongList } from "@/app/helpers/getSong";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { Section1 } from "../../singers/[id]/Section1";

export default async function SingerPage({
  params,
}: {
  params: { id: string };
}) {
  // const songLists: ISongList[] = [
  //   {
  //     title: "Nơi này có anh",
  //     singer: "Sơn Tùng MTP",
  //     duration: "4:32",
  //     image: "/images/sontungmtp.png",
  //     link: "/",
  //   },
  //   {
  //     title: "Nơi này có anh",
  //     singer: "Sơn Tùng MTP",
  //     duration: "4:32",
  //     image: "/images/sontungmtp.png",
  //     link: "/",
  //   },
  //   {
  //     title: "Nơi này có anh",
  //     singer: "Sơn Tùng MTP",
  //     duration: "4:32",
  //     image: "/images/sontungmtp.png",
  //     link: "/",
  //   },
  //   {
  //     title: "Nơi này có anh",
  //     singer: "Sơn Tùng MTP",
  //     duration: "4:32",
  //     image: "/images/sontungmtp.png",
  //     link: "/",
  //   },
  //   {
  //     title: "Nơi này có anh",
  //     singer: "Sơn Tùng MTP",
  //     duration: "4:32",
  //     image: "/images/sontungmtp.png",
  //     link: "/",
  //   },
  //   {
  //     title: "Nơi này có anh",
  //     singer: "Sơn Tùng MTP",
  //     duration: "4:32",
  //     image: "/images/sontungmtp.png",
  //     link: "/",
  //   },
  // ];
  const singer: any = await getSingerDetail(params.id);

  return (
    <>
      <CardInfo
        title={singer.title}
        description={singer.description}
        image={singer.image}
      />
      <Section1 id={params.id} />
    </>
  );
}
