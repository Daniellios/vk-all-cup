import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="flex h-full w-[60px] flex-col justify-between rounded-bl-xl py-3 px-3 md:w-[232px]  md:px-4 ">
      <div className="flex w-full flex-col">
        <button className="mb-3 flex w-full items-center justify-center rounded-[8px] border border-[#00103D]/10 py-2">
          <div className="flex h-4 w-4 items-center justify-center  md:hidden">
            <Image
              src={"/assets/compose.svg"}
              width={16}
              height={16}
              alt="Иконка входящих собшений"
            ></Image>
          </div>

          <p className="sidebar__link_title"> Написать письмо</p>
        </button>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/mail.svg"}
              width={16}
              height={14}
              alt="Иконка входящих собшений"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Входящиe</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/important.svg"}
              width={16}
              height={14}
              alt="Иконка важных собшений"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Важное</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/sent.svg"}
              width={16}
              height={14}
              alt="Иконка отправленных собшений"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Отправленные</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/drafts.svg"}
              width={16}
              height={14}
              alt="Иконка черновика собшений"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Черновики</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/archive.svg"}
              width={16}
              height={14}
              alt="Иконка архива сообщений"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Архив</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/spam.svg"}
              width={16}
              height={14}
              alt="Иконка спама"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Спам</p>
        </Link>

        <Link href={"#"} className="sidebar__link">
          <div className="flex h-5 w-5 items-center justify-center">
            <Image
              src={"/assets/trash.svg"}
              width={14}
              height={14}
              alt="Иконка корзины"
            ></Image>
          </div>
          <p className="sidebar__link_title"> Корзина</p>
        </Link>

        <hr className="my-[8px] hidden h-[1px] w-full bg-[#00103D]/10 md:block" />

        <button className="hover:element-active hidden items-center gap-[15px] rounded-lg py-2 pl-3 font-normal text-[#333333]/40 md:flex">
          <div className="flex h-4 w-4 items-center justify-center">
            <Image
              src={"/assets/add.svg"}
              width={10}
              height={10}
              alt="add new folder icon"
            ></Image>
          </div>
          Новая папка
        </button>
      </div>

      <button className="flex w-full   items-center justify-center gap-2 py-2  font-normal md:justify-start md:pl-3 ">
        <div className="flex h-5 w-5 items-center justify-center">
          <Image
            src={"/assets/theme.svg"}
            width={17}
            height={17}
            alt="add new folder icon"
          ></Image>
        </div>
        <p className="sidebar__link_title"> Тема: светлая</p>
      </button>
    </div>
  );
};

export default Sidebar;
