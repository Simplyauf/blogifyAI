import React from "react";
import { Header } from "../../../components/blogTemplates/template2/header";
import { Footer } from "@/src/components/blogTemplates/template2/footer";
import Image from "next/image";
import { SingleCategoryHorizontal2 } from "@/src/components/blogTemplates/template2/singleCategoryHorizontal2";

const CategoryPage = () => {
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <section className="w-full grid grid-cols-1 pt-[137px] pb-[72px] xl:px-[320px] px-[4%] 2xl:px-[360px] lg:px-[280px] gap-8 ">
        <h2 className="font-DarkerGrotesque text-[42px]  leading-[50px] font-bold text-[#00000]">
          Business
        </h2>
        <SingleCategoryHorizontal2 />
        <SingleCategoryHorizontal2 />
        <SingleCategoryHorizontal2 />
        <SingleCategoryHorizontal2 />
        <SingleCategoryHorizontal2 />
      </section>
      <Footer />
    </section>
  );
};

export default CategoryPage;
