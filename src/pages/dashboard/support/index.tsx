import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import Twitter from "@/assets/twitter.svg";
import Facebook from "@/assets/facebook.svg";
import Instagram from "@/assets/instagram.svg";
import Linkedin from "@/assets/linkedln.svg";
import Add from "@/assets/add.svg";
import Delete from "@/assets/Delete.svg";
import ArrowDown from "@/assets/arrow-down.svg";
import ArrowRight from "@/assets/right-arrow.svg";
import ArrowLeft from "@/assets/left-arrow.svg";
import { useRouter } from "next/router";
import { useState } from "react";
import CreateTicketModal from "./CreateTicketModal";

const Support = () => {
  const [CreateTicketModalOpen, setCreateTicketModalOpen] = useState(false);
  const router = useRouter();
  const supportTicketArr = [
    {
      id: "#3065",
      category: "Security & Privacy",
      status: "Answered",
      Date: "7/1/19",
    },
    {
      id: "#3066",
      category: "Password Recovery",
      status: "Answered",
      Date: "7/1/19",
    },
    {
      id: "#3067",
      category: "Feedbacks",
      status: "Pending",
      Date: "7/1/19",
    },
    {
      id: "#3068",
      category: "Billings and Payment",
      status: "Pending",
      Date: "7/1/19",
    },
  ];

  function blogState(status: string) {
    if (status === "Answered") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-Accent/Success/Success-100 text-Accent/Success/Success-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Answered</span>
          <span className="w-1 h-1 rounded-[50%] bg-Accent/Success/Success-800"></span>
        </div>
      );
    } else if (status === "Pending") {
      return (
        <div className="flex items-center gap-1 h-6 justify-center bg-Accent/Warning/Warning-100 text-Accent/Warning/Warning-800  text-ellipsis text-[14px] font-medium  leading-normal font-DarkerGrotesque p-2 w-fit">
          <span>Pending</span>
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
      <CreateTicketModal
        CreateTicketModalOpen={CreateTicketModalOpen}
        setCreateTicketModalOpen={setCreateTicketModalOpen}
      />
      <div className="mt-8 px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute  w-[85%] right-0">
        <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
          Support Channels
        </h2>
        <section className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-4">
          <article className="flex p-6 flex-col gap-1 order border-[1.5px] rounded-[8px] border-[#e7e7e9] bg-Brand/Surface/surface-50">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              FAQ & Help Center
            </h4>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
              The help center contains a wealth of valuable resources and
              information to address frequently encountered problems.
            </p>
            <button className="flex  border-[1.5px] items-center justify-center mt-5 w-[124px] h-[43px] min-w-fit text-Brand/Text/Text-800 border-Brand/Surface/surface-800 rounded-[4px] px-4 py-3 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque">
              <span>Open health Center</span>
            </button>
          </article>
          <article className="flex p-6 flex-col gap-1 order border-[1.5px] rounded-[8px] border-[#e7e7e9] bg-Brand/Surface/surface-50">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Follow Us
            </h4>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-nrmal text-Brand/Text/Text-600 ">
              The help center contains a wealth of valuable resources and
              information to address frequently encountered problems.
            </p>
            <div className="flex gap-[10px] items-center mt-9">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </article>
          <article className="flex p-6 flex-col gap-1 order border-[1.5px] rounded-[8px] border-[#e7e7e9] bg-Brand/Surface/surface-50">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Community Form
            </h4>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
              Join our community forum – Find solutions and ask questions.
            </p>
            <button className="flex mt-[42px] border-[1.5px] items-center justify-center  w-[124px] h-[43px] min-w-fit text-Brand/Text/Text-800 border-Brand/Surface/surface-800 rounded-[4px] px-4 py-3 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque">
              <span>Join community</span>
            </button>
          </article>
        </section>
        <section className="w-full mt-6">
          <div className="w-full justify-between items-center flex">
            <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
              Support Tickets
            </h2>

            <button className="flex  items-center justify-center w-[143px] h-[48px] min-w-fit text-white bg-Brand/Primary/Primary-800 rounded-[4px] p-4 " onClick={()=> setCreateTicketModalOpen(true)}>
              <span>Create Ticket</span>
              <Add />
            </button>
          </div>
          <div className="mt-4 w-full bg-Brand/Surface/surface-50 rounded-lg">
            <table className="w-full bg-Brand/Surface/surface-50 whitespace-no-wrap rounded-t-lg overflow-hidden">
              <>
                {" "}
                <thead className="bg-Gray/50 text-Gray/500">
                  <tr className="text-left border-b border-gray/200 bg-gray/50 ">
                    <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-5 h-5 mr-3"
                        />
                        <span>Ticket ID</span>
                        <ArrowDown className="ml-1" />
                      </div>
                    </th>
                    <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                      Category
                    </th>
                    <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque">
                      Status
                    </th>
                    <th className="py-3 px-6  capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque ">
                      Date
                    </th>
                    <th className="py-3 px-6 capitalize text-[14px] font-semibold  leading-normal font-DarkerGrotesque ">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {supportTicketArr.map((elem, index) => {
                    console.log(elem.category);
                    const { id, category, status, Date } = elem;
                    return (
                      <tr
                        key={index}
                        className="tableRow text-Gray/500 border-b border-gray-200"
                      >
                        <td className="py-4 px-6 text-[16px] font-semibold text-gray-900   leading-normal font-DarkerGrotesque">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="w-5 h-5 mr-3"
                            />
                            {id}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[16px] font-medium   leading-normal font-DarkerGrotesque">
                          {category}
                        </td>
                        <td className="py-4 px-6">{blogState(status)}</td>
                        <td className="py-4 px-6 text-[16px] font-medium   leading-normal font-DarkerGrotesque">
                          {Date}
                        </td>
                        <td className="py-4 px-6 w-[224px]">
                          <div className="flex items-center gap-3 ">
                            <button
                              className="flex  border-[1.5px] items-center justify-center  w-[60px] h-[35px] min-w-fit text-Brand/Text/Text-800 border-Brand/Surface/surface-800 rounded-[4px] px-4 py-2 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque"
                              onClick={() =>
                                router.push("/dashboard/support/chat")
                              }
                            >
                              <span>View</span>
                            </button>
                            <Delete />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </>
            </table>
            <div className="w-full px-6 py-3 flex items-center justify-between">
              <button className="flex  border-[1.5px] items-center justify-center  min-w-fit w-[108px] h-[38px]  text-gray/700 border-Brand/Surface/surface-800 rounded-[8px] px-4 py-2 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque">
                <ArrowLeft />
                <span>Previous</span>
              </button>
              <div className="flex items-center text-[16px] font-semibold leading-normal  font-DarkerGrotesque">
                <div className="p-3 text-Brand/Primary/Primary-800">1</div>
                <div className="p-3 text-Gray/500">2</div>
                <div className="p-3 text-Gray/500">3</div>
                <div className="p-3 text-Gray/500">...</div>
                <div className="p-3  text-Gray/500">8</div>
                <div className="p-3 text-Gray/500">9</div>
                <div className="p-3 text-Gray/500">10</div>
              </div>
              <button className="flex  border-[1.5px] items-center justify-center  min-w-fit w-[85px] h-[38px]  text-gray/700 border-Brand/Surface/surface-800 rounded-[8px] px-4 py-2 gap-[8px] text-[14px] font-medium  leading-4 font-DarkerGrotesque">
                <span>Next</span>
                <ArrowRight />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Support.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Support;
