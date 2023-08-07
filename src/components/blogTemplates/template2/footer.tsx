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
    <footer className=" px-[100px] w-full xl:px-[165px] 2xl:px-[180px] ">
      <div className="my-[64px] rounded-[16px] flex flex-col justify-center items-center  relative bg-no-repeat  h-[400px] gap-[33px]  bg-cover w-full">
        <div className="absolute inset-0">
          <Image src={newsletterImg} alt="background image" fill />
        </div>

        <h2 className="font-DarkerGrotesque text-[42px] z-1 relative leading-[50px] font-bold text-[#00000]">
          Subscribe to our Newsletter
        </h2>
        <div className="flex items-center z-1 relative w-[365px] h-[50px]">
          <input
            type="email"
            name=""
            id=""
            className="px-[16px] py-[14px] placeholder:text-Text/Gray-800 font-DarkerGrotesque font-medium leading-normal rounded-l-[5px] h-full"
            placeholder="Your work email address"
          />
          <button className="rounded-r-[5px] w-[117px] text-white h-full px-6 py-[14px] bg-Text/Gray-900">
            Suscribe
          </button>
        </div>
      </div>
      <div className=" w-full flex justify-between items-center py-[24px] border-t border-t-Surface/surface-600 ">
        <p className="text-[14px]   leading-6">
          {" "}
          © {new Date().getFullYear()} Blogify Template. All rights reserved
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
