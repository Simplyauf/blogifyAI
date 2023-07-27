import React from "react";
import ArrowDown from "@/assets/direction-down 01.svg";
import AlignCenter from "@/assets/align-center.svg";
import AlignJustify from "@/assets/align-justify.svg";
import AlignLeft from "@/assets/align-left.svg";
import AlignRight from "@/assets/align-right.svg";
import Copy from "@/assets/copy.svg";
import ADirectionDown from "@/assets/align-center.svg";

import Download from "@/assets/download 01.svg";
import FontColor from "@/assets/font-color.svg";
import FontRectangle from "@/assets/font-rectangle.svg";
import Frame from "@/assets/Frame.svg";
import Undo from "@/assets/undo.svg";
import Redo from "@/assets/redo.svg";
import Link from "@/assets/link.svg";
import MinusCircle from "@/assets/minus-circle.svg";
import ListViewCircle from "@/assets/list view-circle.svg";
import ArrowCenter from "@/assets/align-center.svg";
import BoldIcon from "@/assets/bold.svg";
import Underline from "@/assets/underline.svg";
import Italic from "@/assets/italic.svg";
import DashboardLayout from "@/src/layouts/DashboardLayout";

const ArticleGenerator = () => {
  return (
    <section className="pt-8 b-8 px-5 sm:px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  md:w-[75%]  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque mt-4 text-[26px] font-bold leading-[34px] text-[#000] ">
        Article Generator
      </h2>
      <ArticleGenerator />
      <div className="w-full mt-4 rounded-lg p-6 gap-[16px] bg-Brand/Surface/surface-50 flex ">
        <div className="w-[60%] px-4 border-l-[0.8px] border-l-Surface/surface-400">
          <div className="flex items-center gap-[10px]">
            <Undo /> <Redo /> <Copy /> <Download /> <MinusCircle />
          </div>
          <div className="mt-[32px]">
            <h2 className="font-DarkerGrotesque text-ellipsis mt-4 text-[26px] font-bold leading-[34px] text-[#000] ">
              Untitled Document
            </h2>
            <div className="w-[320px] h-[48px] py-[4px] my-4  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <input
                type="text"
                placeholder="Paragraph"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
              <ArrowDown />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <FontColor />
                <ArrowDown />
              </div>
              <div className="flex items-center">
                <FontRectangle />
                <ArrowDown />
              </div>
            </div>
            <div className="flex items-center">
              <BoldIcon />
              <Italic />
              <Underline />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <ListViewCircle />
                <ArrowDown />
              </div>
              <div className="flex items-center">
                <Frame />
                <ArrowDown />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AlignLeft />
              <AlignCenter />
              <AlignRight />
              <AlignJustify />
            </div>
          </div>
          <div className="mt-4">
            <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
              Output
            </h5>
            <textarea
              name=""
              placeholder="AI text"
              id=""
              className="h-[343px] focus-within:outline-none w-full border rounded-lg border-Brand/Surface/surface-800 py-[4px] mt-[10px] resize-none px-[16px] bg-Brand/Surface/surface-50"
            ></textarea>
          </div>
          <button className="h-12 mt-5 rounded-[8px] w-full flex justify-center items-center px-4 py-3 border-[1.5px] border-Brand/Text/Text-400 bg-Brand/Surface/surface-50 text-[16px] leading-6 font-DarkerGrotesque font-medium text-Brand/Text/Text-800">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

ArticleGenerator.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ArticleGenerator;
