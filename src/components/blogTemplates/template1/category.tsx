import React from "react";
import DummyNewsImg from "@/assets/dummyNewsImg.png";
import Share from "@/assets/share2.svg";
import Image from "next/image";
import { SingleNewsCard } from "@/src/components/blogTemplates/template1/singleNewsCard";
import { SingleCategory } from "@/src/components/blogTemplates/singleCategory";
import { NavBar } from "@/src/components/blogTemplates/template1/navBar";
import { Footer } from "@/src/components/blogTemplates/template1/footer";
import { Header } from "@/src/components/blogTemplates/template1/header";
import Link from "next/link";
import { Newsletter } from "@/src/components/blogTemplates/template1/newsletter";
import { useRouter } from "next/router";

const Category = ({ slug }: any) => {
  const router = useRouter();

  console.log(router);

  const category = slug?.category || slug.sub;
  console.log(category);

  const j =
    router?.query?.slug?.length === 2 ? `${router?.query?.slug[0]}/` : "";
  console.log(j);
  return (
    <section className="w-full bg-Brand/Surface/surface-50 min-h-screen ">
      <Header />

      {/* news section */}
      <section className="w-full mt-[56px]  2xl:px-[250px] pb-[132px] sm:px-[60px] md:px-[120px] lg:px-[50px] px-[4%] xl:px-[120px] ">
        <h4 className="text-Text/Text-600  text-[18px] font-DarkerGrotesque font-medim  leading-[26px] ">
          {" "}
          Category
        </h4>
        <h2 className="font-DarkerGrotesque capitalize text-[58px]  leading-[66px] font-bold text-[#00000]">
          {category.title}
        </h2>
        <div className="w-full mt-6 grid-cols-1  lg:grid-cols-[66%_30%] justify-between 2xl:grid-cols-[62%_34%] 2xl:gap-12 grid gap-8 ">
          <section className="flex flex-col gap-8">
            {category.posts.map((post: any, index: any) => {
              return (
                <Link
                  key={index}
                  href={`/blogtemplates/template1/posts/${j}${category.title}/${post.title}`}
                >
                  <SingleNewsCard />
                </Link>
              );
            })}

            <section className="w-full mt-[24px] ">
              <h2 className="font-DarkerGrotesque text-[32px]  leading-10 font-bold text-[#00000]">
                Trending
              </h2>
              <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SingleNewsCard />
                <SingleNewsCard />
              </div>
            </section>
          </section>
          <section className="flex flex-col gap-8">
            <article className="flex flex-col p-6 gap-3 border border-Surface/surface-600 bg-white rounded-[8px]">
              <div className="bg-Brand/Primary/Primary-100 rounded-lg h-[198px] pb-0">
                <Image
                  src={DummyNewsImg}
                  alt="blog-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full object-cover rounded-lg h-["
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <h4 className="font-DarkerGrotesque text-[28px] font-bold  leading-[36px] text-[#444]">
                Cristine Smith
              </h4>
              <p className="font-DarkerGrotesque text-[18px] font-medium  leading-[32px] text-[#555]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque dolore magnam aliquam quaerat voluptatem.
              </p>
              <button className="min-w-fit w-[85px] h-[29px] flex justify-center items-center rounded-[8px] px-4 py-2 bg-[] border-[1.5px] border-Brand/Text/Text-400 leading-normal font-DarkerGrotesque text-[14px] font-semibold">
                Read more
              </button>
            </article>
            <section className="flex flex-col gap-4 items-start">
              <Newsletter />
              {category?.sub && category.sub.length > 0 && (
                <div className="flex flex-col w-full gap-4 items-start">
                  <h2 className="font-DarkerGrotesque text-[32px]  leading-10 font-bold text-[#00000]">
                    Categories
                  </h2>
                  {category.sub.map((post: any, index: any) => {
                    return (
                      <Link
                        key={index}
                        href={`/blogtemplates/template1/posts/${category.title}/${post.title}`}
                        className="cursor-pointer w-full"
                      >
                        {" "}
                        <SingleCategory />
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          </section>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Category;
