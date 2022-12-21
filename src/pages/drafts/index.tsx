import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/drafts/Drafts.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2RyYWZ0cy9EcmFmdHMuanNvbiIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MTYxMDMyNywiZXhwIjoxOTg2OTcwMzI3fQ.-BXbT3pPgGA1GVWidqTZsa96v9Wit8Kd6Z4Yf3Sw-qA&t=2022-12-21T08%3A12%3A03.331Z`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  return { props: { mail } };
};

const Drafts = ({ mail }: InferGetStaticPropsType<typeof getStaticProps>) => {
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail &&
          mail.map((letter: IMailLetter, idx: number) => {
            const letterComponent = (
              <MailLetter
                key={`drafts${idx}`}
                {...letter}
                id={counter}
                path={"drafts"}
              ></MailLetter>
            );
            counter++;
            return letterComponent;
          })}
      </div>
    </div>
  );
};

export default Drafts;
