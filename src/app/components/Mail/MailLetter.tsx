"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import Attach from "../../../svg/categories/Attach";
import Finance from "../../../svg/categories/Finance";
import Error from "../../../svg/Error";
import CheckBox from "../CheckBox";
import EmailMark from "../EmailMark";
import type { IMailLetter } from "./interfaces";

const MailLetter: FC<IMailLetter> = ({
  height,
  read = false,
  important = false,
  id,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isMarked, setIsMarked] = useState<boolean>(false);

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  const handleMark = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsMarked(!isMarked);
  };

  return (
    <Link
      href={`letter/${id}`}
      className="email__list_link"
      style={{ top: height }}
    >
      <div className="email__list_item">
        {/* STATUS */}
        <div className="mr-1 flex h-12 w-7 min-w-[28px] items-center justify-center">
          {read ? (
            <>
              <div className="email__read_status bg-transparent"></div>
            </>
          ) : (
            <div className="email__read_status"></div>
          )}
        </div>

        {/* SENDER */}
        <div className="flex items-center space-x-3">
          <div className="relative z-10 flex h-12 w-8 min-w-[32px] items-center">
            {isSelected ? (
              <></>
            ) : (
              <Image
                className="email__item_picture"
                src={"/assets/person.png"}
                width={32}
                height={32}
                alt="sender profile picture"
              ></Image>
            )}
            <CheckBox select={handleSelect} isChecked={isSelected} />
          </div>
        </div>

        {/* MAIL CONTENT */}
        <div className="mail__letter_preview">
          <p className="mr-10 ">Игорь Коньков</p>
          <div className="flex h-12 w-12 min-w-[48px] items-center justify-center">
            <EmailMark mark={handleMark} isMarked={isMarked}></EmailMark>
            <div className="flex h-12 w-12 min-w-[48px] items-center justify-center pr-2">
              {important ? <Error></Error> : ""}
            </div>
          </div>

          <div className="flex w-[calc(100%_-_30%)] items-center gap-2">
            <p>Отчет о финансовых результатах</p>
            <div className="w-[calc(100%_-_70%)]">
              {/* TODO- make calc for widht to solve the issue? */}
              <p className="w-full truncate font-normal text-[color:var(--text-sub-dark-theme)] ">
                Добрый день, коллеги! Напрвялю вам бланк отчета о финансовых
                результатах и шаблон с примером его заполнения. Прошу
                внимательно внести все данные в бланк бухгалтерского отчета и
                отправить мне до конца четверга. Если забыл кого-то из
                руководителей прошу добавить в копию или написать мне лично.
                Хорошего дня!
              </p>
            </div>
          </div>

          {/* EMAIL SHORT INFO  */}
          <div className="flex h-full w-auto items-center justify-end self-end">
            <div className="flex h-full items-center">
              <div className="email__list_item_icon">
                <Finance></Finance>
              </div>
              <div className="email__list_item_icon">
                <Attach></Attach>
              </div>
            </div>
            <div className="flex h-full w-14 items-center justify-end">
              <p className="font-normal text-[color:var(--text-sub-dark-theme)] ">
                17:41
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MailLetter;
