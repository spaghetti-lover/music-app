import { Card } from "@/app/interfaces/card/Card";
import { CardShow } from "../card/CardShow";
import { getSingerList } from "@/app/helpers/getSinger";

export const Section3 = async () => {
  const SingerList: Card[] = await getSingerList(5);
  return (
    <>
      <div className="my-[30px]">
        <CardShow title="Ca Sĩ Nổi Bật" data={SingerList} />
      </div>
    </>
  );
};
