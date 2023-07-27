// import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import User3 from "@/assets/users 02.svg";
import Decrease from "@/assets/arrow-down-circle.svg";
import Increase from "@/assets/arrow-up-circle.svg";
import ChartWave from "@/assets/chart-wave-rectangle.svg";
import ArrowRight from "@/assets/arrow-right.svg";
import Facebook from "@/assets/facebook.svg";
import FigmaIcon from "@/assets/figma.svg";
import BookIcon from "@/assets/book.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import PackageIcon from "@/assets/package box 01.svg";
import UserIcon from "@/assets/users 02.svg";
import GoogleIcon from "@/assets/google.svg";
import ListCircleIcon from "@/assets/list view-circle.svg";
import InstaIcon from "@/assets/instagram.svg";
import TagIcon from "@/assets/tag.svg";
import NotesIcon from "@/assets/notes 01.svg";
import QuizIcon from "@/assets/quiz.svg";
import ArticleIcon from "@/assets/article.svg";
import SearchIcon from "@/assets/search 01.svg";
import GmailIcon from "@/assets/gmail.svg";
import PostIcon from "@/assets/post add.svg";
import Add from "@/assets/add.svg";
import { useState } from "react";
import DashboardLayout from "@/src/layouts/DashboardLayout";
import { withAuth } from "@/src/layouts/withAuth";
import Link from "next/link";

import AiWritercards from "@/src/components/dashboard/AiWritercards";

const SkeletonAnalytics = () => (
  <article className="flex items-center justify-between h-[106px] 2xl:h-[120px] p-4 gap-4 rounded-lg bg-Brand/Surface/surface-50 md:min-w-[267px] 2xl:min-w-[280px] animate-pulse">
    <div className="flex flex-col justify-stretch items-stretch w-full gap-2">
      <h3 className="text-Brand/Text/Text-600 text-[14px] font-medium leading-normal font-DarkerGrotesque h-3 bg-Surface/surface-400"></h3>
      <h1 className="text-Brand/Text/Text-800 text-[24px] font-bold leading-8 font-DarkerGrotesque h-6 bg-Surface/surface-400"></h1>
      <div className="flex items-center  text-[16px] font-semibold leading-normal font-DarkerGrotesque  w-[70%]">
        <span className="h-4 bg-Surface/surface-400 w-[20%]"></span>{" "}
        <span className="h-4 bg-Surface/surface-400 w-[10%] ml-[4px]"> </span>
        <span className="ml-[8px] text-Brand/Text/Text-600 text-[14px] font-medium bg-Surface/surface-400 w-[70%] h-4"></span>
      </div>
    </div>
    <div className="flex p-4 items-center justify-center rounded-[50%] w-[40px] h-[40px] bg-Surface/surface-400"></div>
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

export const AIWriter = [
  {
    image: (className: string) => <ArticleIcon className={className} />,
    title: "Article Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <PostIcon className={className} />,
    title: "Post Title Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <PackageIcon className={className} />,
    title: "Product Description",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <PackageIcon className={className} />,
    title: "Product Name Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <UserIcon className={className} />,
    title: "Testimonial Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <Facebook className={className} />,
    title: "Facebook Ad Copy",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <BookIcon className={className} />,
    title: "Blog Post Idea",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <YoutubeIcon className={className} />,
    title: "YouTube Video Description",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },

  {
    image: (className: string) => <TagIcon className={className} />,
    title: "YouTube Video Tag",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <InstaIcon className={className} />,
    title: "Instagram Caption",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <InstaIcon className={className} />,
    title: "Instagram Hashtags",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <ListCircleIcon className={className} />,
    title: "Google Ad Copy",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <GoogleIcon className={className} />,
    title: "Google Ad Headlines",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <QuizIcon className={className} />,
    title: "FAQ Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <SearchIcon className={className} />,
    title: "Meta Description",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <NotesIcon className={className} />,
    title: "Newsletter",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <GmailIcon className={className} />,
    title: "Email Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
];

export const analytic = [
  {
    title: "Visits",
    data: "27564",
    rating: 7,
    since: "last month",
    direction: "decrease",
    image: (className: string) => <User3 className={className} />,
  },
  {
    title: "Average session duration",
    data: "10 mins",
    rating: 7,
    since: "last month",
    direction: "increase",
    image: (className: string) => <ChartWave className={className} />,
  },
  {
    title: "Engagements",
    data: "27564",
    rating: 7,
    since: "last month",
    direction: "decrease",
    image: (className: string) => <ChartWave className={className} />,
  },

  {
    title: "Unique visits",
    data: "27564",
    rating: 7,
    since: "last month",
    direction: "decrease",
    image: (className: string) => <User3 className={className} />,
  },
];

const Dashboard = () => {
  const [currentAnalytics, setCurrentAnalytics] = useState<
    currentAnalyticProp[]
  >([]);

  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <div className="w-full">
        <h2 className="font-DarkerGrotesque text-[20px] sm:text-[24px] md:text-[26px] font-bold leading-7 md:leading-[34px] text-[#000] ">
          Blog Analytics
        </h2>
        <div className=" mt-4 BigMobile:gap-4 sm:gap-6  w-full grid grid-cols-1 BigMobile:grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4  justify-between relative">
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
                  className="flex items-center justify-between h-[120px] sm:h-[106px] 2xl:h-[120px] p-4 gap-4 rounded-lg bg-Brand/Surface/surface-50 w-full md:min-w-[267px] 2xl:min-w-[280px]"
                >
                  <div className="flex flex-col justify-stretch items-stretch">
                    <h3 className="text-Brand/Text/Text-600 text-[14px] font-medium leading-normal font-DarkerGrotesque">
                      {title === "Average session duration" ? "ASD" : title}
                    </h3>
                    <h1 className="text-Brand/Text/Text-800 text-[20px] sm:text-[24px] font-bold leading-8 font-DarkerGrotesque min">
                      {data}
                    </h1>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center  text-[16px] font-semibold leading-normal font-DarkerGrotesque">
                      <div className="flex items-center justify-start">
                        <span
                          className={` ${
                            direction === "decrease"
                              ? "text-Accent/Danger/Danger-800"
                              : "text-Accent/Success/Success-800"
                          }`}
                        >
                          {direction === "decrease" ? (
                            <Decrease />
                          ) : (
                            <Increase />
                          )}{" "}
                        </span>{" "}
                        <span
                          className={`ml-[4px] ${
                            direction === "decrease"
                              ? "text-Accent/Danger/Danger-800"
                              : "text-Accent/Success/Success-800"
                          }`}
                        >
                          {" "}
                          {rating}%
                        </span>
                      </div>
                      <span className="sm:ml-[8px] text-Brand/Text/Text-600 text-[12px] sm:text-[14px] font-medium">
                        Since {since}
                      </span>
                    </div>
                  </div>
                  <div className="flex p-2 sm:p-4 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 sm:w-[56px] sm:h-[56px] w-[40px] h-[40px]">
                    {image("")}
                  </div>
                </article>
              );
            })}
          {currentAnalytics.length < 1 && (
            <div className="absolute top-[20%] left-[15%] BigMobile:left-[25%] flex sm:left-[30%] md:left-[40%] md:top-[10%]  flex-col items-center justify-center gap-[8px] ">
              <h3 className="text-[#000]  text-[20px] font-semibold  leading-normal font-DarkerGrotesque mt-4">
                Create your blog to see analytics
              </h3>
              <button
                onClick={() => setCurrentAnalytics(analytic)}
                className="flex  items-center justify-center gap-2 w-[117px] h-[32px]  text-white py-2 min-w-fit bg-Brand/Primary/Primary-800 rounded-[4px] px-4 "
              >
                <span className="text-[14px] leading-4 font-medium  font-DarkerGrotesque">
                  Create Blog
                </span>
                <Add />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 md:mt-6">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
            AI Writer
          </h2>
          <Link
            href={"/dashboard/aiwriter"}
            className="flex items-center gap-1 cursor-pointer"
          >
            {" "}
            <span className="font-DarkerGrotesque text-[16px] text-Text/Text-600 font-medium leading-normal">
              See more
            </span>
            <ArrowRight />
          </Link>
        </div>
        <AiWritercards />
      </div>
    </section>
  );
};

Dashboard.getLayout = (page: React.ReactElement) => {
  // @ts-ignore
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
