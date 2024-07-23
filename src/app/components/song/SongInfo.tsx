"use client";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { ButtonPlay } from "../button/ButtonPlay";
import { getSingerList } from "@/app/helpers/getSinger";
import { useEffect, useState } from "react";
import { ButtonHeart } from "../button/ButtonHeart";
export const SongInfo = ({ song }: { song: ISongList }) => {
  let [singerList, setSingerList] = useState<any>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const list = await getSingerList();
      setSingerList(list);
    };

    fetchApi();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] rounded-[15px] mb-[10px] py-[10px] px-[18px] ">
        <div className="flex items-center">
          <ButtonPlay className="" song={song} />
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
        <div className="text-[14px]">
          {singerList
            .filter((item: any) => song.singerId.includes(item.id))
            .map((item: any) => item.title)
            .join(", ")}
        </div>
        <div className="flex items-center">
          <div className="text-[14px] mr-[18px]">{song.listen}</div>
          <ButtonHeart song={song} className="text-[20px]" />
        </div>
      </div>
    </>
  );
};
