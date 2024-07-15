export const SongLyric = ({ lyrics }: { lyrics: string }) => {
  return (
    <>
      <h2 className="capitalize font-bold text-[24px] text-[#EFEEE0] mb-[19px]">
        Lời bài hát
      </h2>
      <div className="mb-[30px] rounded-[15px] bg-[#212121] whitespace-pre-line py-[20px] pl-[20px]">
        {lyrics}
      </div>
    </>
  );
};
