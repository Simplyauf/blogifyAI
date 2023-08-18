import React from "react";
import Link from "next/link";
import Instagram from "@/assets/InstagramTemp.svg";
import Twitter from "@/assets/Twitter3.svg";
import Dribble from "@/assets/Dribbble.svg";
import Youtube from "@/assets/YoutubeTemp.svg";
import { NavBar } from "@/src/components/blogTemplates/template1/navBar";

export const Footer = () => {
  return (
    <footer className="px-[4%] 2xl:px-[250px] lg:px-[50px] xl:px-[120px]  py-6 border-t border-t-Surface/surface-600">
      <div className="flex flex-col w-full gap-6 justify-center pb-6 border-b border-b-Surface/surface-600">
        <h3 className="text-[58px] text-center  font-bold font-DarkerGrotesque leading-[66px]">
          LOGO
        </h3>
        <NavBar />
      </div>
      <div className="w-full flex-col gap-6 sm:gap-0 sm:flex-row flex justify-between items-center py-[24px] border-t border-t-Surface/surface-600">
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
