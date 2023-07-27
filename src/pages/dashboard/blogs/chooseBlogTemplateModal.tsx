import React from "react";
import { useState } from "react";
import Close from "@/assets/close-fill.svg";
import BlogTemplateImg from "@/assets/blogTemplateImg.svg";

interface PropTypes {
  ChooseBlogTemplateModalOpen: boolean;
  setChooseBlogTemplateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChooseBlogTemplateModal = ({
  ChooseBlogTemplateModalOpen,
  setChooseBlogTemplateModalOpen,
}: PropTypes) => {
  return (
    <section
      className={`fixed flex  justify-center items-center top-0 lg:flex lg:justify-center lg:items-center inset-x-0 h-screen w-full  transition-opacity ease-in-out duration-300 ${
        ChooseBlogTemplateModalOpen
          ? "opacity-100 z-[1005]"
          : "opacity-0 z-[-5] delay-100"
      } `}
    >
      <div
        className={`inset fixed  bg-[#000000] bg-opacity-30 h-screen w-full  ${
          ChooseBlogTemplateModalOpen ? " z-[1003]" : " z-[-5]"
        } `}
      ></div>

      <div
        className={`relative w-[1000px] max-w-[96%] pl-5 md:pl-[112px] overflow-y-auto overflow-x-hidden p-6 h-[650px] max-h-[96vh] xl:max-h-[90vh]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 ${
          ChooseBlogTemplateModalOpen
            ? "opacity-100 z-[1010]"
            : "opacity-0 z-[-5]"
        } `}
      >
        <div className="flex w-full justify-end ">
          <div className="w-10 h-10 rounded-[50%] bg-Surface/surface-400 flex justify-center items-center">
            <Close
              className="cursor-pointer"
              onClick={() => setChooseBlogTemplateModalOpen(false)}
            />
          </div>
        </div>

        <h2 className="text-[#000] text-[26px] font-bold  leading-[34px] font-DarkerGrotesque sm:w-[305px]">
          Customize any template effortlessly to make it uniquely yours
        </h2>
        <div className="mt-6 md:w-full flex-nowrap overflow-x-auto flex md:flex-wrap gap-[33px]">
          <article className="flex flex-col gap-4 min-w-[237px] rounded-t-lg">
            <BlogTemplateImg className="w-full rounded-t-lg" />
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="uppercase text-[#000] text-[18px] font-bold  leading-[26px] font-DarkerGrotesque">
                  Metly
                </h3>
                <p className="text-Brand/Text/Text-600 text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                  Personal
                </p>
              </div>
              <button className="w-[76px] h-[35px] flex items-center justify-center border-[1.5px]  rounded-[4px] p-4 border-Brand/Text/Text-400  text-Brand/Text/Text-800 text-[14px] font-medium  leading-normal font-DarkerGrotesque">
                Preview
              </button>
            </div>
          </article>
          <article className="flex flex-col gap-4 min-w-[237px] rounded-t-lg">
            <BlogTemplateImg className="w-full rounded-t-lg" />
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="uppercase text-[#000] text-[18px] font-bold  leading-[26px] font-DarkerGrotesque">
                  Metly
                </h3>
                <p className="text-Brand/Text/Text-600 text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                  Personal
                </p>
              </div>
              <button className="w-[76px] h-[35px] flex items-center justify-center border-[1.5px]  rounded-[4px] p-4 border-Brand/Text/Text-400  text-Brand/Text/Text-800 text-[14px] font-medium  leading-normal font-DarkerGrotesque">
                Preview
              </button>
            </div>
          </article>
          <article className="flex flex-col gap-4 min-w-[237px] rounded-t-lg">
            <BlogTemplateImg className="w-full rounded-t-lg" />
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="uppercase text-[#000] text-[18px] font-bold  leading-[26px] font-DarkerGrotesque">
                  Metly
                </h3>
                <p className="text-Brand/Text/Text-600 text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                  Personal
                </p>
              </div>
              <button className="w-[76px] h-[35px] flex items-center justify-center border-[1.5px]  rounded-[4px] p-4 border-Brand/Text/Text-400  text-Brand/Text/Text-800 text-[14px] font-medium  leading-normal font-DarkerGrotesque">
                Preview
              </button>
            </div>
          </article>
          <article className="flex flex-col gap-4 min-w-[237px] rounded-t-lg">
            <BlogTemplateImg className="w-full rounded-t-lg" />
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="uppercase text-[#000] text-[18px] font-bold  leading-[26px] font-DarkerGrotesque">
                  Metly
                </h3>
                <p className="text-Brand/Text/Text-600 text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                  Personal
                </p>
              </div>
              <button className="w-[76px] h-[35px] flex items-center justify-center border-[1.5px]  rounded-[4px] p-4 border-Brand/Text/Text-400 text-Brand/Text/Text-800 text-[14px] font-medium  leading-normal font-DarkerGrotesque">
                Preview
              </button>
            </div>
          </article>
          <article className="flex flex-col gap-4 min-w-[237px] rounded-t-lg">
            <BlogTemplateImg className="w-full rounded-t-lg" />
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col gap-1">
                <h3 className="uppercase text-[#000] text-[18px] font-bold  leading-[26px] font-DarkerGrotesque">
                  Metly
                </h3>
                <p className="text-Brand/Text/Text-600 text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                  Personal
                </p>
              </div>
              <button className="w-[76px] h-[35px] flex items-center justify-center border-[1.5px]  rounded-[4px] p-4 border-Brand/Text/Text-400  text-Brand/Text/Text-800 text-[14px] font-medium  leading-normal font-DarkerGrotesque">
                Preview
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChooseBlogTemplateModal;
