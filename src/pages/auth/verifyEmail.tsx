import React from "react";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const VerifyEmail = () => {
  const router = useRouter();

  const [pin, setPin] = useState("0");
  const inputs = ["input1", "input2", "input3", "input4"];

  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="sm:w-[476px] max-w-[480px] w-full mt-[94px]">
        <h3 className="sm:text-[32px] text-[24px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
          Verify email
        </h3>
        <p className="text-text/text-secondary text-[18px] mt-2 sm:text-[22px] text-center font-DarkerGrotesque font-semibold leading-normal">
          A verification link has been sent to{" "}
          <span className="text-Brand/Primary/Primary-800 cursor-pointer">
            example@gmail.com.
          </span>{" "}
          Click the link to verify your email.
        </p>
        <p className="text-center text-Text/Text-600 text-[14px]  font-DarkerGrotesque font-semibold mt-2">
          Not your email?{" "}
          <span className="text-Brand/Primary/Primary-800 cursor-pointer">
            Go back{" "}
          </span>{" "}
        </p>

        <button
          type="button"
          className="h-12 sm:h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
          onClick={() => router.push("/dashboard")}
        >
          Go To Mail
        </button>
        <div className="mt-[24px] text-center text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium ">
          Haven’t received it?{" "}
          <span className=" cursor-pointer clipped-Link-text">Resend link</span>
        </div>
      </div>
    </section>
  );
};

VerifyEmail.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default VerifyEmail;
