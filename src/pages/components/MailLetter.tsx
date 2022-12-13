import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Attach from "../../svg/categories/Attach";
import Finance from "../../svg/categories/Finance";
import Mark from "../../svg/Mark";
import CheckBox from "./CheckBox";

const MailLetter = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isRead, setIsRead] = useState<boolean>(true);
  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  //TODO add checked and marked
  return (
    <Link href={"letter/2"} className="select-none">
      <div className="email__list_item">
        {/* STATUS */}
        <div className="mr-1 flex h-12 w-7 min-w-[28px] items-center justify-center">
          {isRead ? (
            <>
              <div className="email__read_status bg-transparent"></div>
            </>
          ) : (
            <div className="email__read_status"></div>
          )}
        </div>

        {/* SENDER */}
        <div className="flex items-center space-x-3">
          <div className="flex h-12 w-8 min-w-[32px] items-center ">
            <Image
              className="email__item_picture"
              src={"/assets/person.png"}
              width={32}
              height={32}
              alt="sender profile picture"
            ></Image>
            <CheckBox select={handleSelect} isChecked={isSelected} />
          </div>
        </div>

        {/* MAIL CONTENT */}
        <div className="mail__letter_preview">
          <p className="mr-[93px] ">Игорь Коньков</p>
          <div className="flex h-12 w-12 items-center justify-center ">
            <Mark></Mark>
          </div>
          <div className="flex w-full max-w-[1284px] items-center gap-2">
            <p>Отчет о финансовых результатах</p>
            <div className="w-full overflow-hidden truncate text-ellipsis whitespace-nowrap pr-6">
              <p className="font-normal text-[color:var(--text-sub-dark-theme)] ">
                Добрый день, коллеги! Напрвялю вам бланк отчета о финансовых
                результатах и шаблон с примером его заполнения. Прошу
                внимательно внести все данные в бланк бухгалтерского отчета и
                отправить мне до конца четверга. Если забыл кого-то из
                руководителей прошу добавить в копию или написать мне лично.
                Хорошего дня!
              </p>
            </div>
          </div>
        </div>
        {/* MAIL CONTENT END */}

        {/* EMAIL SHORT INFO  */}
        <div className="flex h-full w-[116px] items-center justify-end">
          <div className="flex h-full items-center">
            <div className="email__list_item_icon">
              <Finance></Finance>
            </div>
            <div className="email__list_item_icon">
              <Attach></Attach>
            </div>
          </div>
          <div className="flex h-full w-16 items-center justify-end">
            <p className="font-normal text-[color:var(--text-sub-dark-theme)] ">
              17:41
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MailLetter;
