import Image from "next/image";
import Send from "@/assets/sent-fast.svg";
import Women from "@/assets/Women.png";
import React from "react";
import { SingleReplyCard } from "./singleReplyCard";

export const SingleCommentCard = () => {
  return (
    <article className="w-full flex flex-col bg-[#fff] p-6 shadow-[0px_0.5px_2px_0px_rgba(96,97,112,0.16),0px_0px_1px_0px_rgba(40,41,61,0.08)]">
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
            Rich in mystery across the centuries decipherment finite but
            unbounded Rig Veda globular star cluster. Rich in heavy atoms
            hydrogen atoms concept of the number one radio telescope at the edge
            of forever two ghostly white figures in coveralls and helmets are
            soflty dancing. Encyclopaedia galactica a mote of dust suspended in
            a sunbeam concept.
          </p>
        </div>
        <div className="font-medium font-DarkerGrotesque text-Text/Lighten">
          Replies (1)
        </div>
        <div className="flex flex-col gap-3">
          <SingleReplyCard />
          <SingleReplyCard />
        </div>
        <div className="w-full flex items-center h-12 gap-[12px]">
          <input
            type="text"
            placeholder="Write a reply"
            className="w-full h-full placeholder:text-Brand/Text/Text-400 bg-Brand/Surface/surface-50 rounded-[8px] pl-4 border border-x-Surface/surface-400"
          />
          <Send className="cursor-pointer" />
        </div>
      </div>
    </article>
  );
};
