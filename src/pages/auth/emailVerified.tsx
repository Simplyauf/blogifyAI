import React from "react";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

const EmailVerified = () => {
  const router = useRouter();

  const [pin, setPin] = useState("0");
  const inputs = ["input1", "input2", "input3", "input4"];

  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="sm:w-[476px] max-w-[480px] w-full mt-[94px]">
        <h3 className="sm:text-[32px] text-[24px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
          Email Verified
        </h3>
        <p className="text-text/text-secondary text-[18px] sm:text-[22px] text-center mt-2 font-DarkerGrotesque font-semibold leading-normal">
          Your email has been verified for login
        </p>

        <button
          type="button"
          className="h-12 sm:h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
          onClick={() => router.push("/dashboard")}
        >
          Go To Mail
        </button>
      </div>
    </section>
  );
};

EmailVerified.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default EmailVerified;
