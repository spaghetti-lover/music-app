import { Card } from "@/app/interfaces/card/Card";
import Link from "next/link";

export const CardShow = ({ data }: { data: Card[] }) => {
  return (
    <>
      <ul className="flex  grid grid-cols-5">
        {data.map((item, index) => (
          <Link href={item.link}>
            <li key={index} className="mr-[20px] mb-[30px]">
              <div className="">
                <img src={item.image} alt="" />
              </div>
              <h3 className="text-[14px] font-bold">{item.title}</h3>
              <p className="text-[12px] text-[#949494]">{item.sub_title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
