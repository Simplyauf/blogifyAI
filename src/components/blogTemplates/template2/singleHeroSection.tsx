import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";
import HeroBlogTemplate from "@/assets/heroBlogTemplate2.png";

export const SingleHeroSection = () => {
  return (
    <div className="bg-no-repeat mt-[40px] md:mt-[48px] lg:px-[50px] px-[4%] xl:px-[112px] w-full min-h-[calc(100vh-192px)] flex ">
      <div className="flex flex-col  w-full px-[4%] lg:px-[80x] xl:px-[109px]">
        <h2 className="font-DarkerGrotesque text-center text-[58px]  font-bold text-[#00000] leading-[66px]">
          Trending
        </h2>
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div className="gap-8 flex py-8 items-center flex-col sm:flex-row relative">
            <div className="bg-Brand/Primary/Primary-100 xl:min-w-[384px] rounded-lg h-[350px] sm:h-[385px] pb-0 ">
              <Image
                src={HeroBlogTemplate.src}
                alt="blog-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover rounded-lg h-["
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-DarkerGrotesque text-[24px] sm:text-[32px] md:text-[42px] 2xl:text-[60px] font-bold text-[#222] leading-[50px] lg:max-w-[544px]">
                Your most unhappy customers are your greatest source of
                learning.
              </h2>
              <p className="font-DarkerGrotesque text-[16px] md:text-[18px] font-medium  leading-[32px] text-Text/Text-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque dolore magnam aliquam quaerat voluptatem.
              </p>
              <p className="font-DarkerGrotesque text-[16px] md:text-[18px] font-medium  leading-[32px] text-Text/Text-600">
                Business,{" "}
                <span className="font-DarkerGrotesque text-[16px] md:text-[18px] font-medium  leading-[32px] text-[#222]">
                  Travel
                </span>{" "}
                — July 2, 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
