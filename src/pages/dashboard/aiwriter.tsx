import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Search from "@/assets/search 03.svg";
import { useState } from "react";

const AiWriter = () => {
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        AiWriter
      </h2>
      <div className="w-full flex gap-6 mt-4"></div>
    </section>
  );
};

AiWriter.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AiWriter;
