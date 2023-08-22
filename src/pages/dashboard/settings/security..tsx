import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import CheckCircleSM from "@/assets/checkSM.svg";
import CheckCircleLg from "@/assets/check-circle.svg";
import { useState } from "react";
import Gmail from "@/assets/gmail.svg";
import SmileRectangle from "@/assets/smile-rectangle.svg";
import Avatar from "@/assets/Avatar.png";
import UploadCloud from "@/assets/upload-cloud.svg";
import DownArrow from "@/assets/DownArrow.svg";
import Computer from "@/assets/computer.svg";
import Delete from "@/assets/large-trash.svg";
import Image from "next/image";
import Globe from "@/assets/Country.svg";
import SettingsTab from "@/src/components/dashboard/SettingsTab";

const Settings = () => {
  return (
    <section className="pt-8 pb-[92px] sm:pb-0 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute md:w-[75%] w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Settings
      </h2>
      <SettingsTab />
      <div className="flex gap-4 w-full items-start mt-6 flex-col lg:flex-row">
        <section className=" bg-Brand/Surface/surface-50 rounded-lg p-6 flex flex-col  w-full lg:w-[60%]">
          <div className="flex flex-col md:flex-row w-full md:gap-2 justify-between items-start md:items-center pb-5">
            <div className="flex flex-col gap-2">
              <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Password
              </h4>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                We can stil send high priority notifications outside these
                settings
              </p>
            </div>
            <div className="flex gap-3 items-center w-auto mr-6 mt-4 md:mt-0">
              <button className="flex  border-[1.5px] items-center justify-center  w-[71px] h-[35px] min-w-fit text-Brand/Text/Text-800 border-Brand/Text/Text-400 rounded-[8px] px-4 py-2 gap-[8px] text-[16px] font-medium  leading-4 font-DarkerGrotesque">
                <span>Cancel</span>
              </button>
              <button className="flex  items-center justify-center py-3 w-[128px] gap-2 h-[35px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[8px] px-4 ">
                <span className="text-[16px] font-medium  leading-6 text-Brand/Surface/surface-50 font-DarkerGrotesque ">
                  Save Changes
                </span>
                <CheckCircleSM />
              </button>
            </div>
          </div>
          <form action="" className="flex flex-col ">
            <div className="w-full flex items-start gap-8 py-5 border-t border-t-Surface/surface-400">
              <h5 className="w-[280px] text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
                Current Password
              </h5>
              <div className="w-[512px] h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <SmileRectangle className="min-w-[24px]" />
                <input
                  type="text"
                  placeholder=" Current Password"
                  className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
            </div>
            <div className="w-full flex items-start gap-8 py-5 border-t border-t-Surface/surface-400">
              <h5 className="w-[280px] text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
                New Password
              </h5>
              <div className="w-[512px] h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <SmileRectangle className="min-w-[24px]" />
                <input
                  type="text"
                  placeholder="New Password"
                  className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
            </div>

            <div className="w-full mt-5 flex items-start gap-8 pt-5 border-t border-t-Surface/surface-400">
              <h5 className="w-[280px] text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
                Confirm Password
              </h5>
              <div className="w-[512px] h-[48px] py-[4px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <SmileRectangle className="min-w-[24px]" />
                <input
                  type="text"
                  placeholder="Confirm password"
                  className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent bg-Brand/Surface/surface-50 text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
                <DownArrow className="min-w-[24px]" />
              </div>
            </div>
          </form>
        </section>
        <section className="flex flex-col p-6 w-full lg:w-[40%] bg-Brand/Surface/surface-50 gap-8 h-[397px] overflow-y-auto custom-overflow">
          <div>
            <div className="w-[56px] h-[56px] rounded-[50%] flex justify-center items-center p-4 bg-Brand/Primary/Primary-100">
              <Computer className="min-w-[24px]" />
            </div>
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Password
            </h4>
            <button className="bg-Accent/Danger/Danger-800 w-[132px] h-[32px] mt-6 flex justify-center items-center min-w-fit  rounded-[8px] px-4 py-2 text-Brand/Surface/surface-50  text-[14px] leading-normal font-DarkerGrotesque font-medium ">
              Sign out all devices
            </button>
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="w-full flex items-center justify-start  gap-3 sm:gap-6 lg:gap-3">
              <Computer className="min-w-[24px]" />
              <div className="flex flex-col gap-1  w-[70%]">
                <h3 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800">
                  MacBook
                </h3>
                <div className="flex  gap-1 items-center font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600">
                  <span>Lagos, Nigeria</span>
                  <div className="w-1 h-1 rounded-[50%] text-Text/Text-600"></div>
                  <span>Oct 25 at 10:15 am</span>
                </div>
              </div>
              <Delete />
            </div>
            <div className="w-full flex items-center justify-start  gap-3 sm:gap-6 lg:gap-3 ">
              <Computer className="min-w-[24px]" />
              <div className="flex flex-col gap-1 w-[70%]">
                <h3 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800">
                  MacBook
                </h3>
                <div className="flex  gap-1 items-center font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600">
                  <span>Lagos, Nigeria</span>
                  <div className="w-1 h-1 rounded-[50%] text-Text/Text-600"></div>
                  <span>Oct 25 at 10:15 am</span>
                </div>
              </div>
              <Delete />
            </div>
            <div className="w-full flex items-center justify-start  gap-3 sm:gap-6 lg:gap-3">
              <Computer />
              <div className="flex flex-col gap-1 w-[70%]">
                <h3 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800">
                  MacBook
                </h3>
                <div className="flex  gap-1 items-center font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600">
                  <span>Lagos, Nigeria</span>
                  <div className="w-1 h-1 rounded-[50%] text-Text/Text-600"></div>
                  <span>Oct 25 at 10:15 am</span>
                </div>
              </div>
              <Delete />
            </div>
            <div className="w-full flex items-center justify-start  gap-3 sm:gap-6 lg:gap-3">
              <Computer />
              <div className="flex flex-col gap-1 w-[70%]">
                <h3 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800">
                  MacBook
                </h3>
                <div className="flex  gap-1 items-center font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600">
                  <span>Lagos, Nigeria</span>
                  <div className="w-1 h-1 rounded-[50%] text-Text/Text-600"></div>
                  <span>Oct 25 at 10:15 am</span>
                </div>
              </div>
              <Delete />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

Settings.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Settings;
