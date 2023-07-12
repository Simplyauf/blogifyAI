import React from "react";
import { useState } from "react";
import Close from "@/assets/close-fill.svg";
import ChooseBlogTemplateModal from "./chooseBlogTemplateModal";

interface PropTypes {
  CreateBlogModalOpen: boolean;
  setCreateBlogModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateBlogModal = ({
  CreateBlogModalOpen,
  setCreateBlogModalOpen,
}: PropTypes) => {
  const [ChooseBlogTemplateModalOpen, setChooseBlogTemplateModalOpen] =
    useState(true);
  return (
    <>
      <ChooseBlogTemplateModal
        ChooseBlogTemplateModalOpen={ChooseBlogTemplateModalOpen}
        setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
      />
      <section
        className={`fixed flex  justify-center items-center top-0 lg:flex lg:justify-center lg:items-center inset-x-0 h-screen w-full  transition-opacity ease-in-out duration-300 ${
          CreateBlogModalOpen
            ? "opacity-100 z-[1000]"
            : "opacity-0 z-[-5] delay-100"
        } `}
      >
        <div
          className={`inset fixed  bg-[#000000] bg-opacity-30 h-screen w-full  ${
            CreateBlogModalOpen ? " z-[1002]" : " z-[-5]"
          } `}
        ></div>

        <div
          className={`relative w-[468px] max-w-[96%] overflow-y-auto overflow-x-hidden p-6 max-h-[96vh] xl:max-h-[90vh] h-[380px]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 ${
            CreateBlogModalOpen ? "opacity-100 z-[1005]" : "opacity-0 z-[-5]"
          } `}
        >
          <div className="flex w-full justify-between p-2 pl-0">
            <h2 className="text-[#000] text-[20px] font-bold line-clamp-1 text-ellipsis leading-7 font-DarkerGrotesque w-[25%]">
              Create Blog
            </h2>
            <Close
              className="cursor-pointer"
              onClick={() => setCreateBlogModalOpen(false)}
            />
          </div>
          <div className="mt-6 w-full ">
            <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold line-clamp-1 text-ellipsis leading-7 font-DarkerGrotesque w-[25%]">
              Blog name
            </h2>
            <input
              type="text"
              placeholder="Blog name"
              className="w-full border mt-2 h-[50px] border-Brand/Surface/surface-800 focus-visible:outline-none bg-Brand/Surface/surface-50 rounded-lg py-1 px-4"
            />
          </div>
          <div className="mt-4 w-full ">
            <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold line-clamp-1 text-ellipsis leading-7 font-DarkerGrotesque w-[25%]">
              URL
            </h2>
            <input
              type="url"
              placeholder="blogname.blogify.com"
              className="w-full border mt-2 h-[50px] border-Brand/Surface/surface-800 focus-visible:outline-none bg-Brand/Surface/surface-50 rounded-lg py-1 px-4"
            />
          </div>
          <div className="w-full flex justify-end mt-6">
            {" "}
            <button className="flex  items-center justify-center w-[147px] h-[48px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[8px] py-2 px-4 ">
              <span>Create</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateBlogModal;
