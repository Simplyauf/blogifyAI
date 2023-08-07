import Image from "next/image";
import React from "react";
import categoryImg from "@/assets/categoryBlogTemplate1.png";
import Link from "next/link";

export const SingleCategory = () => {
  return (
    <Link
      href="/blogtemplates/template1/category"
      className="cursor-pointer w-full"
    >
      <article className="w-full rounded-lg">
        <div className="bg-Brand/Primary/Primary-100 rounded-lg h-[131px] pb-0">
          <Image
            src={categoryImg}
            alt="blog-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover rounded-t-lg h-["
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="bg-Brand/Text/Text-800 rounded-b-lg p-4 leading-normal font-DarkerGrotesque text-[16px] text-white font-medium">
          Lifestyle
        </div>
      </article>
    </Link>
  );
};
