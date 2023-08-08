import { Header } from "@/src/components/blogTemplates/template3/header";
import React from "react";
import SingleNewsImg from "@/assets/singleNewsImg.jpeg";
import hero from "@/assets/dummyNewsImg12.jpeg";
import Image from "next/image";
import Twitter from "@/assets/twitter2.svg";
import Facebook from "@/assets/facebook2.svg";
import Linkedin from "@/assets/Linkedin.svg";
import Pinterest from "@/assets/Pinterest.svg";
import { SingleCategoryHorizontal2 } from "@/src/components/blogTemplates/template2/singleCategoryHorizontal2";
import { SingleCategory } from "@/src/components/blogTemplates/template1/singleCategory";
import { SingleCategoryHorizontal } from "@/src/components/blogTemplates/template3/singleCategoryHorizontal";
import { SingleCommentCard } from "@/src/components/blogTemplates/singleCommentCard";

const Singlenewsfulldetails = () => {
  return (
    <section className=" w-full  min-h-screen bg-Brand/Surface/surface-50">
      <Header />
      <section className="flex justify-center relative items-center h-[400px] lg:min-h-[calc(100vh-128px)]">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="background image"
            className="bg-Brand/Text/Text-400 cursor-pointer"
            fill
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-[10]"></div>

        <div className="relative max-w-[796px] mx-auto z-[20] px-[4%]">
          <h1 className="text-Brand/Text/Text-100 text-[26px] sm:text-[58px] leading-[140%] sm:leading-[66px] font-bold font-DarkerGrotesque text-center">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className="font-DarkerGrotesque mt-6 text-[18px] sm:text-[22px] font-medium  leading-normal text-center text-Brand/Text/Text-100">
            Business, Travel
            <span className="font-DarkerGrotesque text-[14px] sm:text-[18px] font-medium  leading-normal text-Brand/Text/Text-200 ">
              {" "}
              — July 2, 2020
            </span>{" "}
          </p>
        </div>
      </section>
      <section className="mt-[56px] 2xl:px-[150px] pb-[132px] lg:px-[50px] px-[4%] xl:px-[112px] w-full grid grid-cols-1  lg:grid-cols-[55%_45%] gap-8">
        <section>
          <article className="mt-[46px] w-full flex flex-col">
            <div className="flex items-center gap-[21px]">
              <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] border-[#135CB6] bg-[#135CB6]">
                <Facebook />
              </div>
              <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] bg-[#00ACED] border-[#00ACED]">
                <Twitter />
              </div>
              <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] bg-[#2767B1] border-[#2767B1]">
                {" "}
                <Linkedin />
              </div>
              <div className="h-[38px] flex justify-center items-center  rounded-[50%] border w-[38px] bg-[#E60023] border-[#E60023]">
                {" "}
                <Pinterest />
              </div>
            </div>
            <h2 className="text-[#000] my-6  font-DarkerGrotesque text-[40px] xl:text-[60px] font-bold xl:leading-[50px] leading-[150%] tracking-[-0.7px]">
              We design and build ultimate{" "}
            </h2>
            <div className=" h-[471px] pb-0 bg-Brand/Primary/Primary-100">
              <Image
                src={SingleNewsImg}
                alt="blog-image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-cover "
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="mt-8 pb-8 post-content w-full font-Mulish text-[20px] font-medium leading-[160%] text-[#161B3D] flex flex-col gap-8">
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                  bibendum nibh rhoncus eget. Integer at consectetur elit.
                  Praesent sit amet lacinia ex. Nam pretium ligula mauris, vitae
                  consectetur elit posuere et. Aenean eu commodo leo. Etiam
                  maximus, dui ac sodales molestie, felis lectus bibendum est,
                  in eleifend tellus mi vel magna. Vestibulum rutrum lacus ex,
                  eget posuere urna ultricies vitae. Vivamus luctus diam ex, id
                  blandit leo pellentesque ac. Ut maximus nisi sed erat commodo,
                  sed convallis massa scelerisque. Praesent eget tortor gravida,
                  ultrices nulla vitae, mattis augue.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontSize: "20px" }}>
                  <strong>Nullam et ullamcorper quam, id laoreet erat.</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. &nbsp;consectetur elit. Praesent sit amet
                  lacinia ex. Nam pretium ligula mauris, vitae consectetur elit
                  posuere et. Aenean eu commodo leo. Etiam maximus, dui ac
                  sodales molestie, felis lectus bibendum est, in eleifend
                  tellus mi vel magna. Vestibulum rutrum lacus ex, eget posuere
                  urna ultricies vitae. Vivamus luctus diam ex, id blandit leo
                  pellentesque ac.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment Donec quis
                  commodo mi. Nunc consectetur sollicitudin leo, et bibendum
                  nibh rhoncus eget. Integer at consectetur elit. Praesent sit
                  amet lacinia ex. Nam pretium ligula mauris, vitae consectetur
                  elit posuere et.
                </span>
              </p>
              <p>
                <span style={{ fontSize: "18px" }}>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                  Donec quis commodo mi. Nunc consectetur sollicitudin leo, et
                  bibendum nibh rhoncus eget. Integer at consectetur elit.
                  Praesent sit amet lacinia ex. Nam pretium ligula mauris, vitae
                  consectetur elit posuere et. Aenean eu commodo leo. Etiam
                  maximus, dui ac sodales molestie, felis lectus bibendum est,
                  in eleifend tellus mi vel magna. Vestibulum rutrum lacus ex,
                  eget posuere urna ultricies vitae. Vivamus luctus diam ex, id
                  blandit leo pellentesque ac. Ut maximus nisi sed erat commodo,
                  sed convallis massa scelerisque. Praesent eget tortor gravida,
                  ultrices nulla vitae, mattis augue.&nbsp;
                </span>
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col gap-8">
          <div className="mt-[137px] grid grid-cols-1 max-w-[650px] gap-8">
            <h2 className="font-DarkerGrotesque text-[42px]  leading-[50px] font-bold text-[#00000]">
              Related
            </h2>
            <SingleCategoryHorizontal />
            <SingleCategoryHorizontal />
            <SingleCategoryHorizontal />
            <SingleCategoryHorizontal />
            <SingleCategoryHorizontal />
          </div>
          <div className="grid grid-cols-1 gap-4 items-start  lg:grid-cols-1  max-w-full md:max-w-[600px]  xl:max-w-full">
            <h2 className="font-DarkerGrotesque text-[32px]  leading-10 font-bold text-[#00000]">
              Categories
            </h2>
            <SingleCategory />
            <SingleCategory />
            <SingleCategory />
            <SingleCategory />
          </div>
        </section>
      </section>
      <section className=" 2xl:ml-[150px] pb-[132px] lg:ml-[50px] lg:px-0 px-[4%] xl:ml-[112px] w-full lg:w-[768px] 2xl:w-[800px]">
        <div className="mt-[32px] w-full">
          <h3 className="py-[44px]  leading-[42px] font-DarkerGrotesque text-[34px] font-bold">
            Comments (25)
          </h3>
          <section className="w-full flex flex-col gap-4">
            <SingleCommentCard />
            <SingleCommentCard />

            <section className="w-full">
              <h2 className="font-DarkerGrotesque text-[32px] z-1 relative leading-[40px] font-bold text-[#00000]">
                Leave a comment
              </h2>
              <h2 className="font-DarkerGrotesque text-[18px] z-1 relative leading-[110%] font-medium text-[#00000]">
                Your email address will not be published. Required fields are
                marked
              </h2>
              <textarea
                name=""
                id=""
                placeholder="Subject"
                className="w-full h-[262px] py-[4px] mt-6   border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px] resize-none"
              ></textarea>
              <div className="grid w-full mt-6 grid-cols-2 gap-4">
                <div className="">
                  <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
                    Name
                  </h5>
                  <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                    <input
                      type="text"
                      placeholder="name"
                      className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                    />
                  </div>
                </div>
                <div className="">
                  <h5 className=" text-Brand/Text/Text-600  text-[16px] leading-normal font-DarkerGrotesque  font-medium">
                    Email
                  </h5>
                  <div className="w-full h-[48px] py-[4px] mt-[10px]  border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                    <input
                      type="email"
                      placeholder="email"
                      className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="min-w-fit mt-6 w-[212px] h-[56px] bg-Brand/Text/Text-800 rounded-[8px] flex justify-center items-center font-medium font-DarkerGrotesque leading-8 text-Brand/Surface/surface-50 text-[20px] "
              >
                Post a comment
              </button>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Singlenewsfulldetails;
