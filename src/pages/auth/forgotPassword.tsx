import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import Gmail from "@/assets/gmail.svg";
import RemoveCircle from "@/assets/remove-circle.svg";
import LeftArrow from "@/assets/left-arrow.svg";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[476px] mt-[94px]">
        <div>
          <h3 className="text-[32px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
            Forgot password?
          </h3>
          <p className="text-[22px] text-center font-DarkerGrotesque mt-[8px] font-semibold leading-normal text-text/text-secondary">
            Enter your email to receive a reset link
          </p>
        </div>
        <form action="" className="mt-[24px]">
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

            <button className="h-[56px] mt-[24px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50">
              Reset password
            </button>
            <div className="mt-[24px] cursor-pointer text-center flex w-full justify-center items-centerml-[2px] gap-[2px]  font-DarkerGrotesque font-medium">
              <LeftArrow />
              <Link
                href="/auth/login"
                className="text-Brand/Primary/Primary-800  text-[16px] leading-normal "
              >
                Back to Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

ForgotPassword.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default ForgotPassword;
