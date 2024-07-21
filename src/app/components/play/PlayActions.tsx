"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export default function PlayActions() {
  const handleButton = () => {
    const elementInnerPlayAudio: any = document.querySelector(
      ".inner-icon-play"
    );
    const elementInnerPauseAudio: any = document.querySelector(
      ".inner-icon-pause"
    );
    if (elementInnerPlayAudio && elementInnerPauseAudio) {
      elementInnerPlayAudio.classList.toggle("hidden");
      elementInnerPauseAudio.classList.toggle("hidden");
    }
    const elementPlayAudio: any = document.querySelector(".play-audio");
    // Play music
    if (elementPlayAudio) {
      const elementInnerAudio = elementPlayAudio.querySelector(".inner-audio");
      elementInnerAudio?.load();
      if (elementInnerPlayAudio.classList.contains("hidden")) {
        elementInnerAudio?.play();
      } else {
        elementInnerAudio?.pause();
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]">
          <FaBackwardStep />
        </button>
        <button
          onClick={handleButton}
          className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play play"
        >
          <FaPlay className="hidden inner-icon-play" />
          <FaPause className=" inner-icon-pause" />
        </button>
        <button className="text-white text-[16px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}
