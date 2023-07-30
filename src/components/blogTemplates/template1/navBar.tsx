import React from "react";
import DownArrow from "@/assets/direction-down 01.svg";

export const NavBar = () => {
  return (
    <nav className="p-6 w-full flex justify-center items-center gap-8 text-[18px] font-DarkerGrotesque font-semibold leading-normal text-Brand/Text/Text-800">
      <span>Home</span>
      <span>About</span>
      <div className="flex items-center gap-1">
        {" "}
        <span>Categories</span> <DownArrow />
      </div>
      <span>Contact</span>
    </nav>
  );
};
