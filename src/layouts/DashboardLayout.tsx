import React from "react";
import Logo from "@/assets/Logo.svg";
import DownArrow from "@/assets/DownArrow.svg";
import Search from "@/assets/search 03.svg";
import Notification from "@/assets/notification.svg";
import Userpic from "@/assets/Userpic.svg";
import DashboardIcon from "@/assets/dashboard.svg";
import { useRouter } from "next/router";

interface PropType {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: PropType) => {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname, useRouter());

  const SidebarValues = [
    {
      link: "/dashboard",
      displayValue: "Dashboard",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
    {
      link: "/dashboard/blogs",
      displayValue: "Blogs",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
    {
      link: "/dashboard/analytics",
      displayValue: "Analytics",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
    {
      link: "/aihub",
      displayValue: "AI Hub",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
    {
      link: "/dashboard//aiwriter",
      displayValue: "AI Writer",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
    {
      link: "/dashboard//chat",
      displayValue: "Chat",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
  ];

  const navigateToSideItems = (path: string) => {
    if (pathname === "/dashboard") {
      console.log("yh");
      router.push(`/${path}`);
    } else {
      router.push(path);
    }
  };
  return (
    <div className="bg-Brand/Surface/surface-200 w-full min-h-screen">
      <header className="w-full px-[24px] bg-Brand/Surface/surface-50 border border-Surface/surface-400 py-[16px] flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-[24px]">
          <div className="relative w-[320px] flex justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-lg  border-Brand/Surface/surface-800 border">
            <input
              type="text"
              className="w-[82%] pr-4 ml-4 h-10  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
              placeholder="Explore"
            />
            <Search className=" " />
          </div>
          <div className="flex rounded-[50px] bg-Surface/surface-400 flex-col items-end p-2 relative">
            <Notification />
            <div className="w-[6px] h-[6px] rounded-[99px] bg-Accent/Danger/Danger-800 border border-s-Brand/Surface/surface-50 absolute top-[9px] right-[12px]"></div>
          </div>

          <div className="flex items-center gap-[2px]">
            <Userpic className="w-10 h-10 rounded-[50%]" />
            <DownArrow />
          </div>
        </div>
      </header>
      <section>
        <div className="flex w-full ">
          <ul className="flex flex-col bg-Brand/Surface/surface-50 border border-Surface/surface-400 w-[252px] px-4 py-8 h-auto min-h-[747px] gap-4 justify-start items-start">
            {SidebarValues.map((content, index) => {
              const { LogoImg, displayValue, link } = content;
              return (
                <li
                  key={index}
                  onClick={() => navigateToSideItems(link)}
                  className={`flex items-center gap-4 py-2 px-6 w-full cursor-pointer  ${
                    pathname === link
                      ? "bg-Brand/Primary/Primary-100 rounded-[50px]"
                      : ""
                  }`}
                >
                  <>{LogoImg("")}</>
                  <h3
                    className={`font-DarkerGrotesque font-semibold leading-normal text-lg  self-stretch   ${
                      pathname === link
                        ? " text-Brand/Primary/Primary-800 opacity-[0.8999999761581421] "
                        : "text-Brand/Text/Text-600 opacity-[0.800000011920929]"
                    }`}
                  >
                    {displayValue}
                  </h3>
                </li>
              );
            })}
          </ul>
          {children}
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
