import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import Gmail from "@/assets/gmail.svg";
import RemoveCircle from "@/assets/remove-circle.svg";
import LeftArrow from "@/assets/left-arrow.svg";
import Link from "next/link";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { ClipLoader } from "react-spinners";

import { useAppDispatch } from "@/src/redux/hooks";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { forgotInitialize } from "@/src/redux/actions/authActions";
import { ForgotPasswordValues } from "./auth";
const ForgotPassword = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const initialValues: ForgotPasswordValues = {
    email: "",
  };
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="sm:w-[476px] max-w-[480px] w-full mt-[94px]">
        <div>
          <h3 className="text-[24px] sm:text-[32px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
            Forgot password?
          </h3>
          <p className="text-[18px] sm:text-[22px] text-center font-DarkerGrotesque mt-[8px] font-semibold leading-normal text-text/text-secondary">
            Enter your email to receive a reset link
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={async (
            values,
            { setSubmitting }: FormikHelpers<ForgotPasswordValues>
          ) => {
            const email = values.email;

            console.log(values);
            await dispatch(forgotInitialize(email, toast, router));
          }}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            values,
            touched,
            errors,
            isSubmitting,
            handleSubmit,
            handleBlur,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className="w-full mt-[24px]">
                <div className="w-full h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800 flex items-center gap-[16px] px-[16px]">
                  <Gmail />
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400 focus:outline-none"
                  />
                </div>
                {errors.email && touched.email ? (
                  <div className="  gap-[4px] items-center flex">
                    <RemoveCircle />
                    <span className="text-[16px] leading-normal font-DarkerGrotesque font-medium text-Accent/Danger/Danger-800">
                      {errors.email}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="w-full mt-[16px]">
                <button
                  type="submit"
                  className="h-12 sm:h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
                  // onClick={() => console.log("power")}
                >
                  {!isSubmitting ? (
                    "Reset Password"
                  ) : (
                    <ClipLoader color="white" size={20} />
                  )}
                </button>

                <div className="mt-[24px] cursor-pointer text-center flex w-full justify-center items-centerml-[2px] gap-[2px]  font-DarkerGrotesque font-medium">
                  <LeftArrow />
                  <Link
                    href="/auth/login"
                    className="clipped-Link-text text-[16px] leading-normal "
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

ForgotPassword.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default ForgotPassword;
