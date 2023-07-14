import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import CheckCircle from "@/assets/check-circle.svg";
import { useState } from "react";
import AddCircle from "@/assets/add-circle.svg";
import MasterCard from "@/assets/master card.svg";
import SettingTab from "@/src/components/dashboard/SettingsTab";

const Billing = () => {
  return (
    <section className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Settings
      </h2>
      <SettingTab />
      <section className="mt-4 w-full bg-Brand/Surface/surface-50 rounded-lg p-6 flex flex-col gap-6">
        <div className="flex w-full justify-between items-center pb-6 border-b border-b-Surface/surface-400">
          <div className="flex flex-col gap-2">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Personal info
            </h4>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
              Update your photo and personal details here.
            </p>
          </div>
          <div className="flex gap-3 items-center w-auto mr-6">
            <button className="flex  border-[1.5px] items-center justify-center  w-[71px] h-[35px] min-w-fit text-Brand/Text/Text-800 border-Brand/Text/Text-400 rounded-[8px] px-4 py-2 gap-[8px] text-[16px] font-medium  leading-4 font-DarkerGrotesque">
              <span>Cancel</span>
            </button>
            <button className="flex  items-center justify-center py-3 w-[128px] gap-2 h-[35px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[8px] px-4 ">
              <span className="text-[16px] font-medium  leading-6 text-Brand/Surface/surface-50 font-DarkerGrotesque ">
                Save Changes
              </span>
              <CheckCircle />
            </button>
          </div>
        </div>
        <div className="w-full flex items-start gap-6">
          <div className="w-[25%] flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                Card Details
              </h4>
              <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                Update your card details
              </p>
            </div>
            <button className="flex  border-[1.5px] items-center justify-center  w-[115px] h-[32px] min-w-fit text-Brand/Text/Text-800 border-Brand/Text/Text-400 rounded-[8px] px-4 py-2 gap-[8px] text-[16px] font-medium  leading-4 font-DarkerGrotesque">
              <span>Update Card</span>
              <AddCircle />
            </button>
          </div>
          <div className="grid grid-cols-2  gap-x-6 gap-y-4 w-[75%]">
            <div className="flex flex-col">
              <h4>Name</h4>
              <div className=" h-[48px] py-[4px] mt-4 border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4>Card No</h4>
              <div className=" h-[48px] py-[4px] mt-4 border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <MasterCard />
                <input
                  type="text"
                  placeholder="You card number"
                  className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4>Card Expiry</h4>
              <div className=" h-[48px] py-[4px] mt-4 border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h4>CVV</h4>
              <div className=" h-[48px] py-[4px] mt-4 border rounded-lg border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 flex items-center gap-[16px] px-[16px]">
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full h-full border-transparent focus-visible:border-transparent bg-Brand/Surface/surface-50 focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 w-full bg-Brand/Surface/surface-50 rounded-lg p-6 flex flex-col gap-6">
        <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
          Billing History
        </h4>
        <div className="mt-2 w-full">
          <div className="w-full flex items-center gap-4 px-4 ">
            <input type="checkbox" name="" id="" className="w-5 h-5" />
            <div className=""></div>
          </div>
        </div>
      </section>
    </section>
  );
};

Billing.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Billing;
