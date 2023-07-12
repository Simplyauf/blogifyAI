import React from "react";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import { useEffect } from "react";
import { useState } from "react";

const VerifyEmail = () => {
  const [pin, setPin] = useState("0");
  const inputs = ["input1", "input2", "input3", "input4"];

  useEffect(() => {
    inputs.map((id) => {
      const input =
        (document && (document.getElementById(id) as HTMLInputElement)) || null;

      if (typeof document !== "undefined") {
        addListener(input);
      }
    });
  }, []);

  function addListener(input: HTMLInputElement) {
    input.addEventListener("keyup", (e) => {
      if (input.value.length > 0) {
        input.style.setProperty("border-color", "#CFD7E2");
      } else {
        input.style.setProperty("border-color", "#E5E5EA");
      }

      const key = e.key; // const {key} = event; ES6+

      const code = parseInt(input.value);
      if (
        code >= 0 &&
        code <= 9 &&
        !(key === "Backspace" || key === "Delete")
      ) {
        const n = input.nextElementSibling as HTMLInputElement;
        if (n) n.focus();
      } else {
        input.value = "";
      }

      if (key === "Backspace" || key === "Delete") {
        const prev = input.previousElementSibling as HTMLInputElement;
        if (prev) prev.focus();
      }

      const pinValue: string = inputs
        .map(
          (id: string) =>
            (document.getElementById(id) as HTMLInputElement)?.value
        )
        .join("");
      setPin(pinValue);
    });
  }

  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="md:w-[476px] w-full mt-[94px]">
        <h3 className="text-[32px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
          Verify email
        </h3>
        <p className="text-text/text-secondary text-[22px] text-center font-DarkerGrotesque font-semibold leading-normal">
          We sent a verification code to{" "}
          <span className="text-Brand/Primary/Primary-800 cursor-pointer">
            example@gmail.com.
          </span>{" "}
          Enter the code from the email in the field below
        </p>
        <p className="text-center text-Text/Text-600 text-[14px]  font-DarkerGrotesque font-semibold">
          Not your email?{" "}
          <span className="text-Brand/Primary/Primary-800 cursor-pointer">
            Go back{" "}
          </span>{" "}
        </p>
        <div className="flex w-full items-center justify-center  mt-[24px] gap-[24px]">
          <input
            id="input1"
            type="text"
            maxLength={1}
            placeholder="-"
            className="md:h-[72px] text-[34px] pl-[18px] md:leading-[42px] font-bold pl-[27px] font-DarkerGrotesque text-Shade/Shade2 md:w-[72px] w-[55px] h-[55px] rounded-lg  border border-Surface/surface-600 bg-Brand/Surface/surface-50"
          />
          <input
            id="input2"
            type="text"
            maxLength={1}
            placeholder="-"
            className="md:h-[72px] text-[34px] pl-[18px] md:pl-[27px] leading-[42px] font-bold font-DarkerGrotesque text-Shade/Shade2 md:w-[72px] w-[55px] h-[55px] rounded-lg  border border-Surface/surface-600 bg-Brand/Surface/surface-50"
          />
          <input
            id="input3"
            type="text"
            maxLength={1}
            placeholder="-"
            className="md:h-[72px] text-[34px] pl-[18px] md:pl-[27px] leading-[42px] font-bold font-DarkerGrotesque text-Shade/Shade2 md:w-[72px] w-[55px] h-[55px] rounded-lg  border border-Surface/surface-600 bg-Brand/Surface/surface-50"
          />
          <input
            id="input4"
            type="text"
            maxLength={1}
            placeholder="-"
            className="md:h-[72px] text-[34px] pl-[18px] md:pl-[27px] leading-[42px] font-bold font-DarkerGrotesque text-Shade/Shade2 md:w-[72px] w-[55px] h-[55px] rounded-lg  border border-x-Surface/surface-600 bg-Brand/Surface/surface-50"
          />
        </div>
        <button className="h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50">
          Verify Account
        </button>
        <div className="mt-[24px] text-center text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
          Haven’t received it?{" "}
          <span className="text-Brand/Primary/Primary-800 cursor-pointer">
            Resend a new code
          </span>
        </div>
      </div>
    </section>
  );
};

VerifyEmail.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default VerifyEmail;
