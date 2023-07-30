import React from "react";
import Search from "@/assets/search 04.svg";

export const Newsletter = () => {
  return (
    <article className="p-6 rounded-[8px] w-full bg-Brand/Text/Text-800 flex flex-col gap-6">
      <h2 className="font-DarkerGrotesque  text-[18px] text-white  leading-normal font-semibold text-[#00000]">
        Suscribe to our newsletter
      </h2>
      <div className="relative px-4 w-full py-[3px] flex justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-[32px]  border-Brand/Surface/surface-800 border">
        <input
          type="text"
          className="w-full p-[1px] h-10  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
          placeholder="Search"
        />
        <Search className=" " />
      </div>
      <button
        type="submit"
        className="w-full h-[48px] rounded-[32px] bg-Brand/Surface/surface-50  text-[20px] font-medium leading-8 font-DarkerGrotesque text-Brand/Text/Text-800"
      >
        Suscribe
      </button>
    </article>
  );
};
