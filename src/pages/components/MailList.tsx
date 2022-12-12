import Image from "next/image";
import Link from "next/link";
import React from "react";
import Attach from "../../svg/categories/Attach";
import Finance from "../../svg/categories/Finance";
import Mark from "../../svg/Mark";

const MailList = () => {
  return (
    <div className="mt-3 mb-3 flex w-[calc(100%_-_232px)] overflow-y-visible rounded-lg dark:bg-[#2C2C2D]">
      <div className="email__list_item">
        {/* STATUS */}
        <div className="mr-1 flex h-12 w-7 min-w-[28px] items-center justify-center">
          <div className="h-[6px] w-[6px] rounded-full bg-blue-500 content-none"></div>
        </div>

        {/* SENDER */}
        <div className="mr-[93px] flex items-center space-x-3">
          <div className="flex h-12 w-8 min-w-[32px] items-center ">
            <Image
              className="email__item_picture"
              src={"/assets/person.png"}
              width={32}
              height={32}
              alt="sender profile picture"
            ></Image>
          </div>
          <p>Игорь Коньков</p>
        </div>

        {/* MAIL CONTENT */}
        <div className="ml-3 flex w-3/4 items-center space-x-2 ">
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
    </div>
  );
};

export default MailList;
