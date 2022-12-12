import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import React from "react";

import "../styles/globals.css";
import Layout from "./layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
