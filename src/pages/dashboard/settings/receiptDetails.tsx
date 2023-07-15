import React from "react";
import { useState } from "react";
import Close from "@/assets/close-fill.svg";

interface PropTypes {
  receiptOpen: boolean;
  setreceiptOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReceiptOpen = ({ receiptOpen, setreceiptOpen }: PropTypes) => {
  return (
    <>
      <section
        className={`fixed flex  justify-center items-center top-0 lg:flex lg:justify-center lg:items-center inset-x-0 h-screen w-full  transition-opacity ease-in-out duration-300 ${
          receiptOpen ? "opacity-100 z-[1000]" : "opacity-0 z-[-5] delay-100"
        } `}
      >
        <div
          className={`inset fixed  bg-[#000000] bg-opacity-30 h-screen w-full  ${
            receiptOpen ? " z-[1002]" : " z-[-5]"
          } `}
        ></div>

        <div
          className={`relative w-[640px] max-w-[96%] overflow-y-auto overflow-x-hidden custom-overflow  max-h-[96vh] xl:max-h-[90vh] h-[695px]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 p-6 ${
            receiptOpen ? "opacity-100 z-[1005]" : "opacity-0 z-[-5]"
          } `}
        >
          <div className="flex justify-between w-full items-center gap-2">
            <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
              Receipt Details
            </h2>
            <Close
              onClick={() => setreceiptOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <section className="flex flex-col w-full mt-[30px]">
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Date
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                Sat. Feb 05
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Invoice Number
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                20918
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Payment method
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                Card (#### #### #### 7036)
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Retailer
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                Sat. Feb 05
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Address
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                6391 Elgin St. Celina, Delaware 10299
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Plan
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                Basic Plan
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                VAT ID
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                $0.5
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Total tax $80
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                $80
              </span>
            </div>
            <div className="flex justify-between w-full items-center gap-2 py-2 border-y border-y-Surface/surface-400 h-[64px]">
              <h2 className=" text-[14px] font-DMSans  py-2 font-bold tracking-[0.1px] leading-5  text-[#333] ">
                Total $80.05
              </h2>
              <span className="font-DarkerGrotesque text-[18px]  py-2 font-medium leading-[110%]  text-Brand/Text/Text-800 ">
                $80.5
              </span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ReceiptOpen;
