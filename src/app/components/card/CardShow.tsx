import { Card } from "@/app/interfaces/card/Card";
import Link from "next/link";

export const CardShow = ({ title, data }: { title: string; data: Card[] }) => {
  return (
    <>
      <h2 className="capitalize text-[24px] font-bold text-[#EFEEE0] mb-[20px]">
        {title}
      </h2>
      <ul className="grid grid-cols-5 gap-5">
        {data.map((item, index) => (
          <li key={index} className="mb-[30px]">
            <Link href={`${item.link}`}>
              <div className="aspect-square truncate rounded-[15px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <h3 className="text-[14px] font-bold my-[10px]">{item.title}</h3>
              <p className="text-[12px] text-[#949494] truncate">
                {item.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
