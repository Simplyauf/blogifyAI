import React from "react";
import Logo from "@/assets/Logo.svg";
import DownArrow from "@/assets/DownArrow.svg";
import { useRouter } from "next/router";

import Search from "@/assets/search 03.svg";
import Notification from "@/assets/notification.svg";
import Userpic from "@/assets/Userpic.svg";

interface PropType {
  children: React.ReactNode;
}

const AuthHeaderLayout = ({ children }: PropType) => {
  const router = useRouter();
  return (
    <div>
      <header className="w-full px-[24px] bg-Brand/Surface/surface-50 border border-Surface/surface-400 py-[16px] flex justify-between items-center z-[1000] fixed top-0">
        <Logo onClick={() => router.push("/")} className="cursor-pointer" />
        <div className="flex items-center gap-[24px]">
          <div className="relative w-[320px] flex justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-lg  border-Brand/Surface/surface-800 border">
            <input
              type="text"
              className="w-[82%] pr-4 ml-4 h-10  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
              placeholder="Explore"
            />
            <Search className=" " />
          </div>
          <div className="flex rounded-[50px] bg-Surface/surface-400 flex-col items-end p-2 relative">
            <Notification />
            <div className="w-[6px] h-[6px] rounded-[99px] bg-Accent/Danger/Danger-800 border border-s-Brand/Surface/surface-50 absolute top-[9px] right-[12px]"></div>
          </div>

          <div className="flex items-center gap-[2px]">
            <Userpic className="w-10 h-10 rounded-[50%]" />
            <DownArrow />
          </div>
        </div>
      </header>
      <section className="mt-[76px] w-full">{children}</section>
    </div>
  );
};

export default AuthHeaderLayout;
