import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useTheme } from "next-themes";
import Trash from "../../svg/Trash";
import Theme from "../../svg/Theme";
import Spam from "../../svg/Spam";
import Archive from "../../svg/Archive";
import Drafts from "../../svg/Drafts";
import Sent from "../../svg/Sent";
import Important from "../../svg/Important";
import Incoming from "../../svg/Incoming";
import Compose from "../../svg/Compose";
import Add from "../../svg/Add";

const Sidebar = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="  flex h-full w-[60px] flex-col justify-between rounded-bl-xl py-3 px-3 md:w-[232px] md:px-4">
      <div className="flex w-full flex-col">
        <button className="mb-3 flex w-full items-center justify-center rounded-[8px] border border-[#00103D]/10 py-2">
          <div className="flex h-4 w-4 items-center justify-center  md:hidden">
            <Compose />
          </div>

          <p className="sidebar__link_title"> Написать письмо</p>
        </button>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Incoming />
          </div>
          <p className="sidebar__link_title"> Входящиe</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Important />
          </div>
          <p className="sidebar__link_title"> Важное</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Sent />
          </div>
          <p className="sidebar__link_title"> Отправленные</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Drafts />
          </div>
          <p className="sidebar__link_title"> Черновики</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Archive />
          </div>
          <p className="sidebar__link_title"> Архив</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Spam />
          </div>
          <p className="sidebar__link_title"> Спам</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Trash />
          </div>
          <p className="sidebar__link_title"> Корзина</p>
        </Link>

        <hr className="my-[8px] hidden h-[1px] w-full bg-[#00103D]/10 md:block" />

        <button className="hover:element-active hidden items-center gap-[15px] rounded-lg py-2 pl-3 font-normal text-[#939494] md:flex">
          <div className="flex h-4 w-4 items-center justify-center">
            <Add></Add>
          </div>
          Новая папка
        </button>
      </div>

      <button
        onClick={toggleTheme}
        className="flex w-full  items-center justify-center gap-2 py-2 font-normal md:justify-start md:pl-3  "
      >
        <div className="flex h-5 w-5 items-center justify-center">
          <Theme />
        </div>
        <p className="sidebar__link_title "> Тема: светлая</p>
      </button>
    </div>
  );
};

export default Sidebar;
