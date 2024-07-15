"use client";

import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export default function PlayActions() {
  return (
    <>
      <div className="flex items-center justify-center">
        <button className="text-white text-[16px]">
          <FaBackwardStep />
        </button>
        <button className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play play">
          <FaPlay className="inner-icon-play" />
          <FaPause className="hidden inner-icon-pause" />
        </button>
        <button className="text-white text-[16px]">
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}
