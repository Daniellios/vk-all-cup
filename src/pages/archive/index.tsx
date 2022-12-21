import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/archive/Archive.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2FyY2hpdmUvQXJjaGl2ZS5qc29uIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNjEwMjQxLCJleHAiOjE5ODY5NzAyNDF9.7ByZ6RUlmUOnqXu5-1nzkFuKDdlnul-H2whBzMwDQ8M&t=2022-12-21T08%3A10%3A37.567Z`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();

  return { props: { mail } };
};

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
