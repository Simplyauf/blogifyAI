import React from "react";
import Logo from "@/assets/Logo.svg";
import DownArrow from "@/assets/DownArrow.svg";
import { useRouter } from "next/router";

interface PropType {
  children: React.ReactNode;
}

const AuthHeaderLayout = ({ children }: PropType) => {
  const router = useRouter();
  return (
    <>
      <header className="w-full px-[24px] bg-[#EEF2F7] py-[16px] flex justify-between items-center">
        <Logo onClick={() => router.push("/")} className="cursor-pointer" />
        <div className="flex items-end gap-[2px]">
          <h3 className="text-[16px] leading-normal font-semibold text-[#98A0B3] font-DarkerGrotesque">
            English
          </h3>
          <DownArrow />
        </div>
      </header>
      {children}
    </>
  );
};

export default AuthHeaderLayout;
