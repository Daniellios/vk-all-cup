import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

import type { IMailLetter } from "../../componets/Mail/interfaces";
import MailLetter from "../../componets/Mail/MailLetter";
const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/trash/Trash.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL3RyYXNoL1RyYXNoLmpzb24iLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE2MTA1NTgsImV4cCI6MTk4Njk3MDU1OH0._JnZ-9IacPD5yypjiAidLSrMLHGtO0-Pm9pdvm8xchQ&t=2022-12-21T08%3A15%3A54.289Z`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  return { props: { mail } };
};

const Trash = ({ mail }: InferGetStaticPropsType<typeof getStaticProps>) => {
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail &&
          mail.map((letter: IMailLetter, idx: number) => {
            const letterComponent = (
              <MailLetter
                key={"trash" + idx}
                {...letter}
                id={counter}
                path={"trash"}
              ></MailLetter>
            );
            counter++;
            return letterComponent;
          })}
      </div>
    </div>
  );
};

export default Trash;
