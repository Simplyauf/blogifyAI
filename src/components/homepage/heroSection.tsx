import React from "react";
import HeroImgMobile from "@/assets/HeroImg-homepage.png";
import MultipleDotsLG from "@/assets/multipleDotsLg.svg";
import MultipleDotsSM from "@/assets/multipleDotsSM.svg";
import StarsFrame from "@/assets/starsFrame.svg";
import StarsFrameLg from "@/assets/starsFrameLg.svg";
import ArrowVectorSM from "@/assets/arrowVector.svg";
import ArrowVectorLg from "@/assets/arrowVectorLg.svg";
import ThumbVectorLg from "@/assets/thumbVectorLg.svg";
import ThumbVectorSM from "@/assets/thumbVector.svg";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="my-[18px] mb-2 flex flex-col gap-[56px] md:gap-[103px]">
      <div className="px-[4%] ">
        <div className="px-[6px] relative">
          <div className="max-w-[260px] md:max-w-[585px] mx-auto ">
            <h2 className="text-Brand/Primary/Primary-800 text-center font-bold leading-[40px] text-[32px] xl:text-[72px] xl:leading-[66px] md:text-[64px] md:leading-[66px]  font-DarkerGrotesque">
              Unleash the Power of
            </h2>
            <h2 className="text-Brand/Primary/Primary-800 text-center font-bold leading-[40px] text-[32px] xl:text-[72px] xl:leading-[66px] md:text-[64px] md:leading-[66px]  font-DarkerGrotesque justify-center flex relative">
              {" "}
              AI Blogging!{" "}
              <StarsFrame className="absolute right-[25px] top-[10px] md:hidden" />
              <StarsFrameLg className="absolute right-[60px] top-[10px] hidden md:block" />
            </h2>
          </div>
        </div>

        <p className="text-[#7a7d9c] mt-4 md:mt-[32px] leading-normal font-semibold text-[18px] md:text-[22px] text-center font-DarkerGrotesque mx-auto max-w-[248px] relative sm:max-w-max">
          <ThumbVectorLg className="absolute left-[-150px] bottom-[-100px] hidden lg:block" />
          Create, schedule, publish, and easily manage your social media content
          <ArrowVectorLg className="absolute right-[-150px] lg:block hidden top-[-80px]" />
        </p>
        <div className="mt-4 md:mt-[32px] w-[86%] max-w-[335px] sm:max-w-[148px] relative mx-auto">
          <ThumbVectorSM className="absolute left-[-10px] bottom-[-28px] lg:hidden" />
          <button className="w-full h-[48px] flex  justify-center items-center text-[20px] bg-Brand/Primary/Primary-800 rounded-lg text-Brand/Surface/surface-50 font-medium leading-8 font-DarkerGrotesque  mx-auto">
            Get Started
          </button>
          <ArrowVectorSM className="absolute right-[-28px] top-[15px] lg:hidden" />
        </div>
      </div>
      <article className="  ">
        <div className="w-full relative max-w-full mx-auto md:max-w-[75%] px-[4%] ">
          <Image
            src={HeroImgMobile}
            className="relative z-[10]"
            alt="mobile-heroImg"
            sizes="100w"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute top-[-2%] md:top-[2%] left-[-2%] w-[104%] h-[104%] opacity-30 filter md:blur-[50px] blur-[16.30860710144043px] bg-Brand/Primary/Primary-600 rounded-[135.88px_59.787px_217.407px_108.703px] md:rounded-[416.59px_183.3px_666.54px_333.27px]"></div>

          {/* small screen dots */}
          <div className=" flex justify-center items-center w-[35.9px] h-[35.9px] md:hidden absolute -top-6 left-[25%] z-[5]">
            <MultipleDotsSM className="w-full h-full" />
          </div>
          <div className=" flex justify-center items-center w-[35.9px] h-[35.9px] absolute -bottom-2 md:hidden -left-2  z-[5]">
            <MultipleDotsSM className="w-full h-full" />
          </div>
          <div className=" flex justify-center items-center w-[35.9px] h-[35.9px]  absolute bottom-[20%] md:hidden -right-2  z-[5]">
            <MultipleDotsSM className="w-full h-full" />
          </div>

          {/* Large screen dots */}
          <div className="  justify-center items-center w-[35.9px] h-[35.9px] hidden md:flex  absolute  md:w-[110px] md:h-[110px] -top-[3.5rem] left-[25%] z-[5]">
            <MultipleDotsLG className="w-full h-full" />
          </div>
          <div className="  hidden md:flex justify-center items-center w-[35.9px] h-[35.9px] md:w-[110px] md:h-[110px] absolute -bottom-[2.5rem]  left-[0.5rem]  z-[5]">
            <MultipleDotsLG className="w-full h-full" />
          </div>
          <div className="  hidden md:flex justify-center items-center w-[35.9px] h-[35.9px] md:w-[110px] md:h-[110px] absolute bottom-[20%] -right-[1.75rem]  z-[5]">
            <MultipleDotsLG className="w-full h-full" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
