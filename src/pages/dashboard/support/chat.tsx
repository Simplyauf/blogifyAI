import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import { AIChat, DateDivider, UserChat } from "../chat";
import Send from "@/assets/sent-fast.svg";
import ArrowLeft from "@/assets/arrow-left-long.svg";
import { useRouter } from "next/router";

const Chat = () => {
  const router = useRouter();
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <div
        className="gap-2 items-center flex cursor-pointer text-[18px] font-normal text-Text/Text-600 underline underline-offset-1 leading-[26px] font-DarkerGrotesque"
        onClick={() => router.back()}
      >
        <ArrowLeft />
        <span>Back to Support</span>
      </div>
      <h2 className="font-DarkerGrotesque mt-4 text-[26px] font-bold leading-[34px] text-[#000] ">
        Support #3066
      </h2>
      <div className="w-full rounded-lg mt-4 gap-[14px] bg-Brand/Surface/surface-50 flex h-[494px]">
        <section className="w-full  relative">
          <div className="pb-9 p-6 h-[411px] overflow-y-auto custom-overflow">
            <AIChat />
            <DateDivider />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
          </div>
          <div className="w-full p-4 absolute bottom-0">
            <div className="flex w-full gap-2 items-center">
              <input
                className="w-full h-[50px] border focus:outline-none rounded-lg bg-Brand/Surface/surface-50 border-Brand/Surface/surface-800 px-4 py-1"
                placeholder="Write Message"
                type="text"
              />
              <button className="w-12 h-12 p-3 rounded-lg bg-Brand/Primary/Primary-800">
                <Send />
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

Chat.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Chat;
