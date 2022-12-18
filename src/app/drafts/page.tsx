import React from "react";
import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const fetchMail = async () => {
  const response = await fetch("http://localhost:3000/api/db");
  const data = await response.json();
  const importantMail = data.filter(
    (letter: IMailLetter) => letter.folder === "Черновики"
  );
  return importantMail;
};

const Drafts = async () => {
  const mail = await fetchMail();
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
          const letterComponent = (
            <MailLetter
              key={idx}
              {...letter}
              id={counter}
              path={"drafts"}
            ></MailLetter>
          );
          counter++;
          return letterComponent;
        })}
      </div>
    </div>
  );
};

export default Drafts;
