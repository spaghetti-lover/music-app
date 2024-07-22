"use client";
import { getSingerList } from "@/app/helpers/getSinger";
import { ISongList } from "@/app/interfaces/song/ISongList";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface ButtonPlayProps {
  song: ISongList;
  className?: string;
}

export const ButtonPlay: React.FC<ButtonPlayProps> = ({ className, song }) => {
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

      //Update play button
      const boxButtonPlay = elementPlayAudio.querySelector(".inner-icon-play");
      const boxButtonPause = elementPlayAudio.querySelector(
        ".inner-icon-pause"
      );
      if (boxButtonPause.classList.contains("hidden")) {
        boxButtonPlay.classList.add("hidden");
        boxButtonPause.classList.remove("hidden");
      }
      //Load music info
      elementPlayAudio.setAttribute("song-id", id);
      elementInnerImage.src = image;
      elementInnerTitle.textContent = title;
      const singer = singerList.filter((item: any) =>
        singerId.includes(item.id)
      );
      elementInnerSinger.textContent = singer.map((item: any) => item.title);

      // Update music time
      const boxPlayTime: any = document.querySelector(".box-play-time");
      const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total");
      const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current");

      elementInnerAudio.onloadedmetadata = () => {
        // Update total time
        const totalTime = elementInnerAudio.duration;
        boxPlayTimeTotal.max = totalTime;

        // Update current time
        elementInnerAudio.ontimeupdate = () => {
          const currentTime = elementInnerAudio.currentTime;
          boxPlayTimeTotal.value = currentTime;
          const percent = (currentTime * 100) / totalTime;
          boxPlayTimeCurrent.style.width = `${percent}%`;
        };
      };
    }

    elementPlayAudio.classList.remove("hidden");
  };

  return (
    <>
      <button onClick={handleAudio} className={className} button-play="">
        <FaPlay />
      </button>
    </>
  );
};
