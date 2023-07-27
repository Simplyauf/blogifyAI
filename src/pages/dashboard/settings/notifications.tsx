import DashboardLayout from "@/src/layouts/DashboardLayout";
import React from "react";
import CheckCircle from "@/assets/check-circle.svg";
import { useState } from "react";
import Gmail from "@/assets/gmail.svg";
import SmileRectangle from "@/assets/smile-rectangle.svg";
import Avatar from "@/assets/Avatar.png";
import UploadCloud from "@/assets/upload-cloud.svg";
import DownArrow from "@/assets/DownArrow.svg";
import Computer from "@/assets/computer.svg";
import Delete from "@/assets/large-trash.svg";
import Image from "next/image";
import Globe from "@/assets/Country.svg";
import SettingsTab from "@/src/components/dashboard/SettingsTab";

const Notifications = () => {
  const notificationSettingsArr = [
    {
      title: "Account Notifications",
      description:
        "We'll notify you via email about important updates regarding your account, such as password changes, subscription renewals, or account status changes.",
    },
    {
      title: "Product Updates and New Features",
      description:
        "We'll keep you informed about the latest updates, enhancements, and new features we add to our website builder platform.",
    },
    {
      title: "Account Notifications",
      description:
        "We'll notify you via email about important updates regarding your account, such as password changes, subscription renewals, or account status changes.",
    },
    {
      title: "Product Updates and New Features",
      description:
        "We'll keep you informed about the latest updates, enhancements, and new features we add to our website builder platform.",
    },
    {
      title: "Promotional Emails",
      description:
        "You'll receive emails featuring special offers, discounts, or promotions for additional services, upgrades, or related products offered by our website builder.",
    },
    {
      title: "Tips and Tutorials",
      description:
        "We'll send you educational emails providing tips, tutorials, and best practices for using our website builder effectively, improving your website performance, or optimizing design and content.",
    },
    {
      title: "Surveys and Feedback Requests",
      description:
        "We may ask you to provide feedback, participate in surveys, or share your experiences with our website builder, helping us gather insights for further improvements.",
    },
    {
      title: "Renewal and Upgrade Reminders",
      description:
        "We'll send you reminders about subscription renewals or offer upgrade options to access additional features or services.",
    },
  ];
  return (
    <section className="  px-6 min-h-screen bg-Brand/Surface/surface-200 2xl:px-[4%] absolute md:w-[75%] w-full lg:w-[80%]  xl:w-[85%] right-0">
      <h2 className="font-DarkerGrotesque text-[26px] font-bold leading-[34px] text-[#000] ">
        Settings
      </h2>
      <SettingsTab />
      <section className="mt-6 mb-8 w-full bg-Brand/Surface/surface-50 rounded-lg p-6 flex flex-col">
        <div className="flex w-full justify-between items-center pb-4 mb-[10px] border-b border-b-Surface/surface-400">
          <div className="flex flex-col gap-[10px]">
            <h4 className="font-DarkerGrotesque text-[20px] font-semibold leading-normal text-Brand/Text/Text-800 ">
              Security
            </h4>
            <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
              We can stil send high priority notifications outside these
              settings
            </p>
          </div>
        </div>
        {notificationSettingsArr.map((elem, index) => {
          const { title, description } = elem;
          return (
            <div
              key={index}
              className="flex w-full gap-6 items-start py-4 border-b border-b-Surface/surface-400"
            >
              <div className="flex flex-col gap-[10px] w-[463px]">
                <h4 className="font-DarkerGrotesque text-[18px] font-semibold leading-normal text-Brand/Text/Text-800 ">
                  {title}
                </h4>
                <p className="font-DarkerGrotesque text-[16px] font-medium leading-normal text-Brand/Text/Text-600 ">
                  {description}
                </p>
              </div>
              <button className="flex justify-end items-center rounded-2xl w-10 h-6 bg-Brand/Primary/Primary-600 px-1">
                <div className="w-4 h-4 rounded-[50%] bg-Brand/Surface/surface-50"></div>
              </button>
            </div>
          );
        })}
      </section>
    </section>
  );
};

Notifications.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Notifications;
