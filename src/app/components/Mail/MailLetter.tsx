"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import categories from "../../../static/categories";
import Error from "../../../svg/Error";
import AttachmentBox from "../AttachmentBox";
import CheckBox from "../CheckBox";
import EmailMark from "../EmailMark";
import type { IMailLetter } from "./interfaces";

const MailLetter: FC<IMailLetter> = ({
  id,
  author,
  height = 49,
  bookmark,
  date,
  doc,
  folder,
  flag,
  important,
  read,
  text,
  title,
  to,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isMarked, setIsMarked] = useState<boolean>(bookmark);

  const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  const handleMark = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsMarked(!isMarked);
  };

  const fromatDate = (dateString: string) => {
    const today = new Date();

    const time = new Date(dateString);
    if (today.getDate() === time.getDate()) {
      const min = time.getMinutes();
      const hours = time.getHours();
      return `${hours}: ${min}`;
    } else {
      return `${time.getDate()} ${time.getMonth()}`;
    }
  };

  return (
    <Link
      href={`letter/${id}`}
      className="email__list_link"
      style={{ top: id * height }}
    >
      <div className="email__list_item">
        {/* STATUS */}
        <div className="mr-1 flex h-12 w-7 min-w-[28px] items-center justify-center">
          <div
            className={`email__read_status ${read ? "bg-transparent" : ""}`}
          ></div>
        </div>

        {/* SENDER */}
        <div className="flex items-center space-x-3">
          <div className="relative z-10 flex h-12 w-8 min-w-[32px] items-center">
            {isSelected ? (
              <></>
            ) : (
              <>
                {author.avatar && (
                  <Image
                    className="email__item_picture"
                    style={{ borderRadius: "50%" }}
                    src={author.avatar}
                    width={32}
                    height={32}
                    alt="sender profile picture"
                  ></Image>
                )}
              </>
            )}
            <CheckBox select={handleSelect} isChecked={isSelected} />
          </div>
        </div>

        {/* MAIL CONTENT */}
        <div className="mail__letter_preview">
          <div className="flex w-[22%] min-w-[22%] items-center pr-2">
            <p>{`${author.name} ${author.surname}`}</p>
          </div>

          <div className="flex w-8 min-w-[32px] items-center pr-2">
            {bookmark ? (
              <EmailMark mark={handleMark} isMarked={isMarked}></EmailMark>
            ) : (
              <div className="email__list_item_important">
                {important ? <Error></Error> : ""}
              </div>
            )}
          </div>

          <div className="flex h-[48px] flex-1 items-center truncate pr-2">
            <p className="whitespace-nowrap">{title}</p>

            <p className="ml-3 whitespace-nowrap font-normal text-[color:var(--text-sub-dark-theme)] ">
              {text}
            </p>
          </div>

          {/* EMAIL SHORT INFO  */}
          <div className="flex h-full w-auto items-center justify-end self-end">
            <div className="flex h-full items-center">
              {categories.map((categoty, idx: number) => {
                if (flag && categoty.title === flag) {
                  if (doc) {
                    return (
                      <>
                        <AttachmentBox doc={doc}></AttachmentBox>
                        <div className="email__list_item_icon" key={idx}>
                          <categoty.icon></categoty.icon>
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <div className="email__list_item_icon" key={idx}>
                        <categoty.icon></categoty.icon>
                      </div>
                    );
                  }
                }
              })}
            </div>
            <div className="h-full w-[44px] min-w-[44px] items-center text-right">
              <p className="font-normal text-[color:var(--text-sub-dark-theme)] ">
                {fromatDate(date)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MailLetter;
