import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

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
      console.log("hey");
      router.push("/");
    }
  }, [isAuthenticated, router, router.pathname, isEntireAppLoading]);

  console.log(isAuthenticated, isEntireAppLoading);

  if (isEntireAppLoading) {
    // You can return a loading component or null, depending on your use case
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return null;
  }
  return children;
};