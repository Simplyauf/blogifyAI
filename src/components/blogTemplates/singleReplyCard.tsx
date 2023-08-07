import Image from "next/image";
import Send from "@/assets/sent-fast.svg";
import Women from "@/assets/Women.png";
import React from "react";

export const SingleReplyCard = () => {
  return (
    <article className="w-full flex flex-col bg-[#F7F7F7] py-[15px] px-[30px] shadow-[0px_0.5px_2px_0px_rgba(96,97,112,0.16),0px_0px_1px_0px_rgba(40,41,61,0.08)]">
      <div className="flex flex-col gap-6">
        <div className="gap-[16px] flex flex-col">
          <div className="flex items-center gap-[15px]">
            <div className=" rounded-lg h-[56px] w-[56px] pb-0">
              <Image
                src={Women}
                alt="blog-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover rounded-lg h-["
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-Text/Base text-[22px] font-DarkerGrotesque">
                Marie Davies
              </h3>
              <p className="font-medium font-DarkerGrotesque text-Text/Lighten">
                December 27, 2020 at 11:00 pm
              </p>
            </div>
          </div>
          <p className="font-medium leading-[110%] text-[18px] font-DarkerGrotesque text-Text/Base text">
            Yeah right! It’s really good anyways, sort of brilliant!
          </p>
        </div>
      </div>
    </article>
  );
};
