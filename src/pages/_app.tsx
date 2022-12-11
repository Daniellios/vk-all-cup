import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import Layout from "./layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
