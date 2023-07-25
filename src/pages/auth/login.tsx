import React, { useState } from "react";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import GMark from "@/assets/GMark.svg";
import Apple from "@/assets/Apple.svg";
import Gmail from "@/assets/gmail.svg";
import Eye from "@/assets/eye.svg";
import EyeCross from "@/assets/eyecross.svg";
import Lock from "@/assets/lock.svg";
import RemoveCircle from "@/assets/remove-circle.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { LoginValues, RegisterValues } from "./auth";
import { useAppDispatch } from "@/src/redux/hooks";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-hot-toast";
import { loginUser } from "@/src/redux/actions/authActions";
import { ClipLoader } from "react-spinners";
import { ChangeEvent } from "react";
import Cookies from "js-cookie";
const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showpassword, setShowPassword] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }
  };

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
          <Formik
            initialValues={initialValues}
            onSubmit={async (
              values,
              { setSubmitting }: FormikHelpers<LoginValues>
            ) => {
              // console.log("first");
              // // perform login logic here

              const email = values.email;
              const password = values.password;
              console.log(values);

              rememberMe &&
                Cookies.set("rememberMe", JSON.stringify(true), {
                  expires: 20,
                });
              await dispatch(
                loginUser(email, password, toast, router, rememberMe)
              );
              // setSubmitting(false);
              // console.log("first");
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 500);
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
                <div className="w-full">
                  <div className="w-full h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800 flex items-center gap-[16px] px-[16px]">
                    <Gmail />
                    <Field
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400 focus:outline-none"
                    />
                    {/* {errors.firstName && touched.firstName ? (
 -            <div>{errors.firstName}</div>
 -          ) : null} */}
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
                  <div className="w-full relative h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800  flex items-center gap-[16px] px-[16px]">
                    <Lock />
                    <Field
                      // value={values.password}
                      type={`${showpassword ? "password" : "text"}`}
                      name="password"
                      placeholder="Create Password"
                      className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showpassword)}
                    >
                      {showpassword ? (
                        <Eye className="absolute right-3 top-3" />
                      ) : (
                        <EyeCross className="absolute right-3 top-3" />
                      )}
                    </button>
                  </div>
                  <div className="mt-[24px] flex w-full justify-between items-center">
                    <div className="flex gap-[8px]">
                      <input
                        className="w-[24px] h-[24px] accent-Brand/Primary/Primary-800 cursor-pointer border-2 rounded-lg border-Brand/Surface/surface-50"
                        type="checkbox"
                        name=""
                        id=""
                        onChange={(e) => handleRememberMe(e)}
                      />
                      <span className="text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                        Remember me
                      </span>
                    </div>
                    <span
                      className="text-Brand/Text/Text-800 cursor-pointer text-[16px] leading-normal font-DarkerGrotesque font-medium"
                      onClick={() => router.push("/auth/forgotPassword")}
                    >
                      Forgot Password?
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
                    // onClick={() => console.log("power")}
                  >
                    {!isSubmitting ? (
                      <span className="text-[20px] font-DarkerGrotesque ">
                        Login
                      </span>
                    ) : (
                      <ClipLoader color="white" size={20} />
                    )}
                  </button>

                  <div className="mt-[24px] text-center text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                    Dont have an account?{" "}
                    <Link
                      href="/auth/signup"
                      className=" cursor-pointer clipped-Link-text"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

Login.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default Login;
