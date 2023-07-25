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
          <div className="flex items-center gap-[2px]">
            <p className="text-Brand/Text/Text-400 ">English</p>
            <DownArrow />
          </div>
        </div>
      </header>
      <section className="mt-[76px] w-full">{children}</section>
    </div>
  );
};

export default AuthHeaderLayout;
