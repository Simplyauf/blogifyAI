import React from "react";
import Logo from "@/assets/pen.svg";
import MenuLine from "@/assets/menu-line-horizontal.svg";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex justify-between items-center px-[4%] py-8  backdrop-blur-[20px]  bg-[rgb(230,236,244,0.5)]">
      <div className="flex gap-2 items-center">
        {" "}
        <div
          className="flex justify-center items-center rounded-[50%]  bg-Brand/Primary/Primary-800 w-8 h-8 p-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Logo />
        </div>
        <h3 className="text-Brand/Primary/Primary-800 font-bold leading-[34px] font-DarkerGrotesque text-[26px]">
          Blogify
        </h3>
      </div>
      <ul className="hidden items-center gap-6 md:flex">
        <Link
          className="font-DarkerGrotesque text-[18px] font-bold leading-[26px] text-Brand/Primary/Primary-800"
          href="/"
        >
          <li>About</li>
        </Link>
        <Link
          className="font-DarkerGrotesque text-[18px]  leading-[26px] text-[#0b0a33] font-semibold"
          href="/"
        >
          <li>Pricing</li>
        </Link>
        <Link
          className="font-DarkerGrotesque text-[18px] font-bold leading-[26px] text-Brand/Primary/Primary-800"
          href="/"
        >
          <li>Contacts</li>
        </Link>
        <Link
          className="font-DarkerGrotesque text-[18px] font-bold leading-[26px] text-Brand/Primary/Primary-800"
          href="/"
        >
          <li>FAQs</li>
        </Link>
      </ul>
      <div className="flex md:hidden justify-center items-center rounded-[50%]  bg-Brand/Primary/Primary-800 w-10 h-10 p-2 cursor-pointer">
        <MenuLine className="stroke-Brand/Text/Text-100" />
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Link
          className="font-DarkerGrotesque text-[18px] font-bold leading-[26px] text-Brand/Primary/Primary-800"
          href="/"
        >
          <span>Login</span>
        </Link>
        <button className=" md:h-[44px] lg:h-[48px] flex justify-center items-center text-[20px] bg-Brand/Primary/Primary-800 rounded-[4px] text-Brand/Surface/surface-50 font-medium leading-8 font-DarkerGrotesque md:w-[120px]  lg:w-[148px] ">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
