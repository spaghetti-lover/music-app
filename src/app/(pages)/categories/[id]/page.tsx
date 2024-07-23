"use client";

import { CardInfo } from "@/app/components/card/CardInfo.";
import { SongList } from "@/app/components/song/SongList";
import { getCategoryDetail } from "@/app/helpers/getCategories";
import { Card } from "@/app/interfaces/card/Card";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Section1 } from "@/app/(pages)/categories/[id]/Section1";

export default function CategoryDetailPage() {
  const path = usePathname().slice(-1);
  let [category, setCategory] = useState<Card>({
    title: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCategoryDetail(path);
      setCategory(data);
    };
    fetchApi();
  }, [path]);
  return (
    <>
      <CardInfo
        title={category.title}
        description={category.description}
        image={category.image}
      />
      <Section1 />
    </>
  );
}
