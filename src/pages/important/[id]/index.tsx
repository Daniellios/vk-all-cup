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

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/important/Important.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2ltcG9ydGFudC9JbXBvcnRhbnQuanNvbiIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MTYxMDM3NCwiZXhwIjoxOTg2OTcwMzc0fQ.7Bb4Jw2jd0CyPhmq7aSDLdQMAyBZYpaCG30O03Vn_wQ`;

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
