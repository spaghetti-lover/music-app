import Link from "next/link";
import { FaPlay, FaHeart } from "react-icons/fa6";
import { ISongList } from "@/app/interfaces/song/ISongList";
export const SongInfo = ({ song }: { song: ISongList }) => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] rounded-[15px] mb-[10px] py-[10px] px-[18px]">
        <div className="flex items-center">
          <FaPlay />
          <div className="w-[42px] h-[42px] mx-[12px]">
            <img
              src={song.image}
              alt=""
              className="w-full h-full truncate object-cover"
            />
          </div>
          <Link href={song.link} className="font-bold text-[14px]">
            {song.title}
          </Link>
        </div>
        <div className="text-[14px]">{song.singer}</div>
        <div className="flex items-center">
          <div className="text-[14px] mr-[18px]">{song.listen}</div>
          <div className="text-[20px]">
            <FaHeart />
          </div>
        </div>
      </div>
    </>
  );
};
