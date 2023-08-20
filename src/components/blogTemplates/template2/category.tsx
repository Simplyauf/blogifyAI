import React from "react";
import { Header } from "../../../components/blogTemplates/template2/header";
import { Footer } from "@/src/components/blogTemplates/template2/footer";
import Image from "next/image";
import { SinglePostHorizontal } from "@/src/components/blogTemplates/template2/singlePostHorizontal";
import { useRouter } from "next/router";
import Link from "next/link";

const Category = ({ slug }: any) => {
  const router = useRouter();

  const category = slug?.category || slug.sub;

  const isMainCategory =
    router?.query?.slug?.length === 2 ? `${router?.query?.slug[0]}/` : "";
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />
      <section className="w-full grid grid-cols-1 pt-[48px] md:pt-[137px] pb-[72px] xl:px-[320px] px-[4%] 2xl:px-[360px] lg:px-[280px] gap-8 ">
        <h2 className="font-DarkerGrotesque text-[42px] capitalize leading-[50px] font-bold text-[#00000]">
          {category.title}
        </h2>
        {category.posts.map((post: any, index: any) => {
          return (
            <Link
              key={index}
              href={`/blogtemplates/template1/posts/${isMainCategory}${category.title}/${post.title}`}
            >
              <SinglePostHorizontal />
            </Link>
          );
        })}
      </section>
      <Footer />
    </section>
  );
};

export default Category;
