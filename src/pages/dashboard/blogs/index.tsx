import React from "react";
import DashboardLayout from "@/src/layouts/DashboardLayout";
import List from "@/assets/list view-rectangle.svg";
import Grid from "@/assets/grid 02.svg";
import Add from "@/assets/add.svg";
import Maximize from "@/assets/maximize.svg";
import LightMaximize from "@/assets/light-maximize.svg";
import BlogImg from "@/assets/Blog Image.png";
import Edit from "@/assets/edit.svg";
import MenuCircle from "@/assets/menu-circle-vertical.svg";
import { useState } from "react";
import NoContent from "@/assets/noContent.svg";
import Globe from "@/assets/globe.svg";
import SmallBlogImg from "@/assets/smallBlogImg.png";
import StatusIcon from "@/assets/broadcast.svg";
import ActionIcon from "@/assets/information.svg";
import CreateBlogModal from "../../../components/dashboard/blogs/createBlogModal/";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size";
import { useEffect } from "react";
import ChooseBlogTemplateModal from "../../../components/dashboard/blogs/chooseBlogTemplateModal";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { blogArr } from "../../../components/dashboard/blogs/blogArr";

export interface BlogArrType {
  GridImg: (className: any) => React.ReactNode;
  ListImg: (className: any) => React.ReactNode;
  title: string;
  url: string;
  status: string;
}

const Blogs = () => {
  const [currentView, setCurrentView] = useState("Grid");
  const [day, setDay] = useState(dayjs(dayjs().format("MM-DD-YYYY")));
  const [blogs, setBlog] = useState<BlogArrType[]>([]);

  useEffect(() => {
    setBlog(blogArr);
  }, []);

  const [ChooseBlogTemplateModalOpen, setChooseBlogTemplateModalOpen] =
    useState(false);

  const currentWidth = useWindowWidth();

  useEffect(() => {
    if (currentWidth < 1280) {
      setCurrentView("Grid");
    }
  }, [currentWidth]);

  console.log(BlogImg);

  interface BlogListProp {
    key: number;
    status: string;
  }

  const SingleListView = ({ key, status }: BlogListProp) => {
    return (
      <div className="mt-3 flex items-center bg-Brand/Surface/surface-50 rounded-lg">
        <div className="bg-Brand/Primary/Primary-100 rounded-l-lg p-4 pb-0">
          <Image
            src={SmallBlogImg.src}
            alt="blog-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover  "
            style={{ width: "170px", height: "88px" }}
          />
        </div>
        <div className="flex w-[76%] justify-between ml-auto gap-2 items-center ">
          <h2 className="text-Brand/Text/Text-800 text-[20px] font-bold line-clamp-1 text-ellipsis leading-7 font-DarkerGrotesque w-[25%]">
            Blogsite Title
          </h2>
          <div className="w-[15%]"> {blogState(status)}</div>
          <div className="flex gap-1 items-center w-[25%]">
            <p className="text-Brand/Text/Text-600  text-[20px] font-medium  leading-8 font-DarkerGrotesque">
              blogsitetitle.com
            </p>
            <Maximize />
          </div>
          <div className="flex items-center gap-6 w-[25%]">
            <button className="flex  border-[1.5px] items-center justify-center w-[105px] h-[35px] min-w-fit text-Brand/Text/Text-800 border-Brand/Surface/surface-800 rounded-[4px] p-4 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque">
              <span>Edit Blog</span>
              <Edit />
            </button>
            <div className="w bg-Brand/Surface/surface-200 border border-Surface/surface-600 rounded-[50%] flex justify-center items-center w-[42px] h-[42px]">
              <MenuCircle />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SingleGridView = ({ key, status }: BlogListProp) => {
    return (
      <div className="flex flex-col gap-3 rounded-lg min-w-[267px]   h-[360px]  bg-Brand/Surface/surface-50">
        <>
          <div className="bg-Brand/Primary/Primary-100 rounded-t-lg p-6 h-[187px] sm:p-8 pb-0">
            <Image
              src={BlogImg.src}
              alt="blog-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full object-cover h-["
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="pt-3 flex flex-col gap-3 p-6 ">
            <div className="justify-between flex items-center ">
              <h2 className="text-Brand/Text/Text-800 text-ellipsis text-[20px] font-bold  leading-7 font-DarkerGrotesque">
                Blogsite Title
              </h2>
              <> {blogState(status)}</>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-Brand/Text/Text-600  text-[20px] font-medium  leading-8 font-DarkerGrotesque">
                blogsitetitle.com
              </p>
              <Maximize />
            </div>
            <div className="justify-between flex items-center w-full">
              <button className="flex  border-[1.5px] items-center justify-center w-[105px] h-[35px] min-w-fit text-Brand/Text/Text-800 border-Brand/Surface/surface-800 rounded-[4px] p-4 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque">
                <span>Edit Blog</span>
                <Edit />
              </button>
              <div className="w bg-Brand/Surface/surface-200 border border-Surface/surface-600 rounded-[50%] flex justify-center items-center w-[42px] h-[42px]">
                <MenuCircle />
              </div>
            </div>
          </div>
        </>
      </div>
    );
  };

  function blogState(status: string) {
    console.log(status === "Live");
    if (status === "Live") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-Accent/Success/Success-100 text-Accent/Success/Success-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Live</span>
          <span className="w-1 h-1 rounded-[50%] bg-Accent/Success/Success-800"></span>
        </div>
      );
    } else if (status === "action-needed") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-Accent/Warning/Warning-100 text-Accent/Warning/Warning-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Action needed</span>
          <span className="w-1 h-1 rounded-[50%] bg-Accent/Warning/Warning-800"></span>
        </div>
      );
    } else if (status === "Inactive") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-Accent/Danger/Danger-100 text-Accent/Danger/Danger-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Live</span>
          <span className="w-1 h-1 rounded-[50%] bg-Accent/Danger/Danger-800"></span>
        </div>
      );
    }
  }

  return (
    <>
      <ChooseBlogTemplateModal
        setBlog={setBlog}
        ChooseBlogTemplateModalOpen={ChooseBlogTemplateModalOpen}
        setChooseBlogTemplateModalOpen={setChooseBlogTemplateModalOpen}
      />
      <section className="pt-8 px-5 pb-[102px] sm:pb-[81px] sm:px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%]  md:w-[75%] absolute w-full lg:w-[80%]  xl:w-[85%] right-0">
        <div className="w-full justify-between items-center flex">
          <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
            Blogs
          </h2>

          <div className="flex items-center gap-6">
            <div className="sm:flex items-center gap-[4px] hidden ">
              <div
                className={`w-[54px] h-[40px] rounded-[4px]  flex justify-center items-center cursor-pointer ${
                  currentView === "Grid"
                    ? "bg-Brand/Primary/Primary-100"
                    : "bg-white"
                }`}
                onClick={() => setCurrentView("Grid")}
              >
                <Grid />
              </div>
              <div
                className={`w-[54px] h-[40px] rounded-[4px]  flex justify-center items-center cursor-pointer ${
                  currentView === "List"
                    ? "bg-Brand/Primary/Primary-100"
                    : "bg-white"
                }`}
                onClick={() => setCurrentView("List")}
              >
                <List />
              </div>
            </div>
            <button
              onClick={() => setChooseBlogTemplateModalOpen(true)}
              className="flex mx-auto items-center text-Brand/Surface/surface-50 justify-center gap-2 w-[127px] sm:w-[134px] h-[40px] sm:h-[48px] min-w-fit  bg-Brand/Primary/Primary-800 rounded-[4px] py-2 px-4 "
            >
              <span className="font-DarkerGrotesque text-[16px] font-medium leading-[26px] text-Brand/Surface/surface-50">
                Create Blog
              </span>
              <Add />
            </button>
          </div>
        </div>
        {blogs.length > 0 ? (
          <div className="w-full mt-9 ">
            {currentView === "List" && (
              <div className="flex items-center w-[76%] justify-between ml-auto gap-2 ">
                <div className="flex items-center gap-[3px] w-[25%]">
                  <span className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-400 ">
                    Blog title
                  </span>
                  <Globe />
                </div>
                <div className="flex items-center gap-[3px]  w-[15%]">
                  <span className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-400 ">
                    Status
                  </span>
                  <StatusIcon />
                </div>
                <div className="flex items-center gap-[3px]  w-[25%]">
                  <span className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-400 ">
                    Domain
                  </span>
                  <LightMaximize />
                </div>
                <div className="flex items-center gap-[3px]  w-[25%]">
                  <span className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-400 ">
                    Actions
                  </span>
                  <ActionIcon />
                </div>
              </div>
            )}
            {currentView === "List" &&
              blogs.map((elem, index) => {
                return <SingleListView key={index} status={elem.status} />;
              })}

            {currentView === "Grid" && (
              <div className="w-full grid sm:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-6 gap-6 ">
                {blogs.map((elem, index) => {
                  const { status } = elem;

                  return <SingleGridView key={index} status={status} />;
                })}
              </div>
            )}
          </div>
        ) : (
          <div className="w-full mt-[72px] flex-col flex justify-center items-center ">
            <div className=" py-[60px] sm:py-[92px] px-[82px]">
              {" "}
              <NoContent />
            </div>
            <h3 className="text-[18px] text-center font-DarkerGrotesque  text-Brand/Text/Text-600 font-semibold leading-normal">
              Nothing to see here, click “Create blog” to start your journey{" "}
            </h3>
          </div>
        )}
      </section>
    </>
  );
};

Blogs.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Blogs;
