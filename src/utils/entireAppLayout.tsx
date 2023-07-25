import React from "react";

import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  setIsAuthenticated,
  setIsEntireAppLoader,
} from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import Cookies from "js-cookie";
import { useState } from "react";

interface PropType {
  children: React.ReactNode;
}

const EntireAppLayout = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isEntireAppLoading } = useAppSelector(
    (state) => state.auth
  );

  const [isUser, setIsUser] = useState(false);

  const getIsUser = async () => {
    await setIsEntireAppLoader(true);
    setIsUser(Boolean(Cookies.get("user")));
    await setIsEntireAppLoader(false);
  };

  useEffect(() => {
    getIsUser();

    isUser &&
      dispatch(setIsAuthenticated(true)) &&
      dispatch(setIsEntireAppLoader(false));
    !isUser &&
      dispatch(
        setIsAuthenticated(false) && dispatch(setIsEntireAppLoader(false))
      );
    console.log(isUser);
  }, [isUser, dispatch]);

  return children;
};

export default EntireAppLayout;
