import React from "react";
import { NavBar } from "@/src/components/blogTemplates/template1/navBar";
import Search from "@/assets/search 04.svg";

export const Header = () => {
  return (
    <>
      <header className="w-full px-[4%] border-b border-b-Surface/surface-400 lg:px-[120px] gap-4  py-[20px] bg-Brand/Surface/surface-50 sticky top-0 z-[500] flex justify-between items-center ">
        <h3 className="text-[58px]  font-bold font-DarkerGrotesque leading-[66px]">
          LOGO
        </h3>
        <div className="relative px-4 max-w-[322px] lg:w-[322px] py-[3px] flex justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-[48px]  border-Brand/Surface/surface-800 border">
          <input
            type="text"
            className="w-full p-[1px] h-10  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
            placeholder="Search"
          />
          <Search className=" " />
        </div>
      </header>

      <NavBar />
    </>
  );
};
