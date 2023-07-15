import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Search from "@/assets/search 03.svg";
import { useState } from "react";
import { AIWriter } from "..";
import { useRouter } from "next/router";

const AiWriter = () => {
  const router = useRouter();
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        AiWriter
      </h2>
      <div className="grid mt-4 gap-6 w-full grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-between">
        {AIWriter.map((elem, index) => {
          const { title, description, image } = elem;
          return (
            <article
              key={index}
              onClick={() =>
                router.push("/dashboard/aiwriter/article-generator")
              }
              className="flex flex-col w-full   items-start justify-start p-5  rounded-lg bg-Brand/Surface/surface-50 cursor-pointer"
            >
              <div className="flex p-2 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 w-[40px] h-[40px]">
                {image("")}
              </div>
              <h3 className="text-Brand/Text/Text-800 text-ellipsis text-[20px] font-bold  leading-7 font-DarkerGrotesque mt-4">
                {title}
              </h3>
              <p className="mt-1 text-Brand/Text/Text-600 text-[16px] font-medium leading-normal font-DarkerGrotesque ">
                {description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

AiWriter.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AiWriter;
