import Image from "next/image";
import Link from "next/link";
import React from "react";
import Error from "../../svg/Error";

const Letter = () => {
  return (
    <div className="mt-3 mb-3 flex h-fit w-[calc(100%_-_232px)] overflow-y-visible rounded-lg dark:bg-[#232324]">
      <div className="flex h-full w-full flex-col pt-4 pl-2 pr-3">
        {/* SUBJECT */}
        <div className="flex h-[60px] w-full pl-7">
          <h1 className="inline-block w-full text-xl">
            Очет о финансовых результатов
          </h1>
        </div>

        {/* SENDER */}
        <div className="mb-3 flex w-full">
          <div className="mr-1 flex h-[42px] w-7 min-w-[28px] items-center justify-center">
            <div className="h-[6px] w-[6px] rounded-full bg-blue-500 content-none"></div>
          </div>

          <div className="flex h-[42px] w-8 min-w-[32px] items-center ">
            <Image
              className="email__item_picture"
              src={"/assets/person.png"}
              width={32}
              height={32}
              alt="sender profile picture"
            ></Image>
          </div>

          {/* SENDER AND IINFO */}
          <div className="flex flex-col pl-3 font-normal">
            {/* MSG INFO */}
            <div className="flex w-full items-center gap-2">
              <p>Игорь Коньков</p>
              <p className="text-[13px] text-[color:var(--text-sub-dark-theme)]">
                Сегодня, 12:34
              </p>
              <Error></Error>
            </div>

            {/* RECIEVERS */}
            <div className="flex w-full">
              <p className="text-[13px]  text-[color:var(--text-sub-dark-theme)]">
                12 получателей: Вы, Андрей Щербаков, Dmitry Petrov, Валерий
                Чкалов ещё 5 получателей
              </p>
            </div>
          </div>
        </div>
        {/*CONTENTS */}
        <div className="flex h-full w-full flex-col gap-4 px-8 pb-8">
          <div className="flex w-full flex-col gap-2">
            {/* ATTACHMENTS */}
            <div className="flex gap-[10px]">
              <Image
                src={"/assets/attach-img.png"}
                width={256}
                height={190}
                alt="imgae"
              ></Image>
              <Image
                src={"/assets/attach-img2.png"}
                width={256}
                height={190}
                alt="imgae"
              ></Image>
            </div>

            <div className="flex items-center text-[13px] font-normal">
              <p className="mr-4">2 файлa</p>
              <Link
                href={"#"}
                className="cursor-pointer text-[color:var(--link-blue)]  hover:underline"
              >
                Скачать все файлы
              </Link>
              <span className=" text-[color:var(--text-sub-dark-theme)]">
                {`(${5}Mb)`}
              </span>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="font-normal">
            <p>
              Добрый день, коллеги! Напрвялю вам бланк отчета о финансовых
              результатах и шаблон с примером его заполнения. Прошу внимательно
              внести все данные в бланк бухгалтерского отчета и отправить мне до
              конца четверга. Если забыл кого-то из руководителей прошу добавить
              в копию или написать мне лично. Хорошего дня!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
