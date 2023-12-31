import Image from "next/image";
import React from "react";
import HeroBlogTemplate from "@/assets/heroBlogTemplate2.png";

export const SingleCategoryHorizontal = () => {
  return (
    <div className="flex items-start  gap-8 w-full h-[160px] sm:h-[140px]">
      <div className="bg-Brand/Primary/Primary-100 min-w-[150px] sm:min-w-[176px]  rounded-lg h-full pb-0">
        <Image
          src={HeroBlogTemplate}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover rounded-lg h-["
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-[8px] h-full justify-between">
        <p className="font-DarkerGrotesque text-[24px] sm:text-[34px] font-bold  leading-[42px] text-[#222] line-clamp-1">
          Your most unhappy customers are your greatest source of learning.
        </p>
        <p className="font-DarkerGrotesque text-[16px] sm:text-[18px] font-medium  leading-[110%] text-Brand/Text/Text-800 line-clamp-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque dolore magnam aliquam quaerat voluptatem.
        </p>
        <p className="font-DarkerGrotesque text-[16px] sm:text-[18px] font-medium  leading-[32px] text-Text/Text-600">
          Business,{" "}
          <span className="font-DarkerGrotesque text-[16px] sm:text-[18px] font-medium  leading-[32px] text-[#222]">
            Travel
          </span>{" "}
          — July 2, 2020
        </p>
      </div>
    </div>
  );
};
