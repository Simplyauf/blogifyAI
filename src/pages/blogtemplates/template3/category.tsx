import { RecentpostArr } from "@/src/components/blogTemplates/recentPostsArr";
import { Footer } from "@/src/components/blogTemplates/template3/footer";
import { Header } from "@/src/components/blogTemplates/template3/header";
import { SinglerecentPost } from "@/src/components/blogTemplates/template3/singleRecentPost";
import React from "react";

const Category = () => {
  return (
    <section className=" w-full  min-h-screen bg-Brand/Surface/surface-50">
      <Header />

      <section className=" px-[4%] lg:px-[100px]  py-[64px] bg-Brand/Text/Text-400 w-full xl:px-[112px] 2xl:px-[140px] flex flex-col justify-center">
        <p className="text-[18px] font-DarkerGrotesque text-[#555] font-medium leading-[110%]">
          Category
        </p>
        <h1 className="text-[42px]  font-DarkerGrotesque font-bold leading-[50px] text-Text/Gray-900">
          Travel
        </h1>
      </section>
      <div className="w-full px-[4%] lg:px-[100px] mt-[48px] xl:px-[112px] 2xl:px-[140px]">
        <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[37px] ">
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

export default Category;
