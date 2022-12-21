import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";
const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/spam/Spam.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL3NwYW0vU3BhbS5qc29uIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNjEwNTI2LCJleHAiOjE5ODY5NzA1MjZ9.djc_B40UYDB6N0b-WFwqmaoHP-Yx7e2tXECYtWu7C3M`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  return { props: { mail } };
};

const Spam = ({ mail }: InferGetStaticPropsType<typeof getStaticProps>) => {
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail &&
          mail.map((letter: IMailLetter, idx: number) => {
            const letterComponent = (
              <MailLetter
                key={"spam" + idx}
                {...letter}
                id={counter}
                path={"spam"}
              ></MailLetter>
            );
            counter++;
            return letterComponent;
          })}
      </div>
    </div>
  );
};

export default Spam;
