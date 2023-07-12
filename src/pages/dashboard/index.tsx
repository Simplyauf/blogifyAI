import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import User3 from "@/assets/users 02.svg";
import Decrease from "@/assets/arrow-down-circle.svg";
import Increase from "@/assets/arrow-up-circle.svg";
import ArrowRight from "@/assets/arrow-right.svg";
import Add from "@/assets/add.svg";
import { useState } from "react";

const SkeletonAnalytics = () => (
  <article className="flex items-center justify-between h-[106px] 2xl:h-[120px] p-4 gap-4 rounded-lg bg-Brand/Surface/surface-50 min-w-[267px] 2xl:min-w-[280px] animate-pulse">
    <div className="flex flex-col justify-stretch items-stretch w-full gap-2">
      <h3 className="text-Brand/Text/Text-600 text-[14px] font-medium leading-normal font-DarkerGrotesque h-3 bg-gray-200"></h3>
      <h1 className="text-Brand/Text/Text-800 text-[24px] font-bold leading-8 font-DarkerGrotesque h-6 bg-gray-200"></h1>
      <div className="flex items-center  text-[16px] font-semibold leading-normal font-DarkerGrotesque  w-[70%]">
        <span className="h-4 bg-gray-200 w-[20%]"></span>{" "}
        <span className="h-4 bg-gray-200 w-[10%] ml-[4px]"> </span>
        <span className="ml-[8px] text-Brand/Text/Text-600 text-[14px] font-medium bg-gray-200 w-[70%] h-4"></span>
      </div>
    </div>
    <div className="flex p-4 items-center justify-center rounded-[50%] w-[40px] h-[40px] bg-gray-200"></div>
  </article>
);

interface currentAnalyticProp {
  title: string;
  data: string;
  rating: number;
  since: string;
  direction: string;
  image: (className: string) => React.ReactNode;
}

const Dashboard = () => {
  const [currentAnalytics, setCurrentAnalytics] = useState<
    currentAnalyticProp[]
  >([]);
  const analytic = [
    {
      title: "Visits",
      data: "27564",
      rating: 7,
      since: "last month",
      direction: "decrease",
      image: (className: string) => <User3 />,
    },
    {
      title: "Average session duration",
      data: "10 mins",
      rating: 7,
      since: "last month",
      direction: "increase",
      image: (className: string) => <User3 />,
    },
    {
      title: "Engagements",
      data: "27564",
      rating: 7,
      since: "last month",
      direction: "decrease",
      image: (className: string) => <User3 />,
    },

    {
      title: "Unique visits",
      data: "27564",
      rating: 7,
      since: "last month",
      direction: "decrease",
      image: (className: string) => <User3 />,
    },
  ];

  const AIWriter = [
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
    {
      image: (className: string) => <User3 />,
      title: "Product Name Generator",
      description:
        "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
    },
  ];

  return (
    <section className="mt-8 px-6 w-full 2xl:px-[4%]">
      <div className="w-full">
        <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
          Blog Analytics
        </h2>
        <div className="flex mt-4 gap-6  w-full flex-wrap justify-between relative">
          {currentAnalytics.length < 1 &&
            analytic.map((elem, index) => {
              return <SkeletonAnalytics key={index} />;
            })}
          {currentAnalytics.length > 1 &&
            currentAnalytics.map((elem, index) => {
              const { title, data, direction, rating, since, image } = elem;
              return (
                <article
                  key={index}
                  className="flex items-center justify-between h-[106px] 2xl:h-[120px] p-4 gap-4 rounded-lg bg-Brand/Surface/surface-50 min-w-[267px] 2xl:min-w-[280px]"
                >
                  <div className="flex flex-col justify-stretch items-stretch">
                    <h3 className="text-Brand/Text/Text-600 text-[14px] font-medium leading-normal font-DarkerGrotesque">
                      {title}
                    </h3>
                    <h1 className="text-Brand/Text/Text-800 text-[24px] font-bold leading-8 font-DarkerGrotesque">
                      {data}
                    </h1>
                    <div className="flex items-center  text-[16px] font-semibold leading-normal font-DarkerGrotesque">
                      <span
                        className={` ${
                          direction === "decrease"
                            ? "text-Accent/Danger/Danger-800"
                            : "text-Accent/Success/Success-800"
                        }`}
                      >
                        {direction === "decrease" ? <Decrease /> : <Increase />}{" "}
                      </span>{" "}
                      <span className="ml-[4px] "> {rating}%</span>
                      <span className="ml-[8px] text-Brand/Text/Text-600 text-[14px] font-medium">
                        Since {since}
                      </span>
                    </div>
                  </div>
                  <div className="flex p-4 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 w-[56px] h-[56px]">
                    {image("")}
                  </div>
                </article>
              );
            })}
          {currentAnalytics.length < 1 && (
            <div className="absolute left-[40%] top-[10%]  flex-col items-center justify-center gap-[8px] ">
              <h3 className="text-Brand/Text/Text-800 text-ellipsis text-[20px] font-bold  leading-7 font-DarkerGrotesque mt-4">
                Create our own hobby to see analytics
              </h3>
              <button
                onClick={() => setCurrentAnalytics(analytic)}
                className="flex mx-auto items-center justify-center w-[127px] h-[32px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-md p-4 "
              >
                <span>Create Blog</span>
                <Add />
              </button>
            </div>
          )}
          ;
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
            Blog Analytics
          </h2>
          <div className="flex items-center gap-1 cursor-pointer">
            {" "}
            <span className="font-DarkerGrotesque text-[16px] font-medium leading-normal">
              See more
            </span>
            <ArrowRight />
          </div>
        </div>
        <div className="flex mt-4 gap-6 w-full flex-wrap justify-between">
          {AIWriter.map((elem, index) => {
            const { title, description, image } = elem;
            return (
              <article
                key={index}
                className="flex flex-col w-[267px] min-w-[200px]   items-start justify-start h-[216px] p-5  rounded-lg bg-Brand/Surface/surface-50 max-w-[267px]"
              >
                <div className="flex p-4 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 w-[40px] h-[40px]">
                  {image("")}
                </div>
                <h3 className="text-Brand/Text/Text-800 text-ellipsis text-[20px] font-bold  leading-7 font-DarkerGrotesque mt-4">
                  {title}
                </h3>
                <p className="mt-1 text-Brand/Text/Text-600 text-[16px] font-medium leading-normal font-DarkerGrotesque ">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

Dashboard.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
