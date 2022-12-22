import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownLoad from "../../svg/DownLoad";
import Error from "../../svg/Error";
import formatAttachments from "../../utils/formatAttachments";
import formatConverter from "../../utils/formatConverter";
import fromatDate from "../../utils/formatDate";
import formatRecievers from "../../utils/formatRecievers";

const MailLetterContent = ({ letterContent }: Params) => {
  const { author, read, text, title, doc, date, important, to } = letterContent;
  const attachmentInfo = formatConverter(doc?.img);

  return (
    <div className="mt-3 mb-3 flex h-fit w-[calc(100%)] overflow-y-visible rounded-lg dark:bg-[#232324]">
      <div className="flex h-full w-full flex-col pt-4 pl-2 pr-3">
        {/* SUBJECT */}
        <div className="flex h-10 w-full pl-2 sm:h-[60px] sm:pl-7">
          <h1 className="text-md inline-block w-full sm:text-xl">{title}</h1>
        </div>

        {/* SENDER */}
        <div className="mb-3 flex w-full">
          <div className="flex items-center sm:flex-row">
            <div className="order-0 mr-1 flex h-[42px] w-7 min-w-[28px] items-center justify-center">
              <div
                className={`email__read_status ${read ? "bg-transparent" : ""}`}
              ></div>
            </div>

            <div className="flex h-[42px] w-8 min-w-[32px] items-center ">
              <Image
                src={author.avatar ? author.avatar : "/assets/person.png"}
                style={{ borderRadius: "50%" }}
                width={32}
                height={32}
                alt="sender profile picture"
              ></Image>
            </div>
          </div>

          {/* SENDER AND IINFO */}
          <div className="flex flex-col pl-3 font-normal">
            {/* MSG INFO */}
            <div className="flex w-full flex-col  items-start sm:flex-row sm:items-center sm:gap-2">
              <p>
                {author.name} {author.surname}
              </p>
              <p className="text-[13px] text-[color:var(--text-sub-dark-theme)]">
                {fromatDate(date)}
              </p>
              {important ? <Error></Error> : <></>}
            </div>

            {/* RECIEVERS */}
            <div className="flex w-full">
              <p className="truncate text-[13px] text-[color:var(--text-sub-dark-theme)]">
                {formatRecievers(to)}
              </p>
            </div>
          </div>
        </div>
        {/*CONTENTS */}
        <div className="flex h-full w-full flex-col gap-4 px-2 pb-8 sm:px-8">
          <div className="flex w-full flex-col gap-2">
            {/* ATTACHMENTS */}
            {doc?.img && (
              <>
                <div className="flex gap-[10px]">
                  <div className="email__item_attach_picture">
                    <Image
                      className="email__item_attach_picture"
                      src={doc.img}
                      style={{ borderRadius: "12px" }}
                      width={256}
                      height={190}
                      alt="imgae"
                    ></Image>
                    <div className="email__item_attach_picture_hover">
                      <DownLoad></DownLoad>
                      <p className="font-normal text-[#2C2D2E] hover:underline dark:text-[#D9DADD]">
                        Скачать
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-[13px] font-normal">
                  <p className="mr-4">{formatAttachments(doc)}</p>
                  <Link
                    href={"#"}
                    className="cursor-pointer text-[color:var(--link-blue)]  hover:underline"
                  >
                    Скачать все файлы
                  </Link>
                  <span className="ml-2 text-[color:var(--text-sub-dark-theme)]">
                    {attachmentInfo && attachmentInfo.size}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* TEXT CONTENT */}
          <div className="font-normal">
            <p className="break-all">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailLetterContent;
