import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import React, { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import "../styles/globals.css";
import Layout from "./layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient(supabase));
  return (
    // <SessionContextProvider supabaseClient={supabase}>
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    // </SessionContextProvider>
  );
};

export default MyApp;
