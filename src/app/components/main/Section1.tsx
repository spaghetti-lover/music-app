"use client";
import Image from "next/image";
import { FaHeart, FaPlay } from "react-icons/fa";
import { getSongList } from "@/app/helpers/getSong";
import { useEffect, useState } from "react";
import { ButtonPlay } from "../button/ButtonPlay";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { getSingerList } from "@/app/helpers/getSinger";
export const Section1 = () => {
  // interface MenuMusic {
  //   key: string;
  //   id: string;
  //   title: string;
  //   singer: string;
  //   listen: number;
  //   image: string;
  // }
  let [MenuMusic, setMenuMusic] = useState<ISongList[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getSongList(3);
      setMenuMusic(data);
    };
    fetchApi();
  }, []);

  let [singerList, setSingerList] = useState<any>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const list = await getSingerList();
      setSingerList(list);
    };
    fetchApi();
  });

  return (
    <div className="flex">
      <div className="relative flex items-center w-[50%] rounded-[15px] bg-[url('/images/HeroSection.png')] pt-[40px] px-[30px]">
        <div className=" mr-[180px]">
          <h3 className="text-[32px] font-bold">Nhạc EDM</h3>
          <p className="text-[14px] font-medium">
            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot
            nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
          </p>
        </div>
        <div>
          <Image
            src="/images/Singer.png"
            alt="Hero"
            width={200}
            height={300}
            className="bottom-0 right-0 absolute"
          />
        </div>
      </div>
      <div className="w-[50%] ml-[20px]">
        <h3 className="text-[24px] font-bold">Nghe nhiều</h3>
        <div>
          <ul>
            {MenuMusic.map((item, index) => (
              <li
                key={item.id}
                song-id={item.id}
                className="inner-song-item flex items-center justify-between py-[20px] border-b border-[#333]"
              >
                <div className=" flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="mx-[10px] w-[76px] aspect-square truncate">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[16px] font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-[12px] text-[#909090]">
                        {singerList
                          .filter((song: any) =>
                            item.singerId.includes(song.id)
                          )
                          .map((item: any) => item.title)
                          .join(", ")}
                      </p>
                      <p className="text-[12px]">{item.listen} lượt nghe</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ButtonPlay
                      className="mx-[10px] rounded-full inline-flex justify-center items-center text-white w-[34px] h-[34px] text-[15px] border border-white hover:bg-primary hover:border-primary"
                      song={item}
                    />
                    <button className="mx-[10px] rounded-full inline-flex justify-center items-center text-white w-[34px] h-[34px] text-[15px] border border-white hover:bg-primary hover:border-primary">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
