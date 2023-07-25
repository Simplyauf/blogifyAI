import React from "react";

import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  setIsAuthenticated,
  setIsEntireAppLoader,
} from "../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import Cookies from "js-cookie";
import { useState, useCallback } from "react";

interface PropType {
  children: React.ReactNode;
}

const EntireAppLayout = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isEntireAppLoading } = useAppSelector(
    (state) => state.auth
  );

  const [isUser, setIsUser] = useState(false);

  const getUserFromCookies = () => {
    const userCookie = Cookies.get("user");
    console.log(userCookie);
    return Boolean(userCookie);
  };

  const getIsUser = useCallback(async () => {
    const isUser = await getUserFromCookies();
    setIsUser(isUser);

    if (isUser) {
      await dispatch(setIsAuthenticated(true));
    } else {
      await dispatch(setIsAuthenticated(false));
    }

    dispatch(setIsEntireAppLoader(false)); // Set loading to false after getting user status
  }, []);

  useEffect(() => {
    getIsUser();
  }, [getIsUser]);

  // useEffect(() => {
  //   getIsUser();

  //   isUser && isEntireAppLoading;
  //   dispatch(setIsAuthenticated(true)) && dispatch(setIsEntireAppLoader(false));

  //   !isUser &&
  //     dispatch(setIsAuthenticated(false)) &&
  //     dispatch(setIsEntireAppLoader(false));
  // }, [isUser, dispatch, isEntireAppLoading, getIsUser]);

  console.log(Cookies.get("user"), isUser, isEntireAppLoading);

  return children;
};

export default EntireAppLayout;
