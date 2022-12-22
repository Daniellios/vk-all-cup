import type { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import type { IMailLetter, IParams } from "../../../componets/Mail/interfaces";
import type { GetStaticProps } from "next";
import MailLetterContent from "../../../componets/Mail/MailLetterContent";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/inbox/Inbox.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2luYm94L0luYm94Lmpzb24iLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE2MDcwNDEsImV4cCI6MTk4Njk2NzA0MX0.OMexFDb-OKplbiFq1oOTUlJqs0OOyLUIXRIOnnrPMXw&t=2022-12-21T07%3A17%3A17.168Z`;

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
