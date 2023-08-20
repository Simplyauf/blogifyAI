// actions.ts
// import { login } from "../store";
// import http, { contentType } from "./http";

import http from "@/src/utils/httpReques";
import { login } from "../slices/authSlice";
import { NextRouter } from "next/router";
import Cookies from "js-cookie";

export const loginUser =
  (
    email: string,
    password: string,
    toast: any,
    router: NextRouter,
    rememberMe: boolean
  ) =>
  async (dispatch: any) => {
    try {
      // Perform the login API call
      const response = await http().post("login", {
        email,
        password,
      });
      console.log(response);
      // Extract the access token from the response

      const data = response.data.data;
      // console.log(accessToken);
      rememberMe
        ? Cookies.set("user", JSON.stringify(data), { expires: 20 })
        : Cookies.set("user", JSON.stringify(data));

      const accessToken = response.data.meta.token;

      Cookies.set("accessToken", accessToken);

      router.push("/dashboard");
      // Save the access token in the Redux store
      dispatch(login(accessToken));
    } catch (error: any) {
      // Handle login error here
      toast.error(error.response.data.meta.message);
      console.error("Login error:", error);
    }
  };
export const forgotInitialize =
  (email: string, toast: any, router: NextRouter) => async (dispatch: any) => {
    try {
      // Perform the login API call
      const response = await http().post("forgot-password", {
        email,
      });
      console.log(response);
      // Extract the access token from the response
      const accessToken = response.data.data;
      console.log(accessToken);
      Cookies.set("user", JSON.stringify(accessToken));
      router.push("/auth/newPassword");
      // Save the access token in the Redux store
      dispatch(login(accessToken));
    } catch (error: any) {
      // Handle login error here
      toast.error(error.response.data.message);
      console.error("Login error:", error);
    }
  };

export const registerUser =
  (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    toast: any,
    router: NextRouter
  ) =>
  async (dispatch: any) => {
    try {
      // Perform the register API call
      console.log("response");
      const response = await http().post("register", {
        name: firstName,
        surname: lastName,
        email,
        password,
        password_confirmation: password,
      });
      // Extract the access token from the response
      const { accessToken } = response.data;
      console.log(response);

      router.push("/auth/login");
      // Save the access token in the Redux store
      dispatch(login(accessToken));
    } catch (error: any) {
      // Handle registration error here
      toast.error(error.response.data.meta.message);
      console.error("Registration error:", error);
    }
  };
