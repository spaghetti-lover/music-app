"use client";

export default function PlayTime() {
  return (
    <>
      <div className="mt-[11px] relative box-play-time">
        <div className="bg-primary w-[0] h-[4px] rounded-[50px] absolute top-[13px] left-[0] inner-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className="rounded-[50px] bg-[#FFFFFF0A] w-full h-[4px] appearance-none range-sm cursor-pointer inner-total"
        />
      </div>
    </>
  );
}
