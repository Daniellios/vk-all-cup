import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownLoad from "../../../svg/DownLoad";
import Error from "../../../svg/Error";
import type { IMailLetter, IParams } from "../../components/Mail/interfaces";
import fromatDate from "../../../utils/formatDate";
import formatConverter from "../../../utils/formatConverter";
import formatRecievers from "../../../utils/formatRecievers";
import formatAttachments from "../../../utils/formatAttachments";
import type { GetStaticProps } from "next";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/archive/Archive.json?token=${process.env.NEXT_PUBLIC_SUPABASE_KEY}&t=2022-12-19T10%3A27%3A34.823Z`;

export async function getStaticPaths() {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  const paths = mail.map((letter: IMailLetter, idx: number) => ({
    params: { id: `${idx}` },
  }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(URL);
  const { id } = params as IParams;
  if (id) {
    const mail: IMailLetter[] = await res.json();
    const index = +id;
    const singleLetter = mail[index];
    return { props: { singleLetter } };
  } else {
    return { props: { error: true } };
  }
};

const Letter = ({ singleLetter }: Params) => {
  const letter: IMailLetter = singleLetter;
  const { author, read, text, title, doc, date, important, to } = letter;

  const attachmentInfo = formatConverter(doc?.img);

  return (
    <div className="mt-3 mb-3 flex h-fit w-[calc(100%_-_232px)] overflow-y-visible rounded-lg dark:bg-[#232324]">
      <div className="flex h-full w-full flex-col pt-4 pl-2 pr-3">
        {/* SUBJECT */}
        <div className="flex h-[60px] w-full pl-7">
          <h1 className="inline-block w-full text-xl">{title}</h1>
        </div>

        {/* SENDER */}
        <div className="mb-3 flex w-full">
          <div className="mr-1 flex h-[42px] w-7 min-w-[28px] items-center justify-center">
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

          {/* SENDER AND IINFO */}
          <div className="flex flex-col pl-3 font-normal">
            {/* MSG INFO */}
            <div className="flex w-full items-center gap-2">
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
              <p className="text-[13px]  text-[color:var(--text-sub-dark-theme)]">
                {formatRecievers(to)}
              </p>
            </div>
          </div>
        </div>
        {/*CONTENTS */}
        <div className="flex h-full w-full flex-col gap-4 px-8 pb-8">
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

export default Letter;
