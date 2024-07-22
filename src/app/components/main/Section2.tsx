import { Card } from "@/app/interfaces/card/Card";
import { CardShow } from "../card/CardShow";
import { getCategoryList } from "@/app/helpers/getCategories";

export const Section2 = async () => {
  const categoryList: Card[] = await getCategoryList(5);
  return (
    <>
      <div className="my-[30px]">
        <CardShow title="Danh mục nổi bật" data={categoryList} />
      </div>
    </>
  );
};
