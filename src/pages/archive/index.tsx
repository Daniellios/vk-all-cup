import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  return { props: { mail } };
};
const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/archive/Archive.json?token=${process.env.NEXT_PUBLIC_SUPABASE_KEY}&t=2022-12-19T10%3A27%3A34.823Z`;

const Archive = ({ mail }: InferGetStaticPropsType<typeof getStaticProps>) => {
  let counter = 0;
  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
          const letterComponent = (
            <MailLetter
              key={`archive${idx}`}
              {...letter}
              id={counter}
              path={`archive`}
            ></MailLetter>
          );
          counter++;
          return letterComponent;
        })}
      </div>
    </div>
  );
};

export default Archive;
