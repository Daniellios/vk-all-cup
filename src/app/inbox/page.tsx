import React from "react";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/inbox/Inbox.json?token=${process.env.NEXT_PUBLIC_SUPABASE_KEY}&t=2022-12-19T10%3A27%3A34.823Z`;
const fetchMail = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return [data];
  } catch (err) {
    console.log(err);
  }
};

const InboxPage = async () => {
  const mail = await fetchMail();

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
