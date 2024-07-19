"use client";
import { CardShow } from "@/app/components/card/CardShow";
import { getSingerList } from "@/app/helpers/getSinger";
import { Card } from "@/app/interfaces/card/Card";
import { useEffect, useState } from "react";

export default function SingerListPage() {
  const [listSinger, setListSinger] = useState<Card[]>([]);
  useEffect(() => {
    const fetchApi = async () => {
      const new_list = await getSingerList();
      setListSinger(new_list);
    };
    fetchApi();
  }, []);

  return (
    <>
      <CardShow title="Danh sách ca sĩ" data={listSinger} />
    </>
  );
}
