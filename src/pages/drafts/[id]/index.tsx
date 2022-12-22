import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownLoad from "../../../svg/DownLoad";
import Error from "../../../svg/Error";

import type { IMailLetter, IParams } from "../../../componets/Mail/interfaces";
import fromatDate from "../../../utils/formatDate";
import formatConverter from "../../../utils/formatConverter";
import formatRecievers from "../../../utils/formatRecievers";
import formatAttachments from "../../../utils/formatAttachments";
import type { GetStaticProps } from "next";
import MailLetterContent from "../../../componets/Mail/MailLetterContent";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/drafts/Drafts.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2RyYWZ0cy9EcmFmdHMuanNvbiIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MTYxMDMyNywiZXhwIjoxOTg2OTcwMzI3fQ.-BXbT3pPgGA1GVWidqTZsa96v9Wit8Kd6Z4Yf3Sw-qA&t=2022-12-21T08%3A12%3A03.331Z`;

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
  return <MailLetterContent letterContent={singleLetter}></MailLetterContent>;
};

export default Letter;
