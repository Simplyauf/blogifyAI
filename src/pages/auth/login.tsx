import React from "react";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import GMark from "@/assets/GMark.svg";
import Apple from "@/assets/Apple.svg";
import Gmail from "@/assets/gmail.svg";
import Eye from "@/assets/eye.svg";
import SmileRectangle from "@/assets/smile-rectangle.svg";
import Lock from "@/assets/lock.svg";
import RemoveCircle from "@/assets/remove-circle.svg";
import Checkbox from "@/assets/checkbox.svg";
import Link from "next/link";

const Login = () => {
  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="md:w-[476px] w-full mt-[24px]">
        <div>
          <h3 className="text-[32px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
            Login
          </h3>
          <p className="text-[22px] text-center font-DarkerGrotesque mt-[8px] font-semibold leading-normal text-text/text-secondary">
            Welcome back!
          </p>
          <div className="flex w-full mt-[16px] items-center md:justify-between justify-center md:gap-[16px] gap-x-[35px]">
            <button className="h-[55.6px] rounded-lg md:w-[230px] md:px-0 px-[20px]  flex items-center justify-center gap-[10px] bg-Surface/surface-400">
              <GMark />
              <span className="text-[16px] md:flex hidden font-DarkerGrotesque  font-medium leading-normal text-Brand/Text/Text-800">
                Sign In with Google
              </span>
            </button>
            <button className="h-[55.6px] rounded-lg  md:w-[230px] md:px-0 px-[20px]  flex items-center justify-center gap-[10px] bg-Surface/surface-400">
              <Apple />
              <span className="text-[16px] md:flex hidden font-DarkerGrotesque  font-medium leading-normal text-Brand/Text/Text-800">
                Sign In with Apple
              </span>
            </button>
          </div>
          <div className="flex  my-[24px] gap-[16px] w-full items-center">
            <div className="w-[212px] h-[1px] bg-Surface/surface-400"></div>
            <span className="">OR</span>
            <div className="w-[212px] h-[1px] bg-Surface/surface-400"></div>
          </div>

          <form action="">
            <div className="w-full">
              <div className="w-full h-[48px] py-[4px] border-2 rounded-lg border-Accent/Danger/Danger-800 flex items-center gap-[16px] px-[16px]">
                <Gmail />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
              </div>
              <div className="mt-[12px] flex gap-[4px] items-center">
                <RemoveCircle />
                <span className="text-[16px] leading-normal font-DarkerGrotesque font-medium text-Accent/Danger/Danger-800">
                  Please enter a valid email address
                </span>
              </div>
            </div>

            <div className="w-full mt-[16px]">
              <div className="w-full relative h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800  flex items-center gap-[16px] px-[16px]">
                <Lock />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400"
                />
                <Eye className="absolute right-3 top-3" />
              </div>

              <div className="mt-[24px] flex w-full justify-between items-center">
                <div className="flex gap-[8px]">
                  <input
                    className="w-[24px] h-[24px] accent-Brand/Primary/Primary-800 cursor-pointer border-2 rounded-lg border-Brand/Surface/surface-50"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <span className="text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                    Remember me
                  </span>
                </div>
                <span className="text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                  Forgot Password?
                </span>
              </div>

              <button className="h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50">
                Login
              </button>
              <div className="mt-[24px] text-center text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                Dont have an account?{" "}
                <Link
                  href="/auth/signup"
                  className="clipped-Link-text cursor-pointer"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Login.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default Login;
