import React from "react";
import LeftArrow from "@/assets/left-arrow.svg";
import Lock from "@/assets/lock.svg";
import Eye from "@/assets/eye.svg";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import Link from "next/link";

const NewPassword = () => {
  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="=sm:w-[476px] max-w-[480px] w-full mt-[94px]">
        <div>
          <h3 className="sm:text-[32px] text-[24px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
            Input your new password
          </h3>
          <p className="sm:text-[22px] text-[18px] text-center font-DarkerGrotesque mt-[8px] font-semibold leading-normal text-text/text-secondary">
            Set a new password for your account
          </p>

          <form action="">
            <div className="w-full mt-[16px]">
              <div className="w-full relative h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800  flex items-center gap-[16px] px-[16px]">
                <Lock />
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
                <Eye className="absolute right-3 top-3" />
              </div>
              <div className="w-full mt-[16px] relative h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800  flex items-center gap-[16px] px-[16px]">
                <Lock />
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
                <Eye className="absolute right-3 top-3" />
              </div>
              <div className="mt-[16px]">
                <div className="text-Shade/Shade1 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                  Password Strength:{" "}
                  <span className="text-Accent/Success/Success-800">
                    Strong
                  </span>{" "}
                </div>
                <div className="w-full flex justify-between mt-[8px] gap-[4px]">
                  <div className="w-full h-[4px] rounded-lg bg-Accent/Success/Success-800"></div>
                  <div className="w-full h-[4px] rounded-lg bg-Accent/Success/Success-800"></div>
                  <div className="w-full h-[4px] rounded-lg bg-Gray/10"></div>
                  <div className="w-full h-[4px] rounded-lg bg-Gray/10"></div>
                  <div className="w-full h-[4px] rounded-lg bg-Gray/10"></div>
                </div>
              </div>

              <button className="h-12 sm:h-[56px] mt-[24px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50">
                Set new password
              </button>
              <div className="mt-[24px] cursor-pointer text-center flex w-full justify-center items-centerml-[2px] gap-[2px]  font-DarkerGrotesque font-medium">
                <LeftArrow />
                <Link
                  href="/auth/login"
                  className="clipped-Link-text  text-[16px] leading-normal "
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

NewPassword.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default NewPassword;
