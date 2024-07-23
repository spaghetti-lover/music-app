"use client";
import { SongList } from "@/app/components/song/SongList";
import { getSongList } from "@/app/helpers/getSong";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Section1() {
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get("keyword") || "";
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data: any[] = await getSongList();
      const regex = new RegExp(keywordDefault, "i");
      const dataFilter: any[] = data.filter((item: any) =>
        regex.test(item.title)
      );
      setData(dataFilter);
    };
    fetchApi();
  }, [keywordDefault]);
  return (
    <>
      <Suspense>
        {data.length === 0 ? (
          <div>
            <h2>Không tìm thấy kết qua </h2>
          </div>
        ) : (
          <SongList title={"Kết quả tìm kiếm"} songs={data} />
        )}
      </Suspense>
    </>
  );
}
