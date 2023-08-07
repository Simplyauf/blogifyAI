import React, { useState } from "react";
import Search from "@/assets/search-white.svg";
import MenuLIne from "@/assets/menu-line-horizontal-white.svg";
import { HorizontalNav } from "./horizontalNav";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <HorizontalNav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      <div className="h-[128px] w-full px-[4%] sticky top-0 z-[500] lg:px-[112px] gap-4 py-[24px] bg-Brand/Primary/Primary-800 flex justify-between items-center">
        <header className="w-full py-4 flex items-center justify-between">
          <div className="relative px-4 max-w-[322px] lg:w-[322px] py-[3px] flex justify-betwesen items-center bg-transparent rounded-[48px]  border-Brand/Surface/surface-800 border">
            <input
              type="text"
              className="w-full p-[1px] h-10  focus-visible:bg-Brand/Surface/surface-50 bg-transparent focus-visible:bg-transparent placeholder:text-white text-Brand/Text/Text-100 focus-visible:outline-0 border-0"
              placeholder="Search"
            />
            <Search className=" " />
          </div>
          <h3 className="text-[26px]  font-bold font-DarkerGrotesque leading-[34px] text-Brand/Text/Text-100">
            LOGO
          </h3>
          <MenuLIne
            className="cursor-pointer "
            onClick={() => setIsNavOpen(true)}
          />
        </header>
      </div>
    </>
  );
};
