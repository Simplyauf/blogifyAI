import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { ClipLoader } from "react-spinners";

interface PropType {
  children: React.ReactNode;
}

export const ProtectRoute = ({ children }: any) => {
  const { isAuthenticated, isEntireAppLoading } = useAppSelector(
    (state) => state.auth
  );

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isEntireAppLoading) {
      // console.log("hey");
      router.push("/auth/login");
    }
  }, [isAuthenticated, router, router.pathname, isEntireAppLoading]);

  console.log(isAuthenticated, isEntireAppLoading);

  if (isEntireAppLoading) {
    // You can return a loading component or null, depending on your use case
    return (
      <section className="w-ful h-screen flex justify-center items-center">
        <ClipLoader color="black" size={100} />
      </section>
    );
  }
  if (!isAuthenticated) {
    return null;
  }
  return children;
};
