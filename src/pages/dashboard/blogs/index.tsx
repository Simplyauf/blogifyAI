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
import Globe from "@/assets/globe.svg";
import SmallBlogImg from "@/assets/smallBlogImg.png";
import StatusIcon from "@/assets/broadcast.svg";
import ActionIcon from "@/assets/information.svg";
import CreateBlogModal from "./createBlogModal";
import Image from "next/image";

const Blogs = () => {
  const [currentView, setCurrentView] = useState("Grid");
  const [CreateBlogModalOpen, setCreateBlogModalOpen] = useState(false);

  console.log(BlogImg);

  interface BlogListProp {
    key: number;
    status: string;
  }

  const SingleListView = ({ key, status }: BlogListProp) => {
    return (
      <div className="mt-3 flex items-center bg-Brand/Surface/surface-50 rounded-lg">
        <Image
          src={SmallBlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover rounded-l-lg"
          style={{ width: "170px", height: "88px" }}
        />
        <div className="flex w-[80%] justify-between ml-auto gap-2 items-center ">
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
      <div className="flex flex-col gap-3 rounded-lg min-w-[267px]   h-[354px]  bg-Brand/Surface/surface-50">
        <>
          <Image
            src={BlogImg.src}
            alt="blog-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover rounded-t-lg"
            style={{ width: "100%", height: "187px" }}
          />

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

  const blogs = [
    {
      GridImg: (className: string) => (
        <Image
          src={BlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-fill"
          style={{ width: "100%", height: "187px" }}
        />
      ),
      ListImg: (className: string) => (
        <Image
          src={SmallBlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-fill"
          style={{ width: "170px", height: "88px" }}
        />
      ),
      title: "Blogsite Title",
      url: "blogsitetitle.com",
      status: "Live",
    },
    {
      GridImg: (className: string) => (
        <Image
          src={BlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-fill"
          style={{ width: "100%", height: "187px" }}
        />
      ),
      ListImg: (className: string) => (
        <Image
          src={SmallBlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-fill"
          style={{ width: "170px", height: "88px" }}
        />
      ),

      title: "Blogsite Title",
      url: "blogsitetitle.com",
      status: "action-needed",
    },
    {
      GridImg: (className: string) => (
        <Image
          src={BlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-fill"
          style={{ width: "100%", height: "187px" }}
        />
      ),
      ListImg: (className: string) => (
        <Image
          src={SmallBlogImg.src}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-fill"
          style={{ width: "170px", height: "88px" }}
        />
      ),

      title: "Blogsite Title",
      url: "blogsitetitle.com",
      status: "Inactive",
    },
  ];

  return (
    <>
      <CreateBlogModal
        CreateBlogModalOpen={CreateBlogModalOpen}
        setCreateBlogModalOpen={setCreateBlogModalOpen}
      />
      <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute w-full lg:w-[80%]  xl:w-[85%] right-0">
        <div className="w-full justify-between items-center flex">
          <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
            Blogs
          </h2>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-[4px]">
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
              onClick={() => setCreateBlogModalOpen(true)}
              className="flex mx-auto items-center text-Brand/Surface/surface-50 justify-center gap-2 w-[134px] h-[48px] min-w-fit  bg-Brand/Primary/Primary-800 rounded-[4px] p-4 "
            >
              <span className="font-DarkerGrotesque text-[16px] font-medium leading-[26px] text-Brand/Surface/surface-50">
                Create Blog
              </span>
              <Add />
            </button>
          </div>
        </div>
        <div className="w-full mt-9 ">
          {currentView === "List" && (
            <div className="flex items-center w-[80%] justify-between ml-auto gap-2 ">
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
        </div>
        {currentView === "Grid" && (
          <div className="w-full grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-6 gap-6 ">
            {blogs.map((elem, index) => {
              const { status } = elem;

              return <SingleGridView key={index} status={status} />;
            })}
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
