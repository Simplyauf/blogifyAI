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
import Image from "next/image";
import Globe from "@/assets/Country.svg";
import SettingsTab from "@/src/components/dashboard/SettingsTab";

const Settings = () => {
  return (
    <section className="pt-8 pb-[62px] px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] md:w-[75%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Settings
      </h2>
      <SettingsTab />
      <section className="mt-6 w-full bg-Brand/Surface/surface-50 rounded-lg p-6 flex flex-col  gap-6">
        <div className="flex w-full flex-col sm:flex-row items-start justify-between sm:items-center pb-6 border-b border-b-Surface/surface-400">
          <div className="flex flex-col gap-2">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Personal info
            </h4>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex gap-3 items-center w-auto mr-6 mt-4 md:mt-0">
            <button className="flex  border-[1.5px] items-center justify-center  w-[71px] h-[35px] min-w-fit text-Brand/Text/Text-800 border-Brand/Text/Text-400 rounded-[8px] px-4 py-2 gap-[8px] text-[16px] font-medium  leading-4 font-DarkerGrotesque">
              <span>Cancel</span>
            </button>
            <button className="flex  items-center justify-center py-3 w-[128px] gap-2 h-[35px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[8px] px-4 ">
              <span className="text-[14px] font-medium  leading-6 text-Brand/Surface/surface-50 font-DarkerGrotesque ">
                Save Changes
              </span>
              <CheckCircleSM className="w-[14px] h-[14px] " />
            </button>
          </div>
        </div>
        <form action="" className="flex flex-col ">
          <div className="w-full flex BigMobile:flex-row sm:flex-row flex-col items-start gap-8 pb-5 border-b border-b-Surface/surface-400">
            <h5 className="w-[280px] text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
              Name
            </h5>
            <div className=" w-full  BigMobile:w-[512px] sm:w-[512px]  h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <SmileRectangle className="min-w-[24px]" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
            </div>
          </div>
          <div className="w-full flex BigMobile:flex-row sm:flex-row flex-col items-start gap-8 py-5 border-b border-b-Surface/surface-400">
            <h5 className="w-[280px] text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
              Email address
            </h5>
            <div className="w-full  BigMobile:w-[512px] sm:w-[512px]   h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <Gmail className="min-w-[24px]" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
            </div>
          </div>
          <div className="w-full  sm:flex-row flex-col flex items-start gap-8 py-5 border-y border-y-Surface/surface-400">
            <div className="flex flex-col gap-2 w-[280px]">
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                Your photo
              </p>

              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                This will be displayed on your profile.
              </p>
            </div>
            <div className="sm:w-[512px] w-full justify-center sm:justify-normal flex flex-col sm:flex-row items-start gap-5  ">
              <Image
                src={Avatar.src}
                alt="blog-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover rounded-[50%]"
                style={{ width: "64px", height: "64px" }}
              />
              <div className="flex w-full flex-col items-center justify-between gap-3 px-6  py-4 sm:w-[80%] border-Surface/surface-400 rounded-md border sm:border-none">
                <div className="w-10 h-10 p-[10px]">
                  <UploadCloud />
                </div>
                <div className="flex flex-col gap-[6px] items-center">
                  <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                    <span className="text-Brand/Primary/Primary-800 font-semibold text-[18px]">
                      {" "}
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>

                  <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col BigMobile:flex-row sm:flex-row mt-5 flex items-start gap-8 py-5 border-t border-t-Surface/surface-400">
            <h5 className="w-[280px] text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
              Country
            </h5>
            <div className="sm:w-[512px] w-full h-[48px] py-[4px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
              <Globe className="min-w-[24px]" />
              <input
                type="text"
                placeholder="country"
                className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent bg-Brand/Surface/surface-50 text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
              />
              <DownArrow className="min-w-[24px]" />
            </div>
          </div>
          <div className="w-full flex-col sm:flex-row  flex items-start gap-8 py-5 border-t border-t-Surface/surface-400">
            <h5 className="w-[280px] text-Accent/Danger/Danger-800  text-[16px] leading-normal font-DarkerGrotesque font-semibold">
              Delete Account
            </h5>
            <div className="flex flex-col gap-[10px] items-start">
              <button className="bg-Accent/Danger/Danger-800 h-[32px] flex justify-center items-center min-w-fit w-[112px] rounded-[4px] px-4 py-2 text-Brand/Surface/surface-50  text-[14px] leading-4 font-DarkerGrotesque font-medium ">
                Delete Account
              </button>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                Permanently delete your account and all of it’s contents.
              </p>
            </div>
          </div>
          <div className="flex w-full justify-end pt-4 border-t border-t-Surface/surface-400">
            <div className="flex gap-3 items-center">
              <button className="flex  border-[1.5px] items-center justify-center  w-[76px] h-[48px] min-w-fit text-Brand/Text/Text-800 border-Brand/Text/Text-400 rounded-[8px] px-4 py-2 gap-[8px] text-[16px] font-medium  leading-6 font-DarkerGrotesque">
                <span>Cancel</span>
              </button>
              <button className="flex  items-center justify-center py-3 w-[147px] gap-2 h-[48px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[8px] px-4 ">
                <span className="text-[16px] font-medium  leading-6 text-Brand/Surface/surface-50 font-DarkerGrotesque ">
                  Save Changes
                </span>
                <CheckCircleLg />
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

Settings.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Settings;
