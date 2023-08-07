import React from "react";
import ArrowDown from "@/assets/DownArrow.svg";

export const InstagramCaptions = () => {
  return (
    <form action="" className="lg:w-[40%] w-full">
      <div className="">
        <div className="mt-4">
          <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
            Title
          </h5>
          <textarea
            name=""
            id=""
            placeholder="title"
            className="w-full h-[262px] py-[4px] mt-[10px]   border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px] resize-none"
          ></textarea>
        </div>
        <div className="mt-4">
          <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
            Languages
          </h5>
          <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
            <input
              type="text"
              placeholder="English USA"
              className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
            />
            <ArrowDown />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-4 mt-4">
          <div className="">
            <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
              Maximum Length
            </h5>
            <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <input
                type="text"
                placeholder="400"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
            </div>
          </div>
          <div className="">
            <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
              Number of Results
            </h5>
            <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <input
                type="number"
                inputMode="numeric"
                placeholder="1"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
            </div>
          </div>
          <div className="">
            <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
              Creativity
            </h5>
            <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <input
                type="text"
                placeholder="Average"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
              <ArrowDown />
            </div>
          </div>
          <div className="">
            <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
              Tone of Voice
            </h5>
            <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <input
                type="text"
                placeholder="Professional"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
      <button className="w-full mt-4 h-12 px-4 rounded-[8px] flex justify-center items-center py-3 text-Brand/Surface/surface-50 bg-Brand/Primary/Primary-800">
        Generate
      </button>
    </form>
  );
};
