import { Card } from "@/app/interfaces/card/Card";

export const CardInfo = (props: Card) => {
  const { title, sub_title, image } = props;
  return (
    <>
      <div className="flex items-center">
        <div className="w-[180px] h-[180px] mr-[20px]">
          <img
            src={image}
            className="w-full h-full truncate aspect-square object-cover"
          ></img>
        </div>
        <div className="flex-1">
          <h2 className="text-primary font-bold text-[35px]">{title}</h2>
          <p className="text-[14px] text-[#EFEEE0]">{sub_title}</p>
        </div>
      </div>
    </>
  );
};
