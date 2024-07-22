"use client";

import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export default function PlayActions() {
  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    const boxButtonPlay = elementPlayAudio.querySelector(".inner-icon-play");
    const boxButtonPause = elementPlayAudio.querySelector(".inner-icon-pause");

    if (boxButtonPlay.classList.contains("hidden")) {
      boxButtonPlay.classList.remove("hidden");
      elementAudio.pause();
      boxButtonPause.classList.add("hidden");
    } else {
      boxButtonPlay.classList.add("hidden");
      elementAudio.play();
      boxButtonPause.classList.remove("hidden");
    }
  };

  const handleNextPrev = (action: string) => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const idCurrentSong = parseInt(elementPlayAudio.getAttribute("song-id"));
    let nextSongId = action === "next" ? idCurrentSong + 1 : idCurrentSong - 1;
    let elementNextPrevSong = document.querySelector(
      `[song-id="${nextSongId}"]`
    );
    if (elementNextPrevSong) {
      const buttonPlay: any = elementNextPrevSong.querySelector(
        "button[button-play]"
      );
      buttonPlay.click();
    }
  };
  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          onClick={() => handleNextPrev("prev")}
          className="text-white text-[16px]"
        >
          <FaBackwardStep />
        </button>
        <button
          onClick={handlePlay}
          className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play play"
        >
          <FaPlay className="hidden inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button
          onClick={() => handleNextPrev("next")}
          className="text-white text-[16px]"
        >
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}
