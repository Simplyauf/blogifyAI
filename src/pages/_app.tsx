import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { ReactNode } from "react";
import NextProgress from "next-progress";
import { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { useAppSelector } from "../redux/hooks";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Provider store={store}>
      <div className="w-full">
        {" "}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
        />
        <NextProgress
          delay={300}
          options={{ showSpinner: true }}
          color="#03045E"
        />
        <Component {...pageProps} />{" "}
      </div>
    </Provider>
  );
};

export default App;
