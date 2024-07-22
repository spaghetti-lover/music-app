"use client";
export default function PlayTime() {
  const handleChange = () => {
    const boxPlayTime: any = document.querySelector(".box-play-time");
    const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total");

    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    elementAudio.currentTime = parseFloat(boxPlayTimeTotal.value);
  };
  return (
    <>
      <div className="mt-[11px] relative box-play-time">
        <div className="bg-primary w-[80%] h-[4px] rounded-[50px] absolute top-[13px] left-[0] inner-current"></div>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={0}
          className="rounded-[50px] bg-[#FFFFFF0A] w-full h-[4px] appearance-none range-sm cursor-pointer inner-total"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
