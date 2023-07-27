import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Search from "@/assets/search 03.svg";
import { useState } from "react";

const Jobs = () => {
  const budgetArr = [
    "$50-$1k",
    "$1k-$10k",
    "$10k-$20k",
    "$20k-$50k",
    "More than $50k",
  ];
  const specialitiesArr = [
    "Article Generator",
    "Post Title Generator",
    "Product Description",
    "Testimonial Generator",
    "Blog Post Idea",
    "Facebook Ad Copy",
    "Youtube video Description",
    "Youtube video Tag",
    "Instagram caption",
    "Instagram hashtags",
    "Google Ad Copy",
    "Google Ad headlines",
    "FAQ Generator",
    "Meta Dscription",
    "Newsletter",
    "Email Generator",
  ];
  return (
    <section className="pt-8 px-4 pb-10 sm:px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full md:w-[75%] lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Jobs
      </h2>
      <div className="w-full sm:flex-row flex-col flex gap-6  md:gap-4 lg:gap-6 mt-4">
        <section className="flex flex-col gap-4 max-w-[752px]">
          <article className="flex flex-col lg:flex-row p-6 gap-6 w-full border border-[#E7E7E9] bg-Brand/Surface/surface-50 rounded-[8px]">
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800">
                  Redesign of Info Pop-up for widget
                </h4>
                <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600">
                  Posted 39 minutes ago
                </p>
              </div>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600">
                Need to completely update and redesign the info popup that is
                found on our shopping cart widget. Looking to improve the
                design, and content, and possibly add some animation.
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex items-center justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600 min-w-fit ">
                  Web design
                </button>
                <button className="border-[#e7e7e9] h-8 p-2 min-w-fit lg:p-1 xl:p-2 flex items-center justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600">
                  UI / Visual Design
                </button>
                <button className="border-[#e7e7e9] h-8 p-2 min-w-fit lg:p-1 xl:p-2 flex items-center justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600">
                  Brand / Graphic Design
                </button>
              </div>
            </div>
            <div className="lg:basis-[122px] w-full lg:w-full flex lg:flex-col flex-row justify-end gap-6 lg:gap-0 lg:justify-between items-end h-auto ">
              <div className="font-DarkerGrotesque text-[18px]  font-semibold leading-normal text-Brand/Text/Text-800">
                {" "}
                $50 - $1K
              </div>
              <button className="flex justify-center items-center h-8 rounded-lg px-4 py-2 bg-Brand/Primary/Primary-800 font-DarkerGrotesque text-[14px] font-medium leading-4 text-Brand/Surface/surface-50 w-[97px] lg:w-[90px] xl:w-[122px]">
                Bid
              </button>
            </div>
          </article>
          <article className="flex flex-col lg:flex-row p-6 gap-6 w-full border border-[#E7E7E9] bg-Brand/Surface/surface-50 rounded-[8px]">
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800">
                  Redesign of Info Pop-up for widget
                </h4>
                <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600">
                  Posted 39 minutes ago
                </p>
              </div>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600">
                Need to completely update and redesign the info popup that is
                found on our shopping cart widget. Looking to improve the
                design, and content, and possibly add some animation.
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex items-center justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] min-w-fit font-semibold leading-normal text-Text/Text-600">
                  Web design
                </button>
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex items-center justify-center border rounded-[4px] font-DarkerGrotesque min-w-fit  text-[12px] font-semibold leading-normal text-Text/Text-600">
                  UI / Visual Design
                </button>
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex min-w-fit  items-center justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600">
                  Brand / Graphic Design
                </button>
              </div>
            </div>
            <div className="lg:basis-[122px] w-full lg:w-full flex lg:flex-col flex-row justify-end gap-6 lg:gap-0 lg:justify-between items-end h-auto ">
              <div className="font-DarkerGrotesque text-[18px]  font-semibold leading-normal text-Brand/Text/Text-800">
                {" "}
                $50 - $1K
              </div>
              <button className="flex justify-center items-center h-8 rounded-lg px-4 py-2 bg-Brand/Primary/Primary-800 font-DarkerGrotesque text-[14px] font-medium leading-4 text-Brand/Surface/surface-50 w-[97px] lg:w-[90px] xl:w-[122px]">
                Bid
              </button>
            </div>
          </article>
          <article className="flex flex-col lg:flex-row p-6 gap-6 w-full border border-[#E7E7E9] bg-Brand/Surface/surface-50 rounded-[8px]">
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800">
                  Redesign of Info Pop-up for widget
                </h4>
                <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600">
                  Posted 39 minutes ago
                </p>
              </div>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600">
                Need to completely update and redesign the info popup that is
                found on our shopping cart widget. Looking to improve the
                design, and content, and possibly add some animation.
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex items-center min-w-fit  justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600">
                  Web design
                </button>
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex items-center min-w-fit  justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600">
                  UI / Visual Design
                </button>
                <button className="border-[#e7e7e9] h-8 p-2 lg:p-1 xl:p-2 flex items-center min-w-fit  justify-center border rounded-[4px] font-DarkerGrotesque text-[12px] font-semibold leading-normal text-Text/Text-600">
                  Brand / Graphic Design
                </button>
              </div>
            </div>
            <div className="lg:basis-[122px] w-full lg:w-full flex lg:flex-col flex-row justify-end gap-6 lg:gap-0 lg:justify-between items-end h-auto ">
              <div className="font-DarkerGrotesque text-[18px]  font-semibold leading-normal text-Brand/Text/Text-800">
                {" "}
                $50 - $1K
              </div>
              <button className="flex justify-center items-center h-8 rounded-lg px-4 py-2 bg-Brand/Primary/Primary-800 font-DarkerGrotesque text-[14px] font-medium leading-4 text-Brand/Surface/surface-50 w-[97px] lg:w-[90px] xl:w-[122px]">
                Bid
              </button>
            </div>
          </article>
        </section>
        <section className="w-full border border-[#E7E7E9] bg-Brand/Surface/surface-50 rounded-[8px] p-6 md:p-4 lg:p-6 mb-[64px] max-w-[364px]">
          <h3 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800">
            Filter
          </h3>
          <div className="relative my-[21px] w-full flex justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-lg pr-3 border-Brand/Surface/surface-800 border">
            <input
              type="text"
              className="w-full pr-4 ml-4 h-12  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
              placeholder="Explore"
            />
            <Search className="" />
          </div>
          <div className="py-[21px] border-t border-b  border-[#e7e7e9]">
            <h3 className="font-DarkerGrotesque text-[16px] font-semibold leading-normal text-Brand/Text/Text-800">
              Specialities{" "}
            </h3>
            <div className="flex flex-col gap-3  mt-[21px] justify-start">
              {specialitiesArr.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 flex-wrap"
                  >
                    <input type="checkbox" name="" id="" className="w-6 h-6" />
                    <span className="font-DarkerGrotesque text-[14px] font-medium leading-normal text-Text/Text-600">
                      {" "}
                      {elem}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="py-[21px]">
            <h3 className="font-DarkerGrotesque text-[16px] font-semibold leading-normal text-Brand/Text/Text-800">
              Budget
            </h3>
            <div className="flex flex-col gap-3  mt-[21px] justify-start">
              {budgetArr.map((elem, index) => {
                return (
                  <div key={index} className="flex items-center gap-2 ">
                    <input type="checkbox" name="" id="" className="w-6 h-6" />
                    <span className="font-DarkerGrotesque text-[14px] font-medium leading-normal text-Text/Text-600">
                      {" "}
                      {elem}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="flex justify-center items-center h-12 rounded-lg px-4 py-3 mt-6 bg-Brand/Primary/Primary-800 font-DarkerGrotesque text-[16px] font-medium leading-4 text-Brand/Surface/surface-50 w-[126px] gap-2">
            <span>Clear filter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M14.75 22.75H8.75C6.54086 22.75 4.75 20.9591 4.75 18.75V5.75H18.75V18.75C18.75 20.9591 16.9591 22.75 14.75 22.75Z"
                  fill="#F2F6FF"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.75 10C14.1642 10 14.5 10.3358 14.5 10.75L14.5 16.75C14.5 17.1642 14.1642 17.5 13.75 17.5C13.3358 17.5 13 17.1642 13 16.75L13 10.75C13 10.3358 13.3358 10 13.75 10Z"
                fill="#F2F6FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.75 10C10.1642 10 10.5 10.3358 10.5 10.75L10.5 16.75C10.5 17.1642 10.1642 17.5 9.75 17.5C9.33579 17.5 9 17.1642 9 16.75L9 10.75C9 10.3358 9.33579 10 9.75 10Z"
                fill="#F2F6FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.53223 3.22457C9.04226 2.45953 9.9009 2 10.8204 2H12.6796C13.5991 2 14.4577 2.45953 14.9678 3.22457L16.1514 5H20.75C21.1642 5 21.5 5.33579 21.5 5.75C21.5 6.16421 21.1642 6.5 20.75 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H7.34861L8.53223 3.22457Z"
                fill="#F2F6FF"
              />
            </svg>
          </button>
        </section>
      </div>
    </section>
  );
};

Jobs.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Jobs;
