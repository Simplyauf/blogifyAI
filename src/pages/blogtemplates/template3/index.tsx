import { RecentpostArr } from "@/src/components/blogTemplates/recentPostsArr";
import { Footer } from "@/src/components/blogTemplates/template3/footer";
import { Header } from "@/src/components/blogTemplates/template3/header";
import { SinglerecentPost } from "@/src/components/blogTemplates/template3/singleRecentPost";
import Image from "next/image";
import dummyImg1 from "@/assets/dummyNewsImg10.png";
import dummyImg2 from "@/assets/dummyNewsImg11.png";
import dummyImg3 from "@/assets/dummyNewsImg12.png";
import React from "react";

const Index = () => {
  return (
    <section className=" w-full  min-h-screen bg-Brand/Surface/surface-50">
      <Header />
      <section className=" px-[100px] bg-[#F8F9FA] py-[48px] my-[48px] w-full xl:px-[112px] 2xl:px-[140px] grid grid-cols-3 gap-8 grid-rows-2">
        <div className="row-span-1 flex flex-col bg-black/50 justify-end relative rounded-[4px] h-[200px] ">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 18.00%, rgba(0, 0, 0, 0.80) 99.00%, rgba(0, 0, 0, 0.80) 100%)",
            }}
            className="absolute inset-0 z-[10]"
          ></div>
          <div className="absolute inset-0">
            <Image
              src={dummyImg1}
              alt="background image"
              className="bg-Brand/Text/Text-400 cursor-pointer"
              fill
            />
          </div>
          <div className="p-[20px] relative  z-[20] mr-[54px]">
            <h4 className=" text-[#fff] font-normal  leading-[27px] text-[18px]">
              The AI magically removes moving objects from videos.
            </h4>
            <p className="leading-[26px] mt-[2px] text-[15px] font-light text-white/50">
              July 19, 2019
            </p>
          </div>
        </div>
        <div className="row-start-2 row-end-3 col-span-1 row-span-2 flex flex-col bg-black/50 justify-end relative rounded-[4px] h-auto gap-8">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 18.00%, rgba(0, 0, 0, 0.80) 99.00%, rgba(0, 0, 0, 0.80) 100%)",
            }}
            className="absolute inset-0 z-[10]"
          ></div>
          <div className="absolute inset-0">
            <Image
              src={dummyImg3}
              alt="background image"
              className="bg-Brand/Text/Text-400 cursor-pointer"
              fill
            />
          </div>
          <div className="p-[20px] relative  z-[20] mr-[54px]">
            <h4 className=" text-[#fff] font-normal  leading-[27px] text-[18px]">
              The AI magically removes moving objects from videos.
            </h4>
            <p className="leading-[26px] mt-[2px] text-[15px] font-light text-white/50">
              July 19, 2019
            </p>
          </div>
        </div>
        <div className="row-span-1 flex flex-col bg-black/50 justify-end relative rounded-[4px] h-[200px] gap-8">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 18.00%, rgba(0, 0, 0, 0.80) 99.00%, rgba(0, 0, 0, 0.80) 100%)",
            }}
            className="absolute inset-0 z-[10]"
          ></div>
          <div className="absolute inset-0">
            <Image
              src={dummyImg2}
              alt="background image"
              className="bg-Brand/Text/Text-400 cursor-pointer"
              fill
            />
          </div>
          <div className="p-[20px] relative  z-[20] mr-[54px]">
            <h4 className=" text-[#fff] font-normal  leading-[27px] text-[18px]">
              The AI magically removes moving objects from videos.
            </h4>
            <p className="leading-[26px] mt-[2px] text-[15px] font-light text-white/50">
              July 19, 2019
            </p>
          </div>
        </div>
        <div className=" flex flex-col bg-black/50 justify-end relative rounded-[4px] h-[200px] gap-8 ">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 18.00%, rgba(0, 0, 0, 0.80) 99.00%, rgba(0, 0, 0, 0.80) 100%)",
            }}
            className="absolute inset-0 z-[10]"
          ></div>
          <div className="absolute inset-0">
            <Image
              src={dummyImg2}
              alt="background image"
              className="bg-Brand/Text/Text-400 cursor-pointer"
              fill
            />
          </div>
          <div className="p-[20px] relative  z-[20] mr-[54px]">
            <h4 className=" text-[#fff] font-normal  leading-[27px] text-[18px]">
              The AI magically removes moving objects from videos.
            </h4>
            <p className="leading-[26px] mt-[2px] text-[15px] font-light text-white/50">
              July 19, 2019
            </p>
          </div>
        </div>
        <div className=" flex flex-col bg-black/50 justify-end relative rounded-[4px] h-[200px] gap-8">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 18.00%, rgba(0, 0, 0, 0.80) 99.00%, rgba(0, 0, 0, 0.80) 100%)",
            }}
            className="absolute inset-0 z-[10]"
          ></div>
          <div className="absolute inset-0">
            <Image
              src={dummyImg1}
              alt="background image"
              className="bg-Brand/Text/Text-400 cursor-pointer"
              fill
            />
          </div>
          <div className="p-[20px] relative  z-[20] mr-[54px]">
            <h4 className=" text-[#fff] font-normal  leading-[27px] text-[18px]">
              The AI magically removes moving objects from videos.
            </h4>
            <p className="leading-[26px] mt-[2px] text-[15px] font-light text-white/50">
              July 19, 2019
            </p>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#F8F9FA] px-[100px] mt-[48px] xl:px-[112px] 2xl:px-[140px]">
        <h1 className="text-[42px]  font-DarkerGrotesque font-bold leading-[50px] text-[#000]">
          Recent Posts
        </h1>
        <section className=" grid grid-cols-3 gap-[37px] ">
          {RecentpostArr.map((post, index) => {
            return <SinglerecentPost key={index} imageLink={post.image.src} />;
          })}
        </section>
        <div className="w-full flex justify-center items-center mt-[48px]">
          <button className="rounded-[8px] min-w-fit font-semibold text-[18px] leading-normal mx-auto w-[125px] text-white h-full px-6 py-[14px] bg-Brand/Primary/Primary-800">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Index;
