import Image from "next/image";
import React from "react";

interface Proptype {
  imageLink: string;
}

export const SinglerecentPost = ({ imageLink }: Proptype) => {
  console.log(imageLink);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-Brand/Primary/Primary-100 cursor-pointer  rounded-lg h-[256px] pb-0">
        <Image
          src={imageLink}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover rounded-lg h-["
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="flex flex-col gap-[14px]">
        <p className="font-DarkerGrotesque text-[18px] font-medium  leading-[32px] text-Text/Text-600">
          Business,{" "}
          <span className="font-DarkerGrotesque text-[18px] font-medium  leading-[32px] text-[#222]">
            Travel
          </span>{" "}
          — July 2, 2020
        </p>
        <p className="font-DarkerGrotesque text-[20px] font-bold  leading-7 text-Text/Text-600">
          Your most unhappy customers are your greatest source of learning.
        </p>
        <p className="font-DarkerGrotesque text-[18px] font-medium  leading-[32px] text-Brand/Text/Text-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  );
};
