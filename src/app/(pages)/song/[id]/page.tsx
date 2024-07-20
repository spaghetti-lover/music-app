"use client";
import { CardInfo } from "@/app/components/card/CardInfo.";
import { SongLyric } from "@/app/components/song/SongLyric";
import { getSongDetail } from "@/app/helpers/getSong";
import { useEffect, useState } from "react";
import { Section1 } from "@/app/(pages)/song/[id]/Section1";

export default function SongPage({ params }: { params: { id: string } }) {
  const [songDetail, setSongDetail] = useState<any>({});
  useEffect(() => {
    const fetchApi = async () => {
      const data: any = await getSongDetail(params.id);
      setSongDetail(data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <CardInfo
        title={songDetail.title}
        description={songDetail.lyric}
        image={songDetail.image}
      />
      <SongLyric lyrics={songDetail.lyric} />
      <Section1 id={songDetail.categoryId} />
    </>
  );
}
