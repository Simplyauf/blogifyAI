import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Calendar from "@/assets/calendar.svg";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { analytic } from ".";
import Decrease from "@/assets/arrow-down-circle.svg";
import Increase from "@/assets/arrow-up-circle.svg";
import { useWindowWidth } from "@react-hook/window-size";

const data = [
  {
    name: "Mon",
    Chrome: 4000,
    Firefox: 2400,
    Safari: 2400,
  },
  {
    name: "Tue",
    Chrome: 3000,
    Firefox: 1398,
    Safari: 2210,
  },
  {
    name: "Wed",
    Chrome: 2000,
    Firefox: 3800,
    Safari: 2290,
  },
  {
    name: "Thur",
    Chrome: 2780,
    Firefox: 3908,
    Safari: 2000,
  },
  {
    name: "Fri",
    Chrome: 1890,
    Firefox: 2800,
    Safari: 2181,
  },
  {
    name: "Sat",
    Chrome: 2390,
    Firefox: 3800,
    Safari: 2500,
  },
  {
    name: "Sun",
    Chrome: 3490,
    Firefox: 1300,
    Safari: 2100,
  },
];

const Analytic = () => {
  const currentWidth = useWindowWidth();
  return (
    <section className="mt-8 px-4 sm:px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full  md:w-[75%] lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Analytics
      </h2>
      <section className="w-full flex flex-col lg:flex-row items-center gap-6 mt-4">
        <div className="w-full  lg:w-[70%] px-4 sm:p-6 bg-Brand/Surface/surface-50 rounded-lg">
          <div className="w-full flex justify-between items-center">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              {" "}
              Visitors{" "}
            </h4>
            <button className="flex border-2 w-[133px] h-[38px] p-2 border-Surface/surface-600 min-w-fit justify-center items-center rounded-lg gap-2">
              <Calendar />{" "}
              <span className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-800 ">
                Oct - Nov 2022
              </span>
            </button>
          </div>
          <div className="my-8 w-full h-[291px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={currentWidth >= 768 ? 500 : 321}
                height={currentWidth >= 768 ? 500 : 247}
                data={data}
              >
                <CartesianGrid
                  vertical
                  horizontal={false}
                  strokeWidth={1}
                  stroke="#CFD7E2"
                />
                <XAxis
                  dataKey="name"
                  dy={7}
                  tick={{
                    fontSize: 14,
                    fontFamily: "Darker Grotesque",
                    fill: "#4E5668",
                    fontWeight: "medium",
                  }}
                />

                <YAxis
                  dx={currentWidth >= 768 ? -25 : -12}
                  domain={[0, 4000]}
                  tick={{
                    fontSize: 14,
                    fontFamily: "Darker Grotesque",
                    fill: "#4E5668",
                    fontWeight: "medium",
                  }}
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="Chrome"
                  stroke="#007AFF"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="Firefox"
                  stroke="#FF9500"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="Safari"
                  stroke="#AF52DE"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-[19px]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-Blue/1 rounded-[50%]"></div>
              <p className="font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600 ">
                Chrome
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-Purple/1 rounded-[50%]"></div>
              <p className="font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600 ">
                Firefox
              </p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-Orange/1 rounded-[50%]"></div>
              <p className="font-DarkerGrotesque text-[14px] font-medium leading-normal text-Brand/Text/Text-600 ">
                Safari
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%] grid-cols-1 gap-4 grid">
          {analytic.map((elem, index) => {
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
                    <span
                      className={`${
                        direction === "decrease"
                          ? "text-Accent/Danger/Danger-800"
                          : "text-Accent/Success/Success-800"
                      }`}
                    >
                      {" "}
                      {rating}%
                    </span>
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
        </div>
      </section>
      <section className="mt-6 w-full grid-cols-1 sm:grid-cols-2 grid">
        <article className="p-8 bg-Brand/Surface/surface-50 rounded-lg">
          <h2 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
            Visitors
          </h2>
          <div className="mt-8 w-full flex flex-col gap-4">
            <div className="w-full grid grid-cols-2 items-center flex-wrap justify-between gap-1">
              <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Algeria
              </h2>
              <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600  text-right">
                Item #1
              </h2>
              <div className="w-full relative  h-1 bg-Blue/1 opacity-[0.1599999964237213] z-[1] col-span-2">
                {" "}
              </div>
              <div className="relative col-span-2 -top-2 z-10 opacity-100 left-0 w-[70%] bg-Blue/1 h-1"></div>
            </div>
            <div className="w-full grid grid-cols-2 items-center flex-wrap justify-between gap-1">
              <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Guinea-Bissau
              </h2>
              <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600  text-right">
                Item #2
              </h2>
              <div className="w-full relative  h-1 bg-Green/1 opacity-[0.1599999964237213] z-[1] col-span-2">
                {" "}
              </div>
              <div className="relative col-span-2 -top-2 z-10 opacity-100 left-0 w-[50%] bg-Green/1 h-1"></div>
            </div>
            <div className="w-full grid grid-cols-2 items-center flex-wrap justify-between gap-1">
              <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Aruba
              </h2>
              <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600  text-right">
                Item #3
              </h2>
              <div className="w-full relative  h-1 bg-Orange/1 opacity-[0.1599999964237213] z-[1] col-span-2">
                {" "}
              </div>
              <div className="relative col-span-2 -top-2 z-10 opacity-100 left-0 w-[90%] bg-Orange/1 h-1"></div>
            </div>
            <div className="w-full grid grid-cols-2 items-center flex-wrap justify-between gap-1">
              <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Portugal
              </h2>
              <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600  text-right">
                Item #4
              </h2>
              <div className="w-full relative  h-1 bg-Red/1 opacity-[0.1599999964237213] z-[1] col-span-2">
                {" "}
              </div>
              <div className="relative col-span-2 -top-2 z-10 opacity-100 left-0 w-[20%] bg-Red/1 h-1"></div>
            </div>
            <div className="w-full grid grid-cols-2 items-center flex-wrap justify-between gap-1">
              <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Others
              </h2>
              <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Text/Text-600  text-right">
                Item #5
              </h2>
              <div className="w-full relative  h-1 bg-Purple/1 opacity-[0.1599999964237213] z-[1] col-span-2">
                {" "}
              </div>
              <div className="relative col-span-2 -top-2 z-10 opacity-100 left-0 w-[40%] bg-Purple/1 h-1"></div>
            </div>
          </div>
        </article>
        <article className="w-full p-6 bg-Brand/Surface/surface-50 rounded-lg">
          <div className="w-full flex justify-between items-center">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Session by Device
            </h4>
            <button className="flex border-2 w-[133px] h-[38px] p-2 border-Surface/surface-600 min-w-fit justify-center items-center rounded-lg gap-2">
              <Calendar />{" "}
              <span className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-800 ">
                Oct - Nov 2022
              </span>
            </button>
          </div>
          <div className="w-full mt-6 flex justify-between">
            <div className="w-[50%]"></div>
            <div className="flex flex-col gap-6 self-center">
              <div className="flex  gap-4 min-w-[141px]">
                <div className="w-2 h-2 mt-[7px] bg-Orange/1 rounded-[50%] leading-normal"></div>

                <div className="flex flex-col">
                  <h5 className="font-DarkerGrotesque text-[14px] font-medium  text-Brand/Text/Text-600 ">
                    Desktop PC
                  </h5>
                  <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                    14183
                  </h2>
                </div>
              </div>
              <div className="flex  gap-4 min-w-[141px]">
                <div className="w-2 h-2 mt-[7px] bg-Blue/1 rounded-[50%] leading-normal"></div>

                <div className="flex flex-col">
                  <h5 className="font-DarkerGrotesque text-[14px] font-medium  text-Brand/Text/Text-600 ">
                    Mobile phone
                  </h5>
                  <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                    14183
                  </h2>
                </div>
              </div>
              <div className="flex  gap-4 min-w-[141px]">
                <div className="w-2 h-2 mt-[7px] bg-Green/1 rounded-[50%] leading-normal"></div>

                <div className="flex flex-col">
                  <h5 className="font-DarkerGrotesque text-[14px] font-medium  text-Brand/Text/Text-600 ">
                    Laptops
                  </h5>
                  <h2 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                    14183
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

Analytic.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Analytic;
