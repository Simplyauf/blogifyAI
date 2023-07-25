import React, { FC, useRef, useState } from "react";
import AuthHeaderLayout from "@/src/layouts/authHeaderLayout";
import GMark from "@/assets/GMark.svg";
import Apple from "@/assets/Apple.svg";
import Gmail from "@/assets/gmail.svg";
import Eye from "@/assets/eye.svg";
import EyeCross from "@/assets/eyecross.svg";
import SmileRectangle from "@/assets/smile-rectangle.svg";
import Lock from "@/assets/lock.svg";
import RemoveCircle from "@/assets/remove-circle.svg";
import Checkbox from "@/assets/checkbox.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { RegisterValues } from "./auth";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { loginUser, registerUser } from "@/src/redux/actions/authActions";
import { useAppDispatch } from "@/src/redux/hooks";
import { ClipLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [showpassword, setShowPassword] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your Last name"),
  });

  const initialValues: RegisterValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const dispatch = useAppDispatch();

  const div1 = useRef<HTMLDivElement>(null);
  const div2 = useRef<HTMLDivElement>(null);
  const div3 = useRef<HTMLDivElement>(null);
  const strength = useRef<HTMLDivElement>(null);
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    if (inputValue.length < 1) {
      if (div1.current) div1.current.style.background = "#E5E5EA";
      if (strength.current && strength.current.innerHTML === "Weak") {
        strength.current.innerHTML = "";
      }
    } else if (inputValue.length < 6) {
      if (strength.current) strength.current.innerHTML = "Weak";
      if (div1.current) div1.current.style.background = "#00C805";
    }

    if (inputValue.length >= 6 && /[A-Z]/.test(inputValue)) {
      if (strength.current) strength.current.innerHTML = "Medium";
      if (div2.current) div2.current.style.background = "#00C805";
    } else {
      if (div2.current) div2.current.style.background = "#D1D1D1";
      if (strength.current && strength.current.innerHTML === "Medium") {
        strength.current.innerHTML = "Weak";
      }
    }

    if (
      inputValue.length >= 6 &&
      /[A-Z]/.test(inputValue) &&
      /[^a-zA-Z0-9]/.test(inputValue)
    ) {
      if (strength.current) strength.current.innerHTML = "Strong";
      if (div3.current) div3.current.style.background = "#00C805";
    } else {
      if (div3.current) div3.current.style.background = "#D1D1D1";
      if (strength.current && strength.current.innerHTML === "Strong") {
        strength.current.innerHTML = "Medium";
      }
    }
  };
  console.log(strength, "dhdj");
  const router = useRouter();
  return (
    <section className="w-full flex justify-center items-center lg:px-0 px-[20px]">
      <div className="md:w-[476px] w-full mt-[24px]">
        <div>
          <h3 className="text-[32px] text-center font-DarkerGrotesque font-bold leading-[34px] text-Brand/Text/Text-800">
            Getting Started
          </h3>
          <p className="text-[22px] text-center font-DarkerGrotesque mt-[8px] font-semibold leading-normal text-text/text-secondary">
            Create an account to continue
          </p>
          <div className="flex w-full mt-[16px] items-center md:justify-between justify-center md:gap-[16px] gap-x-[35px]">
            <button className="h-[55.6px] rounded-lg md:w-[230px] md:px-0 px-[20px]  flex items-center justify-center gap-[10px] bg-Surface/surface-400">
              <GMark />
              <span className="text-[16px] md:flex hidden font-DarkerGrotesque  font-medium leading-normal text-Brand/Text/Text-800">
                Sign Up with Google
              </span>
            </button>
            <button className="h-[55.6px] rounded-lg  md:w-[230px] md:px-0 px-[20px]  flex items-center justify-center gap-[10px] bg-Surface/surface-400">
              <Apple />
              <span className="text-[16px] md:flex hidden font-DarkerGrotesque  font-medium leading-normal text-Brand/Text/Text-800">
                Sign Up with Apple
              </span>
            </button>
          </div>
          <div className="flex  my-[24px] gap-[16px] w-full items-center">
            <div className="w-[212px] h-[1px] bg-Surface/surface-400"></div>
            <span className="text-[18px]  font-DarkerGrotesque  font-medium leading-[110%] text-Brand/Text/Text-800">
              OR
            </span>
            <div className="w-[212px] h-[1px] bg-Surface/surface-400"></div>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={async (
              values,
              { setSubmitting }: FormikHelpers<RegisterValues>
            ) => {
              // console.log("first");
              // // perform login logic here
              const firstName = values.firstName;
              const lastName = values.lastName;
              const email = values.email;
              const password = values.password;
              console.log(values);
              await dispatch(
                registerUser(
                  firstName,
                  lastName,
                  email,
                  password,
                  toast,
                  router
                )
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
                  <div className="w-full h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800  flex items-center gap-[16px] px-[16px]">
                    <SmileRectangle />
                    <Field
                      type="name"
                      name="firstName"
                      onChange={handleChange}
                      placeholder="Your First Name"
                      className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400 focus:outline-none"
                    />
                  </div>
                  {errors.firstName && touched.firstName ? (
                    <div className="  gap-[4px] items-center flex">
                      <RemoveCircle />
                      <span className="text-[16px] leading-normal font-DarkerGrotesque font-medium text-Accent/Danger/Danger-800">
                        {errors.firstName}
                      </span>
                    </div>
                  ) : null}
                </div>
                <div className="w-full mt-[16px]">
                  <div className="w-full h-[48px] py-[4px] border rounded-lg border-Brand/Surface/surface-800  flex items-center gap-[16px] px-[16px]">
                    <SmileRectangle />
                    <Field
                      type="name"
                      name="lastName"
                      onChange={handleChange}
                      placeholder="Your Last Name"
                      className="w-full h-full border-transparent focus-visible:border-transparent focus-visible:outline-transparent text-[16px] leading-normal font-DarkerGrotesque font-semibold text-Brand/Text/Text-400 focus:outline-none"
                    />
                  </div>
                  {errors.lastName && touched.lastName ? (
                    <div className="  gap-[4px] items-center flex">
                      <RemoveCircle />
                      <span className="text-[16px] leading-normal font-DarkerGrotesque font-medium text-Accent/Danger/Danger-800">
                        {errors.lastName}
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
                      onInput={handleInput}
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

                  <div className="mt-[16px]">
                    {/* <div className="text-Shade/Shade1 text-[16px] leading-normal font-DarkerGrotesque font-medium">
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
                      </div> */}
                    {/* <section className="flex gap-x-[4px]">
                      <p>Password Strength: </p>
                      <p ref={strength}></p>
                    </section>
                    <section className="w-full flex justify-between mt-[8px] gap-[4px]">
                      <div
                        className="w-full h-[4px] rounded-lg"
                        ref={div1}
                      ></div>
                      <div
                        className="w-full h-[4px] rounded-lg"
                        ref={div2}
                      ></div>
                      <div
                        className="w-full h-[4px] rounded-lg"
                        ref={div3}
                      ></div>
                    </section> */}
                  </div>

                  <div className="mt-[24px] flex gap-[8px]">
                    <input
                      className="w-[24px] h-[24px] accent-Brand/Primary/Primary-800 cursor-pointer border-2 rounded-lg border-Brand/Surface/surface-50 focus:outline-none"
                      type="checkbox"
                      name=""
                      required
                      id=""
                    />
                    <span className="text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium clipped-Link-text">
                      I agree to Terms of Service and Privacy Policy
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="h-[56px] mt-[26px] w-full cursor-pointer rounded-lg bg-Brand/Primary/Primary-800 text-Brand/Surface/surface-50"
                    // onClick={() => console.log("power")}
                  >
                    {!isSubmitting ? (
                      "Sign Up"
                    ) : (
                      <ClipLoader color="white" size={20} />
                    )}
                  </button>
                  <div className="mt-[24px] text-center text-Brand/Text/Text-800 text-[16px] leading-normal font-DarkerGrotesque font-medium">
                    Already have an account?{" "}
                    <Link
                      href="/auth/login"
                      className=" cursor-pointer clipped-Link-text"
                    >
                      Login
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

Signup.getLayout = (page: React.ReactElement) => {
  return <AuthHeaderLayout>{page}</AuthHeaderLayout>;
};

export default Signup;
