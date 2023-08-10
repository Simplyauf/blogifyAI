import React from "react";
import { useState } from "react";
import Close from "@/assets/close-fill.svg";
import BlogTemplateImg from "@/assets/blogTemplateImg.svg";
import CreateBlogModal from "./createBlogModal/";
import { SingleTemplateCard } from "@/src/components/dashboard/blogs/singleBlogTemplateCard";
import { BlogArrType } from "@/src/pages/dashboard/blogs";

interface PropTypes {
  ChooseBlogTemplateModalOpen: boolean;
  setChooseBlogTemplateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBlog: React.Dispatch<React.SetStateAction<BlogArrType[]>>;
}

const ChooseBlogTemplateModal = ({
  ChooseBlogTemplateModalOpen,
  setChooseBlogTemplateModalOpen,
  setBlog,
}: PropTypes) => {
  const [CreateBlogModalOpen, setCreateBlogModalOpen] = useState(false);
  return (
    <>
      {" "}
      <CreateBlogModal
        CreateBlogModalOpen={CreateBlogModalOpen}
        setBlog={setBlog}
        setCreateBlogModalOpen={setCreateBlogModalOpen}
      />
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
            <SingleTemplateCard
              setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
              setCreateBlogModalOpen={setCreateBlogModalOpen}
            />

            <SingleTemplateCard
              setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
              setCreateBlogModalOpen={setCreateBlogModalOpen}
            />
            <SingleTemplateCard
              setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
              setCreateBlogModalOpen={setCreateBlogModalOpen}
            />
            <SingleTemplateCard
              setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
              setCreateBlogModalOpen={setCreateBlogModalOpen}
            />
            <SingleTemplateCard
              setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
              setCreateBlogModalOpen={setCreateBlogModalOpen}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseBlogTemplateModal;
