"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { FaMusic, FaHeart } from "react-icons/fa";
import { BsPeople, BsFillPersonPlusFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { MenuLink } from "@/app/interfaces/sider/MenuSider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebaseConfig";

const MenuLinks: MenuLink[] = [
  {
    title: "Trang Chủ",
    link: "/",
    icon: <IoMdHome />,
  },
  {
    title: "Danh Mục Bài Hát",
    link: "/categories",
    icon: <FaMusic />,
  },
  {
    title: "Ca Sĩ",
    link: "/singers",
    icon: <BsPeople />,
  },
  {
    title: "Bài Hát Yêu Thích",
    link: "/wishlist",
    icon: <FaHeart />,
  },
  {
    title: "Đăng Xuất",
    link: "/logout",
    icon: <FiLogOut />,
    isShow: true,
  },
  {
    title: "Đăng Nhập",
    link: "/login",
    icon: <IoPerson />,
    isShow: false,
  },
  {
    title: "Đăng Ký",
    link: "/register",
    icon: <BsFillPersonPlusFill />,
    isShow: false,
  },
];

export const SiderMenu = () => {
  let [isLogin, setIsLogin] = React.useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);
  return (
    <>
      <div className="w-[280px] h-[100vh] bg-[#212121] fixed">
        <div className="pl-[20px] py-[25px] bg-[#1C1C1C] text-[#00ADEF] font-bold text-[24px]">
          <Link className="flex items-center" href="/">
            <span className="mr-[6px]">
              <img src="/images/logo.png" className="w-[42px] h-auto" />
            </span>
            <span>Music App</span>
          </Link>
        </div>
        <nav className="pl-[20px] pt-[30px] ">
          <ul>
            {MenuLinks.map((item, index) =>
              item.isShow === undefined || item.isShow === isLogin ? (
                <li key={index} className="font-bold mb-[30px]">
                  <Link
                    className="flex items-center hover:text-primary"
                    href={item.link}
                  >
                    <span className="mr-[20px] text-[22px] h-auto ">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
