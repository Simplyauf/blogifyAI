import React from "react";
import Link from "next/link";
import Instagram from "@/assets/InstagramTemp.svg";
import Twitter from "@/assets/Twitter3.svg";
import Dribble from "@/assets/Dribbble.svg";
import Youtube from "@/assets/YoutubeTemp.svg";
import { NavBar } from "@/src/components/blogTemplates/template1/navBar";
import Image from "next/image";
import newsletterImg from "@/assets/BGMask.png";

export const Footer = () => {
  return (
    <footer className=" w-full xl:px-[112px] px-[4%] lg:px-[100px] 2xl:px-[140px] ">
      <div className="my-[48px] rounded-[16px] flex flex-col justify-center items-center  relative bg-no-repeat   gap-[8px]  bg-cover w-full">
        <h2 className="font-DarkerGrotesque text-[22px] z-1 relative leading-normal font-semibold text-[#00000]">
          Subscribe to our Newsletter
        </h2>
        <p className="font-medium text-center w-full max-w-[346px] sm:w-[346px] font-DarkerGrotesque text-[#808080]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt
          error illum a explicabo, ipsam nostrum.
        </p>
        <div className="flex items-center mt-[40px]   z-1 relative w-full  sm:w-[420px] h-[50px]">
          <input
            type="email"
            name=""
            id=""
            className="px-[16px] py-[14px] bg-text/gr placeholder:text-Text/Gray-800 bg-Text/Gray-100 font-DarkerGrotesque font-medium leading-normal rounded-l-[5px] h-full w-full"
            placeholder="Your work email address"
          />
          <button className="rounded-r-[5px] w-[40%] px-6  sm:w-[117px] text-white h-full sm:px-6 py-[14px] bg-Brand/Primary/Primary-800">
            Suscribe
          </button>
        </div>
      </div>
      <div className=" w-full flex-col gap-6 sm:gap-0 sm:flex-row flex justify-between items-center py-[24px] border-t border-t-Surface/surface-600 ">
        <p className="text-[14px]   leading-6">
          - © {new Date().getFullYear()} Blogify Template. All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <Link href="">
            <Instagram />
          </Link>
          <Link href="">
            <Dribble />
          </Link>
          <Link href="">
            <Twitter />
          </Link>
          <Link href="">
            <Youtube />
          </Link>
        </div>
      </div>
    </footer>
  );
};
