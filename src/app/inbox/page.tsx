import React from "react";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const fetchMail = async () => {
  const response = await fetch("http://localhost:3000/api/db");
  const data = await response.json();
  const filteredData = data.filter((letter: IMailLetter) => !letter.folder);
  return filteredData;
};

const InboxPage = async () => {
  const mail = await fetchMail();

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
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
