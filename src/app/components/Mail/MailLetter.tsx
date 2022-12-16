"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import categories from "../../../static/categories";
import Attach from "../../../svg/categories/Attach";
import Finance from "../../../svg/categories/Finance";
import Error from "../../../svg/Error";
import AttachmentBox from "../AttachmentBox";
import CheckBox from "../CheckBox";
import EmailMark from "../EmailMark";
import type { Base64, IMailLetter } from "./interfaces";

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

  const time = new Date(date).getMinutes();

  return (
    <Link
      href={`letter/${id}`}
      className="email__list_link"
      style={{ top: id * height }}
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
          <p className="mr-10 ">{`${author.name} ${author.surname}`}</p>
          <div className="flex h-12 w-12 min-w-[48px] items-center justify-center">
            <EmailMark mark={handleMark} isMarked={bookmark}></EmailMark>
            <div className="flex h-12 w-12 min-w-[48px] items-center justify-center pr-2">
              {important ? <Error></Error> : ""}
            </div>
          </div>

          <div className="flex w-[calc(100%_-_30%)] items-center gap-2">
            <p>{title}</p>
            <div className="w-[calc(100%_-_70%)]">
              <p className="w-full truncate font-normal text-[color:var(--text-sub-dark-theme)] ">
                {text}
              </p>
            </div>
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
            <div className="flex h-full w-14 items-center justify-end">
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
