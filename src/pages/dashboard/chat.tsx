import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Search from "@/assets/search 03.svg";
import Add from "@/assets/add.svg";
import Edit from "@/assets/edit.svg";
import Delete from "@/assets/trash.svg";
import ChatIcon from "@/assets/chat-smile.svg";
import ChatIconGreen from "@/assets/chat-smileGreen.svg";
import ChatIconGray from "@/assets/chat-smileGray.svg";
import Checkmark from "@/assets/check-mark.svg";
import Send from "@/assets/sent-fast.svg";
import Divider from "@/assets/Divider.svg";

export const AIChat = () => {
  return (
    <div className="w-full justify-start flex">
      <div className="w-full flex gap-2 items-start">
        <div className="flex justify-center items-center w-10 h-10 p-2 bg-Accent/Success/Success-800 rounded-[50%]">
          <ChatIconGreen />
        </div>
        <div className="flex flex-col justify-end max-w-[392px] bg-Surface/surface-400 rounded-lg gap-2 items-end p-3 ">
          <p className="font-DarkerGrotesque text-[18px] font-medium leading-[110%] text-left text-Brand/Text/Text-800">
            Id id sit veniam labore laborum eu aliquip do laboris dolor ipsum ad
            elit. Consectetur do sit eiusmod.{" "}
          </p>
          <div className=" flex items-center gap-2">
            <span className="text-Brand/Text/Text-600 font-Poppins leading-[130%] tracking-[0.36px] text-[12px] text-right">
              10:42AM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DateDivider = () => {
  return (
    <article className="flex gap-4 items-center my-4">
      <Divider />
      <span className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Gray/7">
        06 November, 2019
      </span>
      <Divider />
    </article>
  );
};

export const UserChat = () => {
  return (
    <div className="w-full justify-end flex mt-4">
      <div className=" flex gap-2 items-start">
        <div className="flex flex-col justify-end max-w-[392px] bg-Brand/Primary/Primary-800  rounded-lg gap-2 items-end p-3 ">
          <p className="font-DarkerGrotesque text-[18px] font-medium leading-[110%] text-left text-Brand/Text/Text-100">
            Id id sit veniam labore laborum eu aliquip do laboris dolor ipsum ad
            elit. Consectetur do sit eiusmod.{" "}
          </p>
          <div className=" flex items-center gap-2">
            <Checkmark />
            <span className="text-Brand/Text/Text-200 font-Poppins leading-[130%] tracking-[0.36px] text-[12px] text-right">
              10:42AM
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-10 h-10 p-2 bg-Brand/Primary/Primary-800 rounded-[50%]">
          <ChatIconGray />
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const SingleAIList = () => {
    return (
      <div className="p-3 border-[2px] w-full flex justify-between items-center rounded-lg">
        <div className="flex justify-center items-center w-8 h-8  p-1 bg-Brand/Primary/Primary-100 rounded-[50%]">
          <ChatIcon />
        </div>
        <div className="flex flex-col gap-1 basis-[65%]">
          <h2 className="text-Secondary/Secondary-1 text-[20px] font-semibold  leading-normal font-DarkerGrotesque ">
            This is a title
          </h2>
          <span className="text-[12px] font-normal  leading-4 font-DarkerGrotesque tracking-[0.1px] text-Secondary-Text">
            24th September, 2022
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center w-6 h-6  p-1 bg-Brand/Primary/Primary-100 rounded-[50%]">
            <Edit />
          </div>
          <div className="flex justify-center items-center w-6 h-6  p-1 bg-Accent/Danger/Danger-200 rounded-[50%]">
            <Delete />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="mt-8 px-6 h-[calc(100vh-76px)] overflow-y-scroll bg-Brand/Surface/surface-200 2xl:px-[4%] absolute w-full md:w-[75%] lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        AI Chat
      </h2>
      <div className="w-full rounded-lg mt-4 gap-[14px] bg-Brand/Surface/surface-50 flex h-[calc(100vh-160px)]">
        <section className="basis-[35%] px-4 py-8 ">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="relative w-[224px] max-w-[65%] flex justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-lg pr-3 border-Brand/Surface/surface-800 border">
              <input
                type="text"
                className="w-[82%] pr-4 ml-4 h-12  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
                placeholder="Explore"
              />
              <Search className="" />
            </div>
            <button className="flex text-Brand/Surface/surface-50  items-center justify-center w-[115px] max-w-[35%] gap-2 h-[48px] min-w-fit bg-Brand/Primary/Primary-800 rounded-[8px] p-4 ">
              <span>New Chat</span>
              <Add />
            </button>
          </div>

          <div className="mt-8 w-full  flex flex-col custom-overflow items-start gap-4 h-[calc(100vh-280px)] pb-3 overflow-auto pr-[2px]">
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
            <SingleAIList />
          </div>
        </section>
        <section className=" basis-[65%] relative">
          <div className="pb-9 p-6 h-[calc(100vh-230px)] overflow-y-auto custom-overflow w-full">
            <AIChat />
            <DateDivider />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
            <UserChat />
          </div>
          <div className="w-full p-4 absolute bottom-0">
            <div className="flex w-full gap-2 items-center">
              <input
                className="w-full h-[50px] focus:outline-none border rounded-lg bg-Brand/Surface/surface-50 border-Brand/Surface/surface-800 px-4 py-1"
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
