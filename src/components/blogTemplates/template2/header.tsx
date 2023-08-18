import React, { useState } from "react";
import Search from "@/assets/search 04.svg";
import MenuLIne from "@/assets/menu-line-horizontal.svg";
import { HorizontalNav } from "./horizontalNav";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <HorizontalNav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      <div className="h-[128px] w-full px-[4%] sticky top-0 z-[500] border-b border-b-Surface/surface-400  bg-Brand/Surface/surface-50 lg:px-[50px] xl:px-[120px] 2xl:px-[250px] gap-4 py-[24px] flex justify-between items-center">
        <header className="w-full py-4 flex items-center gap-3 justify-between">
          <div className="relative px-4 max-w-[322px] lg:w-[322px] py-[3px] flex justify-between order-2 sm:order-none items-center bg-Brand/Surface/surface-50 rounded-[48px]  border-Brand/Surface/surface-800 border">
            <input
              type="text"
              className="w-full p-[1px] BigMobile:h-8 h-8 sm:h-10 focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
              placeholder="Search"
            />
            <Search className=" " />
          </div>
          <h3 className="text-[26px] order-1 sm:order-none font-bold font-DarkerGrotesque leading-[34px]">
            LOGO
          </h3>
          <MenuLIne
            className="cursor-pointer  order-3 sm:order-none"
            onClick={() => setIsNavOpen(true)}
          />
        </header>
      </div>
    </>
  );
};
