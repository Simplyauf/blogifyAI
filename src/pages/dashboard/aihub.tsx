import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Search from "@/assets/search 03.svg";
import File from "@/assets/file.svg";
import Film from "@/assets/film.svg";
import TrashIcon from "@/assets/trash-2.svg";
import ImageIcon from "@/assets/image.svg";
import FigmaIcon from "@/assets/figma.svg";
import FramerIcon from "@/assets/framer.svg";
import { useState } from "react";

const AIHub = () => {
  const aiModel = [
    {
      LogoImg: (className: string) => <File className={className} />,
      title: "Tech requirements.pdf",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
    {
      LogoImg: (className: string) => <ImageIcon className={className} />,
      title: "Dashboard screenshot.jpg",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
    {
      LogoImg: (className: string) => <Film className={className} />,
      title: "Dashboard prototype recording.mp4",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
    {
      LogoImg: (className: string) => <FigmaIcon className={className} />,
      title: "Dashboard prototype FINAL.fig",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
    {
      LogoImg: (className: string) => <File className={className} />,
      title: "UX Design Guidelines.docx",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
    {
      LogoImg: (className: string) => <FigmaIcon className={className} />,
      title: "Dashboard interaction.framerx",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
    {
      LogoImg: (className: string) => <ImageIcon className={className} />,
      title: "App inspiration.png",
      output:
        "Tenetur quaerat ducimus. Sunt delectus corporis quo porro nobis repudiandae laboriosam illo. Voluptas perspiciatis tempore eveniet beatae. Atque consequatur ipsa.",
      date: "Jan 4, 2022",
    },
  ];
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        AIHub
      </h2>
      <div className="w-full flex flex-col  mt-4 bg-Brand/Surface/surface-50 rounded-lg">
        <div className="w-full flex justify-between items-center border-b border-b-Gray/200">
          <h3 className="px-6 py-3 text-[14px] leading-normal font-DarkerGrotesque font-medium text-Brand/Text/Text-600 w-[35%]">
            AI Model
          </h3>
          <h3 className="px-6 py-3 text-[14px] leading-normal font-DarkerGrotesque font-medium text-Brand/Text/Text-600 w-[35%]">
            Output
          </h3>
          <h3 className="px-6 py-3 text-[14px] leading-normal font-DarkerGrotesque font-medium text-Brand/Text/Text-600 w-[15%]">
            Date Created
          </h3>
          <h3 className="px-6 py-3 text-[14px] leading-normal font-DarkerGrotesque font-medium text-Brand/Text/Text-600 w-[15%]">
            Actions
          </h3>
        </div>
        {aiModel.map((elem, index) => {
          const { date, output, LogoImg, title } = elem;
          return (
            <div
              key={index}
              className="w-full flex justify-between items-center bg-Brand/Surface/surface-50 border-b border-b-Gray/200"
            >
              <div className="flex items-center gap-3 w-[35%] px-6 py-4">
                {" "}
                <div className="w-10 h-10 rounded-[50%] flex justify-center items-center bg-Brand/Primary/Primary-100">
                  {LogoImg("")}
                </div>
                <h3 className="text-[18px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-800">
                  {title}
                </h3>
              </div>

              <div className="flex justify-center items-center px-6 py-4 text-[16px] leading-normal  font-DarkerGrotesque text-gray/500 max-w-[35%] w-[35%]">
                <h3 className="line-clamp-1 text-ellipsis overflow-hidden font-medium ">
                  {output}
                </h3>
              </div>

              <h3 className="px-6 py-4 text-[16px] leading-normal font-DarkerGrotesque text-Gray/500 font-medium  w-[15%]">
                {date}
              </h3>
              <div className="px-6 py-4 text-[14px] leading-normal font-DarkerGrotesque font-medium text-Brand/Text/Text-600 w-[15%]">
                <TrashIcon />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

AIHub.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AIHub;
