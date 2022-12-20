import Link from "next/link";
import React, { useEffect, useState } from "react";
import Theme from "../../svg/Theme";
import Compose from "../../svg/Compose";
import Add from "../../svg/Add";
import sideBarLinks from "../../static/sidebar";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setCurrentTheme("dark"), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setCurrentTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex h-full w-[60px] min-w-[60px] flex-col justify-between rounded-bl-xl py-3 px-3 md:w-[232px] md:min-w-[232px] md:px-4">
      <div className="flex w-full flex-col">
        <button className="mb-3 flex w-full items-center justify-center rounded-[8px] border border-[#00103D]/10 py-2 dark:border-[#999999] dark:bg-white ">
          <div className="flex h-4 w-4 items-center justify-center  md:hidden">
            <Compose />
          </div>

          <p className="sidebar__link_title dark:text-[#333333]">
            Написать письмо
          </p>
        </button>

        {sideBarLinks.map((sbLink, idx) => {
          return (
            <Link
              href={sbLink.path}
              key={idx}
              className={`sidebar__link  ${
                router.pathname === sbLink.path ? "sidebar__link-active" : ""
              }`}
            >
              <div className="flex h-5 w-5 items-center justify-center">
                <sbLink.icon></sbLink.icon>
              </div>
              <p className="sidebar__link_title">{sbLink.title}</p>
            </Link>
          );
        })}

        <hr className="my-[8px] hidden h-[1px] w-full border-[#00103D]/10 dark:border-black/40 md:block" />

        <button className="hover:element-active hidden items-center gap-[15px] rounded-lg py-2 pl-3 font-normal text-[#939494] md:flex">
          <div className="flex h-4 w-4 items-center justify-center">
            <Add></Add>
          </div>
          Новая папка
        </button>
      </div>

      <button
        onClick={toggleTheme}
        className="element-hover flex  w-full items-center justify-center gap-2 rounded-[4px] py-2 font-normal  md:justify-start md:pl-3"
      >
        <div className="flex h-5 w-5 items-center justify-center">
          <Theme />
        </div>
        {currentTheme && currentTheme === "dark" ? (
          <p className="sidebar__link_title ">Тема: темная</p>
        ) : (
          <p className="sidebar__link_title ">Тема: светлая</p>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
