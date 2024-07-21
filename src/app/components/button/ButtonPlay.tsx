"use client";
import { getSingerList } from "@/app/helpers/getSinger";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface ButtonPlayProps {
  song: ISongList;
}

export const ButtonPlay: React.FC<ButtonPlayProps> = ({ song }) => {
  let [singerList, setSingerList] = useState<any>([]);
  useEffect(() => {
    const fetchApi = async () => {
      await getSingerList().then((res) => {
        setSingerList(res);
      });
    };
    fetchApi();
  });
  const {
    id = "",
    image = "",
    title = "",
    singerId = "",
    listen = 0,
    audio = "",
  } = song;
  const handleAudio = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    // Play music
    if (elementPlayAudio) {
      const elementInnerAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementInnerSource = elementInnerAudio.querySelector(
        ".inner-source"
      );
      const elementInnerImage = elementPlayAudio.querySelector(".inner-image");
      const elementInnerTitle = elementPlayAudio.querySelector(".inner-title");
      const elementInnerSinger = elementPlayAudio.querySelector(
        ".inner-singer"
      );
      elementInnerSource.src = audio;
      elementInnerAudio?.load();
      elementInnerAudio?.play();

      //Load music info
      elementInnerImage.src = image;
      elementInnerTitle.textContent = title;
      const singer = singerList.filter((item: any) =>
        singerId.includes(item.id)
      );
      elementInnerSinger.textContent = singer.map((item: any) => item.title);
    }

    elementPlayAudio.classList.remove("hidden");
  };
  return (
    <>
      <button
        onClick={handleAudio}
        className="mx-[10px] rounded-full inline-flex justify-center items-center text-white w-[34px] h-[34px] text-[15px] border border-white hover:bg-primary hover:border-primary"
      >
        <FaPlay />
      </button>
    </>
  );
};
