import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { createClient } from "@supabase/supabase-js";
import type { IMailLetter } from "../../componets/Mail/interfaces";
import MailLetter from "../../componets/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/sent/Sent.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL3NlbnQvU2VudC5qc29uIiwidHJhbnNmb3JtYXRpb25zIjoiIiwiaWF0IjoxNjcxNjEwNDY3LCJleHAiOjE5ODY5NzA0Njd9.q_ah2hgES7cTRQKHdVnOdaXYVj6ULBwbCqBS1j-Mq50&t=2022-12-21T08%3A14%3A23.452Z`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();

  return { props: { mail } };
};

const Sent = ({ mail }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(mail);

  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail &&
          mail.map((letter: IMailLetter, idx: number) => {
            const letterComponent = (
              <MailLetter
                key={"s" + idx}
                {...letter}
                id={counter}
                path={"sent"}
              ></MailLetter>
            );
            counter++;
            return letterComponent;
          })}
      </div>
    </div>
  );
};

export default Sent;
