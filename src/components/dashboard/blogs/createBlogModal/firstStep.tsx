import { Tab } from "@headlessui/react";
import React from "react";
import ImageRectangle from "@/assets/image-rectangle.svg";
import TextIcon from "@/assets/text.svg";
import Upload from "@/assets/upload 01.svg";
import Close from "@/assets/close-fill.svg";
import { useState } from "react";

interface PropTypes {
  setCreateBlogModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  CreateBlogModalOpen: boolean;
}

export const FirstStep = ({
  setCreateBlogModalOpen,
  setCurrentStep,
  CreateBlogModalOpen,
}: PropTypes) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div
        className={`relative w-[468px] max-w-[96%] overflow-y-auto overflow-x-hidden p-6 max-h-[96vh] xl:max-h-[90vh] h-[740px]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 ${
          CreateBlogModalOpen ? "opacity-100 z-[1005]" : "opacity-0 z-[-5]"
        } `}
      >
        <div className="flex w-full justify-between p-2 pl-0">
          <h2 className="text-[#000] text-[20px] font-bold  leading-7 font-DarkerGrotesque ">
            Create Blog
          </h2>
          <Close
            className="cursor-pointer"
            onClick={() => setCreateBlogModalOpen(false)}
          />
        </div>
        <h2 className="text-Brand/Text/Text-800 text-[18px] mt-6 font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
          Step 1 of 4
        </h2>
        <div className="mt-6 w-full ">
          <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
            Blog name
          </h2>
          <input
            type="text"
            placeholder="Blog name"
            className="w-full border mt-2 h-[50px] border-Brand/Surface/surface-800 focus-visible:outline-none bg-Brand/Surface/surface-50 rounded-lg py-1 px-4"
          />
        </div>
        <div className="mt-4 w-full ">
          <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
            URL
          </h2>
          <input
            type="url"
            placeholder="blogname.blogify.com"
            className="w-full border mt-2 h-[50px] border-Brand/Surface/surface-800 focus-visible:outline-none bg-Brand/Surface/surface-50 rounded-lg py-1 px-4"
          />
        </div>
        <div className="w-full border-2 mt-6 gap-4 shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 border-x-Surface/surface-400 p-4 pb-6 flex flex-col rounded-[8px]">
          <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
            Updated Logo
          </h2>
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex mt-2 w-full justify-between rounded-[4px] font-medium font-DarkerGrotesque gap-1 leading-normal bg-Brand/Surface/surface-200 border border-Surface/surface-400">
              <Tab
                className={`${
                  selectedIndex === 0
                    ? " focus-visible:border-transparent"
                    : "bg-Brand/Surface/surface-50 "
                } h-[40px]  w-full justify-center items-center text-[16px] focus-visible:border-transparent focus-visible:outline-none flex gap-2 `}
              >
                <ImageRectangle /> <span>Image</span>
              </Tab>
              <Tab
                className={`${
                  selectedIndex === 1
                    ? "focus-visible:border-transparent"
                    : "bg-Brand/Surface/surface-50 "
                } h-[40px]  w-full  justify-center items-center text-[16px] focus-visible:border-transparent focus-visible:outline-none flex gap-2 `}
              >
                <TextIcon /> <span>Text</span>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="mt-4">
                  <input
                    type="file"
                    name="icon-input"
                    id="icon-input"
                    className="hidden"
                  />

                  <button className="flex w-full h-[51px] border-[1.5px] border-Surface/surface-400 bg-Brand/Surface/surface-50 text-Brand/Text/Text-800 text-[16px]  font-DarkerGrotesque font-medium leading-6 px-4 py-1 rounded-[8px] gap-2 justify-center items-center relative">
                    <Upload />
                    <span>Upload image</span>
                    <label
                      htmlFor="icon-input"
                      className="absolute top-0 left-0 h-full w-full cursor-pointer"
                    ></label>
                  </button>
                </div>
                <button className="flex w-full mt-4 h-[50px] border border-Surface/surface-400 bg-Brand/Surface/surface-50 text-Brand/Surface/surface-800 text-[18px]  font-DarkerGrotesque font-semibold leading-6 p-2 rounded-[8px] gap-4 justify-center items-center">
                  <input
                    type="range"
                    name=""
                    id=""
                    className="w-[75%] accent-Brand/Primary/Primary-800"
                  />
                  <span>90px</span>
                </button>
              </Tab.Panel>
              <Tab.Panel>
                {" "}
                <input
                  type="text"
                  placeholder="Samuel Omoraiyewa"
                  className="text-Brand/Text/Text-800 mt-4 text-[16px] h-[50px] font-DarkerGrotesque font-semibold leading-normal w-full border px-4 py-1 rounded-[8px]  border-Surface/surface-400 bg-Brand/Surface/surface-50"
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="w-full flex justify-end mt-6">
          {" "}
          <button
            // onClick={() => setChooseBlogTemplateModalOpen(true)}
            className="flex  items-center justify-center w-[147px] h-[48px] min-w-fit text-Brand/Surface/surface-50 bg-Brand/Primary/Primary-800 rounded-[8px] py-2 px-4 font-DarkerGrotesque leading-6 "
            onClick={() => setCurrentStep(2)}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
