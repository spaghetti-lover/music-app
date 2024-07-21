import { CardInfo } from "@/app/components/card/CardInfo.";
import { CardShow } from "@/app/components/card/CardShow";
import { SongList } from "@/app/components/song/SongList";
import { getCategoryList } from "@/app/helpers/getCategories";
import { Card } from "@/app/interfaces/card/Card";

export default async function CategoryPage() {
  const categoryList: Card[] = await getCategoryList();
  return (
    <>
      <CardShow title="Danh mục bài hát" data={categoryList} />
    </>
  );
}
