import BuilderLayout from "@/src/layouts/BuilderLayout";
import React from "react";
import ArrowLeft from "@/assets/left-arrow.svg";
import ArrowRight from "@/assets/right-arrow.svg";
import Upload from "@/assets/upload 01.svg";
import AddCircle from "@/assets/add-circle.svg";
import Redo from "@/assets/redo-circle.svg";
import MobileIcon from "@/assets/mobile.svg";
import ComputerIcon from "@/assets/computer.svg";
import ZoomOut from "@/assets/zoom out.svg";
import { useRouter } from "next/router";
import ImageTemp from "@/assets/image 3.png";
import Eye from "@/assets/eye.svg";
import Image from "next/image";
import dummyImg from "@/assets/dummyNewsImg.png";
import { useState } from "react";

const Settings = () => {
  const [uploadedImg, setUploadedImg] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(dummyImg.src);

  const router = useRouter();
  return (
    <div className="pt-8 pb-9 px-6 md:min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full md:w-[85%] lg:w-[75%] xl:w-[80%] 2xl:w-[85%] right-0 flex md:flex-row flex-col-reverse items-start gap-6 top-[200px] md:top-[76px]">
      <section className="w-full md:w-[35%] lg:w-[40%] xl:w-[35%]">
        <div
          className="gap-2 items-center flex cursor-pointer text-[18px] font-normal text-Text/Text-600 underline underline-offset-1 leading-[26px] font-DarkerGrotesque"
          onClick={() => router.push("/dashboard")}
        >
          <ArrowLeft />
          <span>Back to Dashboard</span>
        </div>
        <h2 className="font-DarkerGrotesque text-[26px] font-bold mt-2 leading-[34px] text-[#000] ">
          Settings
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          <div className="w-full border-2 gap-4 shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 border-Surface/surface-400 p-4 pb-6 flex flex-col rounded-[8px]">
            <div className="flex flex-col gap-1">
              <h2 className="font-DarkerGrotesque text-[20px] font-bold leading-7 text-Brand/Text/Text-800 ">
                Site Name
              </h2>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600">
                Used as your main page title for SEO
              </p>
            </div>
            <input
              type="text"
              placeholder="Samuel Omoraiyewa"
              className="text-Brand/Text/Text-800 text-[16px] h-[50px] font-DarkerGrotesque font-semibold leading-normal w-full border px-4 py-1 rounded-[8px] border-Surface/surface-400 bg-Brand/Surface/surface-50"
            />
          </div>
          <div className="w-full border-2 gap-4 shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 border-Surface/surface-400 p-4 pb-6 flex flex-col rounded-[8px]">
            <div className="flex flex-col gap-1">
              <h2 className="font-DarkerGrotesque text-[20px] font-bold leading-7 text-Brand/Text/Text-800 ">
                Edit Default domain
              </h2>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600">
                Edit your free domain
              </p>
            </div>
            <input
              type="text"
              placeholder="Samuel-Omoraiyewa.blogifyai.site"
              className="text-Brand/Text/Text-800 text-[16px] h-[50px] font-DarkerGrotesque font-semibold leading-normal w-full border px-4 py-1 rounded-[8px] border-t-Surface/surface-400 bg-Brand/Surface/surface-50"
            />
          </div>
          <div className="w-full border-2 gap-4 shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 border-Surface/surface-400 p-4 pb-6 flex flex-col rounded-[8px]">
            <div className="flex flex-col gap-1">
              <h2 className="font-DarkerGrotesque text-[20px] font-bold leading-7 text-Brand/Text/Text-800 ">
                Add a custom domain
              </h2>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600">
                Connect your domain here
              </p>
            </div>
            <button className="flex w-full h-[50px] border border-Surface/surface-400 bg-Brand/Surface/surface-50 text-Brand/Text/Text-800 text-[16px]  font-DarkerGrotesque font-medium leading-6 px-4 py-1 rounded-[8px] gap-2 justify-center items-center">
              <AddCircle />
              <span>Add Domain</span>
            </button>
          </div>
          <div>
            {" "}
            <div className="w-full border-2 gap-4 shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 border-Surface/surface-400 p-4 pb-6 flex flex-col rounded-[8px]">
              <div className="flex flex-col gap-1">
                <h2 className="font-DarkerGrotesque text-[20px] font-bold leading-7 text-Brand/Text/Text-800 ">
                  Favicon
                </h2>
                <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600">
                  Upload an icon to use for tabs
                </p>
              </div>
              <div className=" flex w-full items-center gap-2">
                <input
                  onChange={(e) => {
                    if (e.target?.files?.[0]) {
                      setUploadedImg(e.target?.files[0]);
                      const url = URL.createObjectURL(e.target?.files?.[0]);
                      setImageUrl(url);
                    }
                  }}
                  type="file"
                  name="icon-input"
                  id="icon-input"
                  className="hidden"
                />

                <button className="flex w-full h-[50px] border border-Surface/surface-400 bg-Brand/Surface/surface-50 text-Brand/Text/Text-800 text-[16px]  font-DarkerGrotesque font-medium leading-6 px-4 py-1 rounded-[8px] gap-2 justify-center items-center relative">
                  <Upload />
                  <span>Upload image</span>
                  <label
                    htmlFor="icon-input"
                    className="absolute top-0 left-0 h-full w-full cursor-pointer"
                  ></label>
                </button>
                <div className="w-[58px] h-[50px] relative  rounded-md">
                  <Image
                    src={imageUrl}
                    alt="blog-image"
                    width={48}
                    height={48}
                    sizes="100vw"
                    className="rounded-md relative "
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div
                    style={{ backgroundColor: "#d3d3d380" }}
                    className="absolute w-full h-full inset-0 "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full sm:hidden h-[50px] py-3 px-4  flex justify-center items-center border-2 border-[#E6ECF4] shadow-[0px_4px_6px_0px_rgba(23,44,85,0.01),0px_5px_10px_1px,rgba(23,44,85,0.02)] bg-Brand/Surface/surface-50 rounded-[8px] gap-[8px]">
        <span className="text-[16px]  font-DarkerGrotesque font-medium text-Brand/Text/Text-800 leading-normal">
          Preview Site
        </span>
        <Eye />
      </section>
      <section className="w-full hidden sm:block md:w-[65%] lg:w-[60%] xl:w-[65%] bg-Brand/Surface/surface-50  pb-[33px]">
        <div className="w-full flex justify-between items-center px-6 py-3 h-[53px] bg-Brand/Surface/surface-50 border-b-2 border-b-Surface/surface-400">
          <div className="flex  gap-2 md:gap-4 items-center">
            <ArrowLeft className="cursor-pointer" />
            <ArrowRight className="cursor-pointer" />
            <Redo className="cursor-pointer" />
          </div>
          <input
            type="text"
            placeholder="Samuel Omoraiyewa"
            className="text-Brand/Text/Text-800 text-[14px] h-[29px]  font-DarkerGrotesque font-semibold leading-normal w-[202px] border px-3 py-1 rounded-[8px] border-Surface/surface-400 bg-Brand/Surface/surface-50"
          />
          <div className=" gap-4 items-center hidden lg:flex">
            <MobileIcon className="cursor-pointer" />
            <ComputerIcon className="cursor-pointer " />
            <ZoomOut className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full h-auto max-h-[525x]">
          <Image
            src={ImageTemp.src}
            alt="blog-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover rounded-t-lg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>
    </div>
  );
};

Settings.getLayout = (page: React.ReactElement) => {
  return <BuilderLayout>{page}</BuilderLayout>;
};

export default Settings;
