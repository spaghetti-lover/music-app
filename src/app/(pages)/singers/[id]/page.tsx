import { CardInfo } from "@/app/components/card/CardInfo.";
import { getSingerDetail, getSingerList } from "@/app/helpers/getSinger";
import { Section1 } from "../../singers/[id]/Section1";

export default async function SingerPage({
  params,
}: {
  params: { id: string };
}) {
  const singer: any = await getSingerDetail(params.id);

  return (
    <>
      <CardInfo
        title={singer.title}
        description={singer.description}
        image={singer.image}
      />
      <Section1 id={params.id} />
    </>
  );
}
