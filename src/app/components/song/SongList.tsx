import { ISongList } from "@/app/interfaces/song/ISongList";
import { SongInfo } from "./SongInfo";
export const SongList = ({
  title,
  songs,
}: {
  title: string;
  songs: ISongList[];
}) => {
  return (
    <>
      <div className="mt-[30px]">
        <h2 className="capitalize text-[24px] font-bold text-[#EFEEE0] mb-[20px]">
          {title}
        </h2>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <SongInfo song={song} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
