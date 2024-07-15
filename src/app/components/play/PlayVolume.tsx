"use client";

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  return (
    <>
      <div className="w-[184px] flex items-end box-volume">
        <button className="text-white text-[16px] inner-button">
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-primary w-[100%] h-[3px] rounded-[50px] absolute top-[14px] left-[0] inner-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className="rounded-[50px] bg-[#FFFFFF1A] w-full h-[3px] appearance-none range-sm cursor-pointer inner-total"
          />
        </div>
      </div>
    </>
  );
}
