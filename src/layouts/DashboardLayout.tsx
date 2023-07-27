import React, { useEffect, useState } from "react";
import Logo from "@/assets/Logo.svg";
import DownArrow from "@/assets/DownArrow.svg";
import Search from "@/assets/search 03.svg";
import Notification from "@/assets/notification.svg";
import Userpic from "@/assets/Userpic.svg";
import BlogIcon from "@/assets/globe.svg";
import AnalyticIcon from "@/assets/chart-wave.svg";
import Plans from "@/assets/diamond.svg";
import SupportIcon from "@/assets/medical service.svg";
import Chatting from "@/assets/chatting.svg";
import AiWriterIcon from "@/assets/notes-edit-check.svg";
import JobsIcon from "@/assets/briefcase.svg";
import AiHubIcon from "@/assets/post add.svg";
import SettingIcon from "@/assets/setting.svg";
import DashboardIcon from "@/assets/dashboard.svg";
import LogoutIcon from "@/assets/logout.svg";
import { useRouter } from "next/router";

import { setIsAuthenticated } from "../redux/slices/authSlice";
import { useAppDispatch } from "../redux/hooks";

import Cookies from "js-cookie";
import { withAuth } from "./withAuth";
import { ProtectRoute } from "../utils/protectedLayout";
import App from "../pages/_app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Layout from "../utils/entireAppLayout";
import EntireAppLayout from "../utils/entireAppLayout";
import MenuLine from "@/assets/menu-line-horizontal.svg";

interface PropType {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: PropType) => {
  // console.log(isAuthenticated);
  const router = useRouter();
  const { pathname } = router;

  const SidebarValues = [
    {
      link: "/dashboard",
      displayValue: "Dashboard",
      LogoImg: (className: string) => <DashboardIcon className={className} />,
    },
    {
      link: "/dashboard/blogs",
      displayValue: "Blogs",
      LogoImg: (className: string) => <BlogIcon className={className} />,
    },
    {
      link: "/dashboard/analytics",
      displayValue: "Analytics",
      LogoImg: (className: string) => <AnalyticIcon className={className} />,
    },
    {
      link: "/dashboard/aihub",
      displayValue: "AI Hub",
      LogoImg: (className: string) => <AiHubIcon className={className} />,
    },
    {
      link: "/dashboard/aiwriter",
      displayValue: "AI Writer",
      LogoImg: (className: string) => <AiWriterIcon className={className} />,
    },
    {
      link: "/dashboard/chat",
      displayValue: "Chat",
      LogoImg: (className: string) => <Chatting className={className} />,
    },
    {
      link: "/dashboard/jobs",
      displayValue: "Jobs",
      LogoImg: (className: string) => <JobsIcon className={className} />,
    },
    {
      link: "/dashboard/plans",
      displayValue: "Plans",
      LogoImg: (className: string) => <Plans className={className} />,
    },
    {
      link: "/dashboard/support",
      displayValue: "Support",
      LogoImg: (className: string) => <SupportIcon className={className} />,
    },
    {
      link: "/dashboard/settings",
      displayValue: "Settings",
      LogoImg: (className: string) => <SettingIcon className={className} />,
    },
    {
      link: "/dashboard/logout",
      displayValue: "Logout",
      LogoImg: (className: string) => <LogoutIcon className={className} />,
    },
  ];

  const navigateToSideItems = (path: string) => {
    console.log("yh");
    if (pathname === "/dashboard") {
      router.push(`${path}`);
    } else {
      router.push(path);
    }
  };

  const [data, setData] = useState();

  // useEffect(() => {
  //   const getUser = async () => {
  //     const user = Cookies.get("user");
  //     if (!user) {
  //       router.push("/auth/login");
  //     } else {
  //       setData(JSON.parse(user));
  //     }
  //   };
  //   getUser();
  // }, []);
  // console.log(data);
  // if(isAuthenticated){

  // }
  // const user = Cookies.get("user");
  // if (!user) {
  //   router.push("/auth/login");
  // }
  return (
    <Provider store={store}>
      <EntireAppLayout>
        <ProtectRoute>
          <div className="bg-Brand/Surface/surface-200 w-full min-h-screen">
            <header className="w-full px-[24px] bg-Brand/Surface/surface-50 border border-Surface/surface-400 py-[16px] flex justify-between h-[76px] items-center z-[1000] fixed top-0">
              <Logo
                onClick={() => router.push("/")}
                className="cursor-pointer hidden sm:block"
              />
              <div className="flex rounded-[50px] sm:hidden bg-Surface/surface-400 w-10 h-10 p-2">
                <MenuLine />
              </div>

              <div className="flex items-center gap-[24px]">
                <div className="flex sm:hidden w-10 h-10 items-center p-2 justify-center rounded-[50%] bg-Surface/surface-400">
                  {" "}
                  <Search className=" " />
                </div>
                <div className="relative sm:w-[320px] sm:flex hidden justify-betwesen items-center bg-Brand/Surface/surface-50 rounded-lg  border-Brand/Surface/surface-800 border">
                  <input
                    type="text"
                    className="w-[82%]  pr-4 ml-4 h-10  focus-visible:bg-Brand/Surface/surface-50 bg-Brand/Surface/surface-50  focus-visible:outline-0 border-0"
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
            <section className="mt-[76px]">
              <div className=" w-full min-h-[calc(100vh+76px)] bg-Brand/Surface/surface-200">
                <ul className="md:flex hidden flex-col fixed top-[76px] left-0 lg:w-[20%] xl:w-[15%] w-[220px] bg-Brand/Surface/surface-50 border border-Surface/surface-400  px-4 py-8 h-auto min-h-[747px] gap-4 justify-start items-start">
                  {SidebarValues.map((content, index) => {
                    const { LogoImg, displayValue, link } = content;
                    return (
                      <li
                        key={index}
                        onClick={() => navigateToSideItems(link)}
                        className={`flex items-center gap-4 py-2 px-6 w-full cursor-pointer ${
                          displayValue === "Logout" &&
                          "text-Accent/Danger/Danger-800"
                        }  ${
                          pathname.startsWith(link) &&
                          link !== "/dashboard" &&
                          "bg-Brand/Primary/Primary-100 rounded-[50px]"
                        }
                  ${
                    pathname === link &&
                    "bg-Brand/Primary/Primary-100 rounded-[50px]"
                  }
                  `}
                      >
                        <>
                          {LogoImg(
                            `${displayValue === "logout" && "text-[#C92014]"}`
                          )}
                        </>
                        <h3
                          className={`font-DarkerGrotesque font-semibold leading-normal text-lg  self-stretch  " 
                     ${
                       pathname.startsWith(link) &&
                       link !== "/dashboard" &&
                       "bg-Brand/Primary/Primary-100 rounded-[50px]"
                     }
                 
                      ${
                        pathname !== link &&
                        pathname.startsWith(link) &&
                        " rounded-[50px] text-Brand/Text/Text-600 opacity-[0.800000011920929]"
                      }
                     ${
                       pathname.startsWith(link) &&
                       link !== "/dashboard" &&
                       "bg-Brand/Primary/Primary-100 rounded-[50px]"
                     }
                  ${
                    pathname === link &&
                    "bg-Brand/Primary/Primary-100  rounded-[50px]"
                  }
                       ${
                         displayValue === "Logout" &&
                         !pathname.startsWith(link) &&
                         "text-Accent/Danger/Danger-800"
                       } 
                   ${
                     !pathname.startsWith(link) &&
                     displayValue !== "Logout" &&
                     "text-Brand/Text/Text-600 opacity-[0.800000011920929]"
                   } 

                  
  ${
    !pathname.startsWith(link) &&
    link === "/dashboard" &&
    " text-Brand/Primary/Primary-800 opacity-[0.8999999761581421] text-2xl"
  }

                   ${
                     pathname.startsWith(link) &&
                     link !== "/dashboard" &&
                     " text-Brand/Primary/Primary-800 opacity-[0.8999999761581421] text-2xl"
                   }
                   
                     ${
                       pathname !== "/dashboard" &&
                       link !== "/dashboard" &&
                       displayValue !== "Logout" &&
                       " opacity-[0.800000011920929] "
                     } 
                   
                   `}
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
        </ProtectRoute>
      </EntireAppLayout>
    </Provider>
  );
};

export default DashboardLayout;
