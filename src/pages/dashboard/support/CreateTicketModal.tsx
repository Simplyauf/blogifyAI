import React from "react";
import { useState } from "react";
import Close from "@/assets/close-fill.svg";
import ArrowDown from "@/assets/arrow-down.svg";

interface PropTypes {
  CreateTicketModalOpen: boolean;
  setCreateTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTicketModal = ({
  CreateTicketModalOpen,
  setCreateTicketModalOpen,
}: PropTypes) => {
  return (
    <>
      <section
        className={`fixed flex  justify-center items-center top-0 lg:flex lg:justify-center lg:items-center inset-x-0 h-screen w-full  transition-opacity ease-in-out duration-300 ${
          CreateTicketModalOpen
            ? "opacity-100 z-[1000]"
            : "opacity-0 z-[-5] delay-100"
        } `}
      >
        <div
          className={`inset fixed  bg-[#000000] bg-opacity-30 h-screen w-full  ${
            CreateTicketModalOpen ? " z-[1002]" : " z-[-5]"
          } `}
        ></div>

        <div
          className={`relative w-[468px] max-w-[96%] overflow-y-auto overflow-x-hidden p-6 max-h-[96vh] xl:max-h-[90vh] h-[480px]   bg-Brand/Surface/surface-50  rounded-[8px] transition-opacity duration-100 ${
            CreateTicketModalOpen ? "opacity-100 z-[1005]" : "opacity-0 z-[-5]"
          } `}
        >
          <div className="flex w-full justify-between p-2 pl-0">
            <h2 className="text-[#000] text-[20px] font-bold  leading-7 font-DarkerGrotesque ">
              Create Ticket
            </h2>
            <Close
              className="cursor-pointer"
              onClick={() => setCreateTicketModalOpen(false)}
            />
          </div>
          <div className="mt-6 w-full ">
            <h2 className="text-Brand/Text/Text-800 text-[18px] font-bold  leading-7 font-DarkerGrotesque ">
              Choose Category
            </h2>
            <div className="w-full h-[50px] mt-2 border  flex gap-4 items-center px-4 border-Brand/Surface/surface-800 bg-Brand/Surface/surface-50 rounded-lg py-1 ">
              <input
                type="text"
                placeholder="ticket 1"
                className="w-full  h-full bg-Brand/Surface/surface-50  focus-visible:outline-none"
              />
              <ArrowDown />
            </div>
          </div>
          <div className="mt-4 w-full ">
            <div className="flex w-full justify-between items-center">
              <h2 className="text-Brand/Text/Text-800 text-[18px] font-semibold  leading-7 font-DarkerGrotesque ">
                Write your message
              </h2>
              <span className="text-Brand/Text/Text-6600 text-[14px] font-medium  leading-7 font-DarkerGrotesque">
                160 max characters
              </span>
            </div>
            <textarea
              name=""
              placeholder="Write Message"
              id=""
              className="w-full mt-2 h-[136px] border border-Brand/Surface/surface-800 focus-visible:outline-none bg-Brand/Surface/surface-50 rounded-lg py-1 px-4"
            ></textarea>
            <div className="w-full flex justify-end mt-6">
              {" "}
              <button className="flex   items-center justify-center w-[147px] h-[48px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[8px] py-2 px-4 ">
                <span>Create</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateTicketModal;
