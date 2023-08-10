import React from "react";
import { useState } from "react";
import Close from "@/assets/close-fill.svg";
import ChooseBlogTemplateModal from "../chooseBlogTemplateModal";
import { Tab } from "@headlessui/react";
import ImageRectangle from "@/assets/image-rectangle.svg";
import TextIcon from "@/assets/text.svg";
import Upload from "@/assets/upload 01.svg";
import { FirstStep } from "./firstStep";
import { SecondStep } from "./secondStep";
import { ThirdStep } from "./thirdStep";
import { BlogArrType } from "@/src/pages/dashboard/blogs";
import { useEffect } from "react";

interface PropTypes {
  CreateBlogModalOpen: boolean;
  setCreateBlogModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBlog: React.Dispatch<React.SetStateAction<BlogArrType[]>>;
}

const CreateBlogModal = ({
  CreateBlogModalOpen,
  setCreateBlogModalOpen,
  setBlog,
}: PropTypes) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
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

        {currentStep === 1 && (
          <FirstStep
            CreateBlogModalOpen={CreateBlogModalOpen}
            setCurrentStep={setCurrentStep}
            setCreateBlogModalOpen={setCreateBlogModalOpen}
          />
        )}
        {currentStep === 2 && (
          <SecondStep
            CreateBlogModalOpen={CreateBlogModalOpen}
            setCurrentStep={setCurrentStep}
            setCreateBlogModalOpen={setCreateBlogModalOpen}
          />
        )}
        {currentStep === 3 && (
          <ThirdStep
            CreateBlogModalOpen={CreateBlogModalOpen}
            setCurrentStep={setCurrentStep}
            setCreateBlogModalOpen={setCreateBlogModalOpen}
            setBlog={setBlog}
          />
        )}
      </section>
    </>
  );
};

export default CreateBlogModal;
