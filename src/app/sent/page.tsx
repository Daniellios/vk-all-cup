import React from "react";

import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/sent/Sent.json?token=${process.env.NEXT_PUBLIC_SUPABASE_KEY}&t=2022-12-19T10%3A27%3A34.823Z`;

const fetchMail = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return [...data];
};

const Sent = async () => {
  const mail = await fetchMail();
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
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
