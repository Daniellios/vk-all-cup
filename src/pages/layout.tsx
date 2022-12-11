import React from "react";
import type { ReactNode } from "react";
import Header from "./components/Header";
import type { FC } from "react";
import Sidebar from "./components/Sidebar";

type LayoutProps = { children?: ReactNode };

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full max-w-[1920px] flex-col items-start justify-start rounded-t-xl rounded-b-xl  bg-white dark:bg-[color:var(--bg-main-dark-theme)]">
      <Header></Header>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default Layout;
