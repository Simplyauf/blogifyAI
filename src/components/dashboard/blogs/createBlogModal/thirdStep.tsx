import { Tab } from "@headlessui/react";
import BlogImg from "@/assets/Blog Image.png";
import SmallBlogImg from "@/assets/smallBlogImg.png";
import ImageRectangle from "@/assets/image-rectangle.svg";
import TextIcon from "@/assets/text.svg";
import ArrowDown from "@/assets/DownArrow.svg";
import ArrowUp from "@/assets/up-arrow.svg";
import CalendarIcon from "@/assets/calendar.svg";
import Upload from "@/assets/upload 01.svg";
import Close from "@/assets/close-fill.svg";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import { LocalizationProvider } from "@mui/x-date-pickers";

import React from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import dayjs, { Dayjs } from "dayjs";
import { components, DropdownIndicatorProps } from "react-select";
import { clsx } from "clsx";
import { Select, Option } from "@material-tailwind/react";
import { BlogArrType } from "@/src/pages/dashboard/blogs";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface PropTypes {
  setCreateBlogModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  CreateBlogModalOpen: boolean;
  setBlog: React.Dispatch<React.SetStateAction<BlogArrType[]>>;
}

export const ThirdStep = ({
  setCreateBlogModalOpen,
  setBlog,
  setCurrentStep,
  CreateBlogModalOpen,
}: PropTypes) => {
  const options = ["Minutes before", "Hours before", "Days before"];

  const [frequency, setFrequency] = useState("Monthly");

  const [value, onChange] = useState<Value>(new Date());
  const [selectedOption, setSelectedOption] = useState();

  console.log(selectedOption);

  const handleSelectedOption = (value: any) => {
    console.log(value);
    setSelectedOption(value);
  };

  return (
    <div
      className={`relative w-[468px] max-w-[96%] overflow-y-auto overflow-x-hidden p-6 max-h-[96vh] xl:max-h-[90vh] h-[520px]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 ${
        CreateBlogModalOpen ? "opacity-100 z-[1005]" : "opacity-0 z-[-5]"
      } `}
    >
      <div className="flex w-full justify-between p-2 pl-0">
        <h2 className="text-[#000] text-[20px] font-bold  leading-7 font-DarkerGrotesque ">
          Post Frequency
        </h2>
        <Close
          className="cursor-pointer"
          onClick={() => {
            setCurrentStep(1);
            setCreateBlogModalOpen(false);
          }}
        />
      </div>
      <h2 className="text-Brand/Text/Text-800 text-[18px] mt-6 font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
        Step 3 of 4
      </h2>
      <div className="mt-6 w-full flex items-center gap-[8px] flex-wrap">
        <button
          className={`${
            frequency === "Daily"
              ? "bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
              : "bg-transparent "
          } py-2 px-4  rounded-[32px] border border-Brand/Text/Text-800`}
          onClick={() => setFrequency("Daily")}
        >
          Daily
        </button>
        <button
          className={`${
            frequency === "Twice-daily"
              ? "bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
              : "bg-transparent "
          } py-2 px-4  rounded-[32px] border border-Brand/Text/Text-800`}
          onClick={() => setFrequency("Twice-daily")}
        >
          Twice Daily
        </button>

        <button
          className={`${
            frequency === "Weekly"
              ? "bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
              : "bg-transparent "
          } py-2 px-4 bg-  rounded-[32px] border border-Brand/Text/Text-800`}
          onClick={() => setFrequency("Weekly")}
        >
          Weekly
        </button>
        <button
          className={` ${
            frequency === "Monthly"
              ? "bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
              : "bg-transparent "
          } py-2 px-4  rounded-[32px]  border border-Brand/Text/Text-800`}
          onClick={() => setFrequency("Monthly")}
        >
          Monthly
        </button>
      </div>

      <div className="mt-6 w-full ">
        <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
          Choose day
        </h2>

        <DateTimePicker onChange={onChange} value={value} />
      </div>

      <div className="mt-6 w-full ">
        <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold  text-ellipsis leading-7 font-DarkerGrotesque ">
          Email Remainder
        </h2>
        <div className="w-full flex  h-[50px] gap-2 mt-2 rounded-lg">
          <input
            type="number"
            placeholder="30"
            className="border h-[50px] px-2 border-Brand/Surface/surface-800 focus-visible:outline-none rounded-lg w-[68px] bg-Brand/Surface/surface-50"
          />

          {/* <div className="w-full h-full flex px-4 gap-4 items-center border border-Brand/Surface/surface-800 py-1 focus-visible:outline-none bg-Brand/Surface/surface-50 rounded-lg">
            <input
              type="text"
              placeholder="Blog name"
              className="w-full  mt-2 h-full bg-Brand/Surface/surface-50  py-1 "
            />
            <ArrowDown />
          </div> */}
          <div className="w-full ">
            <Select
              arrow={<ArrowDown className="absolute right-0" />}
              className="w-full h-[50px] flex items-center justify-between rounded-lg border  px-2 border-Brand/Surface/surface-800 focus-visible:outline-none select-input bg-Brand/Surface/surface-50"
              onChange={handleSelectedOption}
            >
              {options.map((elem, index) => {
                return (
                  <Option className="w-full py-1 hover:bg-gray-100" key={index}>
                    {elem}
                  </Option>
                );
              })}
            </Select>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end mt-6">
        {" "}
        <button
          // onClick={() => setChooseBlogTemplateModalOpen(true)}
          className="flex  items-center justify-center w-[147px] h-[48px] min-w-fit text-Brand/Surface/surface-50 bg-Brand/Primary/Primary-800 rounded-[8px] py-2 px-4 font-DarkerGrotesque leading-6 "
          onClick={() => {
            setCurrentStep(1);
            setBlog((prev) => [
              ...prev,
              {
                GridImg: (className) => (
                  <Image
                    src={BlogImg.src}
                    alt="blog-image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-fill"
                    style={{ width: "100%", height: "187px" }}
                  />
                ),
                ListImg: (className) => (
                  <Image
                    src={SmallBlogImg.src}
                    alt="blog-image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-fill"
                    style={{ width: "170px", height: "88px" }}
                  />
                ),
                title: "Blogsite Title",
                url: "blogsitetitle.com",
                status: "Live",
              },
            ]);
            setCreateBlogModalOpen(false);
          }}
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};
