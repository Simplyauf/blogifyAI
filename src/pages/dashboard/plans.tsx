import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import CheckCircle from "@/assets/checkmark-circle.svg";
import ArrowTransfer from "@/assets/arrow-transfer.svg";
import { useState } from "react";

const Plans = () => {
  const planArr = [
    {
      type: "Basic plan",
      desc: "Description of the tier list will go here, copy should be concise and impactful.",
      price: "12",
      span: "month",
      currentPlan: true,
    },
    {
      type: "Basic plan",
      desc: "Description of the tier list will go here, copy should be concise and impactful.",
      price: "12",
      span: "month",
      currentPlan: false,
    },
    {
      type: "Basic plan",
      desc: "Description of the tier list will go here, copy should be concise and impactful.",
      price: "12",
      span: "month",
      currentPlan: false,
    },
  ];
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Plans
      </h2>
      <div className="flex gap-4 items-center mt-6">
        <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Gray/1 ">
          Billed Monthly
        </h2>

        <button className="flex justify-end items-center rounded-2xl w-10 h-6 bg-Brand/Primary/Primary-600 px-1">
          <div className="w-4 h-4 rounded-[50%] bg-Brand/Surface/surface-50"></div>
        </button>
        <h2 className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Gray/1 ">
          Billed Anually
        </h2>
      </div>
      <div className="grid mt-4 gap-6 w-full grid-cols-1 lg:w-[65%] xl:w-full xl:grid-cols-2 2xl:grid-cols-2 justify-between">
        {planArr.map((elem, index) => {
          const { currentPlan, desc, price, type, span } = elem;
          return (
            <article
              key={index}
              className="p-6 bg-Brand/Surface/surface-50 rounded-lg flex flex-col "
            >
              <div className="flex justify-between items-center gap-5 pb-6 border-b border-b-Surface/surface-600">
                <div className="flex flex-col gap-1">
                  <h2 className="font-DarkerGrotesque text-[22px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                    {type}
                  </h2>
                  <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600">
                    {desc}
                  </p>
                </div>
                <div className="flex gap-1 items-end">
                  <h3 className="font-DarkerGrotesque text-[34px] font-bold leading-[42px] text-Brand/Text/Text-800">
                    ${price}
                  </h3>{" "}
                  <span className="font-DarkerGrotesque text-[18px] font-medium leading-normal text-Brand/Text/Text-800 flex">
                    /&nbsp;month
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4  pt-6">
                <div className="gap-2 items-center flex">
                  <CheckCircle />{" "}
                  <p className="font-DarkerGrotesque text-[20px] font-medium leading-normal text-Brand/Text/Text-800">
                    Wonderful feature two
                  </p>
                </div>
                <div className="gap-2 items-center flex">
                  <CheckCircle />{" "}
                  <p className="font-DarkerGrotesque text-[20px] font-medium leading-normal text-Brand/Text/Text-800">
                    Wonderful feature two
                  </p>
                </div>
                <div className="gap-2 items-center flex">
                  <CheckCircle />{" "}
                  <p className="font-DarkerGrotesque text-[20px] font-medium leading-normal text-Brand/Text/Text-800">
                    Wonderful feature two
                  </p>
                </div>
                <div className="gap-2 items-center flex">
                  <CheckCircle />{" "}
                  <p className="font-DarkerGrotesque text-[20px] font-medium leading-normal text-Brand/Text/Text-800">
                    Wonderful feature two
                  </p>
                </div>
                <div className="gap-2 items-center flex">
                  <CheckCircle />{" "}
                  <p className="font-DarkerGrotesque text-[20px] font-medium leading-normal text-Brand/Text/Text-800">
                    Wonderful feature two
                  </p>
                </div>
                <div className="gap-2 items-center flex">
                  <CheckCircle />{" "}
                  <p className="font-DarkerGrotesque text-[20px] font-medium leading-normal text-Brand/Text/Text-800">
                    Wonderful feature two
                  </p>
                </div>
              </div>
              <button
                className={`w-full mt-6 min-w-fit rounded-[8px]  flex justify-center items-center h-[56px] py-3 px-4 font-DarkerGrotesque text-[20px] font-medium leading-[32px] text-Brand/Text/Text-100 ${
                  currentPlan
                    ? "bg-Brand/Surface/surface-800 "
                    : "bg-Brand/Primary/Primary-800 gap-4"
                }`}
              >
                {!currentPlan && <ArrowTransfer />}
                <span> {currentPlan ? "Current plan" : "Switch plan"}</span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

Plans.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Plans;
