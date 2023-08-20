import React from "react";
import DownArrow from "@/assets/direction-down 01.svg";
import Link from "next/link";
import { useState } from "react";
import { data } from "@/src/components/blogTemplates/template1/dataJson";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const NavBar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => {
    setCategoryOpen(false);
  }, [pathname]);

  return (
    <nav className="p-6 w-full flex justify-center items-center gap-4 sm:gap-8 text-[18px] font-DarkerGrotesque font-semibold leading-normal text-Brand/Text/Text-800">
      <Link href="/blogtemplates/template1/" className="cursor-pointer">
        {" "}
        <span className="">Home</span>
      </Link>{" "}
      <Link href="/blogtemplates/template1/about" className="cursor-pointer">
        {" "}
        <span>About</span>
      </Link>
      <div className="relative ">
        {" "}
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <span>Categories</span> <DownArrow className="cursor-pointer" />
        </div>
        <div
          className={`w-[180px] sm:w-[250px] absolute top-[40px] z-[100] shadow flex flex-col bg-white transition-all duration-700 ease-in-out rounded-md ${
            categoryOpen ? " translate-y-0 h-auto" : " opacity-0 h-0 z-[-10]"
          }`}
        >
          {data.map((elem: any, index: any) => {
            return (
              <Link
                key={index}
                href={`/blogtemplates/template1/posts/${elem.title}`}
                className="cursor-pointer"
              >
                <div
                  className={`px-6 py-2 cursor-pointer hover:bg-Brand/Surface/surface-200 transition-all duration-150  ${
                    categoryOpen ? "h-auto" : "hidden"
                  }`}
                >
                  {elem.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Link href="/blogtemplates/template1/contact" className="cursor-pointer">
        {" "}
        <span>Contact</span>
      </Link>
    </nav>
  );
};
