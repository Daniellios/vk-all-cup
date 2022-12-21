import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/inbox/Inbox.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2luYm94L0luYm94Lmpzb24iLCJ0cmFuc2Zvcm1hdGlvbnMiOiIiLCJpYXQiOjE2NzE2MDcwNDEsImV4cCI6MTk4Njk2NzA0MX0.OMexFDb-OKplbiFq1oOTUlJqs0OOyLUIXRIOnnrPMXw&t=2022-12-21T07%3A17%3A17.168Z`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  return { props: { mail } };
};

const InboxPage = ({
  mail,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail &&
          mail.map((letter: IMailLetter, idx: number) => {
            return (
              <MailLetter
                key={"h" + idx}
                {...letter}
                id={idx}
                path={"inbox"}
              ></MailLetter>
            );
          })}
      </div>
    </div>
  );
};

export default InboxPage;
