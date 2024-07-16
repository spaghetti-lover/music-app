import { Input } from "../input/Input";

export const Login = () => {
  return (
    <>
      <form className="flex flex-col justify-center items-center">
        <div className="font-bold text-[24px] text-center mb-[20px]">
          Đăng nhập vào tài khoản
        </div>
        <Input
          label="Email"
          placeholder="Ví dụ: levana@gmail.com"
          name="password"
        />
        <Input label="Mật khẩu" placeholder="" name="password" />
        <button className="w-[500px] font-bold bg-primary rounded-[6px] py-[14px] pl-[16px]">
          Đăng nhập
        </button>
      </form>
    </>
  );
};
