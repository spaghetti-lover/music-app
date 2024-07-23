import { IInput } from "@/app/interfaces/input/IInput";

export const Input = (props: IInput) => {
  const { label, placeholder, name, type } = props;

  return (
    <>
      <div className="flex flex-col mb-[15px]">
        <label htmlFor={name} className="mb-[5px]">
          {label}
        </label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-[500px] text-black bg-[#FFFFFF] rounded-[6px] py-[14px] pl-[16px] outline-none"
        />
      </div>
    </>
  );
};
