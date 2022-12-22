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
const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/trash/Trash.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL3RyYXNoL1RyYXNoLmpzb24iLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE2MTA1NTgsImV4cCI6MTk4Njk3MDU1OH0._JnZ-9IacPD5yypjiAidLSrMLHGtO0-Pm9pdvm8xchQ&t=2022-12-21T08%3A15%3A54.289Z`;

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
