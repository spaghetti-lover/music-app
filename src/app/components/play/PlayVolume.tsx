"use client";

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  const handleVolumeChange = () => {
    // Get the current volume and total volume elements
    const current = document.querySelector(
      ".inner-volume-current"
    ) as HTMLDivElement;
    const total = document.querySelector(
      ".inner-volume-total"
    ) as HTMLInputElement;
    const value: any = total.value;
    current.style.width = `${value}%`;

    // Set the volume of the audio element
    const elementPlayAudio: any = document.querySelector(
      ".play-audio"
    ) as HTMLAudioElement;
    const elementAudio = elementPlayAudio.querySelector(
      ".inner-audio"
    ) as HTMLAudioElement;
    elementAudio.volume = value / 100;
  };

  const handleButtonVolume = () => {
    // Get the current volume and total volume elements
    const current = document.querySelector(
      ".inner-volume-current"
    ) as HTMLDivElement;
    const total = document.querySelector(
      ".inner-volume-total"
    ) as HTMLInputElement;
    const value: any = total.value;
    const elementPlayAudio: any = document.querySelector(
      ".play-audio"
    ) as HTMLAudioElement;
    const elementAudio = elementPlayAudio.querySelector(
      ".inner-audio"
    ) as HTMLAudioElement;
    if (value > 0) {
      current.style.width = `0%`;
      total.value = "0";
      elementAudio.volume = 0;
    } else {
      current.style.width = `100%`;
      total.value = "100";
      elementAudio.volume = 1;
    }
  };
  return (
    <>
      <div className="w-[184px] flex items-end box-volume">
        <button
          onClick={handleButtonVolume}
          className="text-white text-[16px] inner-volume-button"
        >
          <FaVolumeHigh />
        </button>
        <div className="ml-[6px] relative">
          <div className="bg-primary w-[100%] h-[3px] rounded-[50px] absolute top-[14px] left-[0] inner-volume-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className="rounded-[50px] bg-[#FFFFFF1A] w-full h-[3px] appearance-none range-sm cursor-pointer inner-volume-total"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </>
  );
}
