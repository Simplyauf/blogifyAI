import { Tab } from "@headlessui/react";
import React from "react";
import ImageRectangle from "@/assets/image-rectangle.svg";
import TextIcon from "@/assets/text.svg";
import Upload from "@/assets/upload 01.svg";
import Close from "@/assets/close-fill.svg";
import { useState } from "react";
import { useEffect } from "react";

interface PropTypes {
  setCreateBlogModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  CreateBlogModalOpen: boolean;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const SecondStep = ({
  setCreateBlogModalOpen,
  setCurrentStep,
  CreateBlogModalOpen,
}: PropTypes) => {
  return (
    <>
      <div
        className={`relative w-[468px] max-w-[96%] overflow-y-auto overflow-x-hidden p-6 max-h-[96vh] xl:max-h-[90vh] h-[620px]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 ${
          CreateBlogModalOpen ? "opacity-100 z-[1005]" : "opacity-0 z-[-5]"
        } `}
      >
        <div className="flex w-full justify-between p-2 pl-0">
          <h2 className="text-[#000] text-[20px] font-bold  leading-7 font-DarkerGrotesque ">
            Choose colors
          </h2>
          <Close className="cursor-pointer" onClick={() => setCurrentStep(1)} />
        </div>
        <h2 className="text-Brand/Text/Text-800 text-[18px] mt-6 font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
          Step 2 of 4
        </h2>
        <div className="w-full border-2 mt-6 gap-4 shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 border-Surface/surface-400 p-4 pb-6 flex flex-col rounded-[8px]">
          <div className="flex flex-col gap-1">
            <h2 className="font-DarkerGrotesque text-[20px] font-bold leading-7 text-Brand/Text/Text-800 ">
              Color
            </h2>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600">
              Customize your brand color
            </p>
          </div>
          <div className="w-full h-[50px] mt-6 py-[4px] border rounded-lg bg-Brand/Surface/surface-50 border-Surface/surface-400 flex items-center gap-[16px] px-[16px] relative">
            <span className="w-full text-Brand/Text/Text-800 text-[16px]   font-DarkerGrotesque font-semibold leading-normal">
              Primary Color
            </span>
            <input
              type="color"
              id="color"
              value="#ffffff"
              placeholder=""
              className="w-full h-full bg-transparent absolute top-0 left-0 cursor-pointer  border-transparent opacity-0 focus-visible:border-transparent focus-visible:outline-transparent text-Brand/Text/Text-800 text-[16px]  font-DarkerGrotesque font-semibold leading-normal"
            />
            <label className="w-6 h-6 rounded-[4px] cursor-pointer border-[0.5px] border-Surface/surface-400 bg-Accent/Warning/Warning-800"></label>
          </div>
          <div className="w-full h-[50px] mt-6 py-[4px] border rounded-lg bg-Brand/Surface/surface-50 border-Surface/surface-400 flex items-center gap-[16px] px-[16px] relative">
            <span className="w-full text-Brand/Text/Text-800 text-[16px]   font-DarkerGrotesque font-semibold leading-normal">
              Secondary Color
            </span>
            <input
              type="color"
              id="color"
              value="#ffffff"
              placeholder=""
              className="w-full h-full bg-transparent absolute top-0 left-0 cursor-pointer  border-transparent opacity-0 focus-visible:border-transparent focus-visible:outline-transparent text-Brand/Text/Text-800 text-[16px]  font-DarkerGrotesque font-semibold leading-normal"
            />
            <label className="w-6 h-6 rounded-[4px] cursor-pointer border-[0.5px] border-Surface/surface-400 bg-Accent/Warning/Warning-800"></label>
          </div>
          <div className="w-full h-[50px] mt-6 py-[4px] border rounded-lg bg-Brand/Surface/surface-50 border-Surface/surface-400 flex items-center gap-[16px] px-[16px] relative">
            <span className="w-full text-Brand/Text/Text-800 text-[16px]   font-DarkerGrotesque font-semibold leading-normal">
              Tertiary Color
            </span>
            <input
              type="color"
              id="color"
              value="#ffffff"
              placeholder=""
              className="w-full h-full bg-transparent absolute top-0 left-0 cursor-pointer  border-transparent opacity-0 focus-visible:border-transparent focus-visible:outline-transparent text-Brand/Text/Text-800 text-[16px]  font-DarkerGrotesque font-semibold leading-normal"
            />
            <label className="w-6 h-6 rounded-[4px] cursor-pointer border-[0.5px] border-Surface/surface-400 bg-Accent/Warning/Warning-800"></label>
          </div>
        </div>

        <div className="w-full flex justify-end mt-6">
          {" "}
          <button
            // onClick={() => setChooseBlogTemplateModalOpen(true)}
            className="flex  items-center justify-center w-[147px] h-[48px] min-w-fit text-Brand/Surface/surface-50 bg-Brand/Primary/Primary-800 rounded-[8px] py-2 px-4 font-DarkerGrotesque leading-6 "
            onClick={() => setCurrentStep(3)}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
