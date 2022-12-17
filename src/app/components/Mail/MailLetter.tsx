"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import categories from "../../../static/categories";
import Error from "../../../svg/Error";
import fromatDate from "../../../utils/formatDate";
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

  return (
    <Link
      href={`home/${id}`}
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
        <div className="mail__letter_preview_wrap">
          <div className="mail__letter_preview_content">
            <div className="flex w-[22%] min-w-[22%] items-center pr-2">
              <p>{`${author.name} ${author.surname}`}</p>
            </div>

            <div className="flex w-8 min-w-[32px] items-center pr-2">
              {isMarked ? (
                <></>
              ) : (
                <div className="email__list_item_important">
                  {important ? <Error></Error> : ""}
                </div>
              )}
              <EmailMark mark={handleMark} isMarked={isMarked}></EmailMark>
            </div>

            <div className="flex h-[48px] flex-1 items-center truncate pr-2">
              <p className="min-w-[140px] truncate md:min-w-fit">{title}</p>
              <p className="ml-3 truncate pr-4 font-normal text-[color:var(--text-sub-dark-theme)]">
                {text}
              </p>
            </div>

            {/* EMAIL SHORT INFO  */}
            <div className="flex h-full min-w-[24px] flex-shrink-0 items-center pr-2">
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

            <div className="flex h-full w-[44px] min-w-[44px] items-center justify-end whitespace-nowrap ">
              <p className="text-right text-[13px] font-normal text-[color:var(--text-sub-dark-theme)] ">
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
