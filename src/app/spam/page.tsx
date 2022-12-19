import React from "react";

import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const fetchMail = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/spam/Spam.json?token=${process.env.NEXT_PUBLIC_SUPABASE_KEY}&t=2022-12-19T10%3A27%3A34.823Z`
  );
  const data = await response.json();
  return data;
};
const Spam = async () => {
  const mail = await fetchMail();
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
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
