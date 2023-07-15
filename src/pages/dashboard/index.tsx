import DashboardLayout from "@/src/layouts/DashboardLayout";
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

const SkeletonAnalytics = () => (
  <article className="flex items-center justify-between h-[106px] 2xl:h-[120px] p-4 gap-4 rounded-lg bg-Brand/Surface/surface-50 min-w-[267px] 2xl:min-w-[280px] animate-pulse">
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
    image: (className: string) => <ArticleIcon />,
    title: "Article Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <PostIcon />,
    title: "Post Title Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <PackageIcon />,
    title: "Product Description",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <PackageIcon />,
    title: "Product Name Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <UserIcon />,
    title: "Testimonial Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <Facebook />,
    title: "Facebook Ad Copy",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <BookIcon />,
    title: "Blog Post Idea",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <YoutubeIcon />,
    title: "YouTube Video Description",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },

  {
    image: (className: string) => <TagIcon />,
    title: "YouTube Video Tag",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <InstaIcon />,
    title: "Instagram Caption",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <InstaIcon />,
    title: "Instagram Hashtags",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <ListCircleIcon />,
    title: "Google Ad Copy",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <GoogleIcon />,
    title: "Google Ad Headlines",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <QuizIcon />,
    title: "FAQ Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <SearchIcon />,
    title: "Meta Description",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <NotesIcon />,
    title: "Newsletter",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <GmailIcon />,
    title: "Email Generator",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
];

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
      image: (className: string) => <ChartWave />,
    },
    {
      title: "Engagements",
      data: "27564",
      rating: 7,
      since: "last month",
      direction: "decrease",
      image: (className: string) => <ChartWave />,
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

  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <div className="w-full">
        <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
          Blog Analytics
        </h2>
        <div className=" mt-4 gap-6  w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4  justify-between relative">
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
                  className="flex items-center justify-between h-[106px] 2xl:h-[120px] p-4 gap-4 rounded-lg bg-Brand/Surface/surface-50 w-full min-w-[267px] 2xl:min-w-[280px]"
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
              <h3 className="text-[#000]  text-[20px] font-semibold  leading-normal font-DarkerGrotesque mt-4">
                Create your blog to see analytics
              </h3>
              <button
                onClick={() => setCurrentAnalytics(analytic)}
                className="flex mx-auto items-center justify-center gap-2 w-[127px] h-[32px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[4px] px-4 "
              >
                <span>Create Blog</span>
                <Add />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full flex justify-between items-center">
          <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
            Blog Analytics
          </h2>
          <div className="flex items-center gap-1 cursor-pointer">
            {" "}
            <span className="font-DarkerGrotesque text-[16px] text-Text/Text-600 font-medium leading-normal">
              See more
            </span>
            <ArrowRight />
          </div>
        </div>
        <div className="grid mt-4 gap-6 w-full grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-between">
          {AIWriter.map((elem, index) => {
            const { title, description, image } = elem;
            return (
              <article
                key={index}
                className="flex flex-col w-full   items-start justify-start h-[216px] p-5  rounded-lg bg-Brand/Surface/surface-50 min-w-[267px] 2xl:min-w-[280px]"
              >
                <div className="flex p-2 items-center justify-center rounded-[50%] bg-Brand/Primary/Primary-100 w-[40px] h-[40px]">
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
