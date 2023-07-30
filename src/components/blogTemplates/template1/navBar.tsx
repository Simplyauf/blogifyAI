import React from "react";
import DownArrow from "@/assets/direction-down 01.svg";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="p-6 w-full flex justify-center items-center gap-8 text-[18px] font-DarkerGrotesque font-semibold leading-normal text-Brand/Text/Text-800">
      <Link href="/blogtemplates/template1/" className="cursor-pointer">
        {" "}
        <span className="">Home</span>
      </Link>{" "}
      <Link href="/blogtemplates/template1/about" className="cursor-pointer">
        {" "}
        <span>About</span>
      </Link>
      <div className="flex items-center gap-1">
        {" "}
        <span>Categories</span> <DownArrow />
      </div>
      <Link href="/blogtemplates/template1/contact" className="cursor-pointer">
        {" "}
        <span>Contact</span>
      </Link>
    </nav>
  );
};
