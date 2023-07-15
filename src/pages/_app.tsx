import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { ReactNode } from "react";
import NextProgress from "next-progress";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <div className="w-full">
      {" "}
      <NextProgress
        delay={300}
        options={{ showSpinner: false }}
        color="#03045E"
      />
      <Component {...pageProps} />{" "}
    </div>
  );
};

export default App;
