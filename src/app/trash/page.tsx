import React from "react";

import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const fetchMail = async () => {
  const response = await fetch("http://localhost:3000/api/db");
  const data = await response.json();
  const importantMail = data.filter(
    (letter: IMailLetter) => letter.folder === "Корзина"
  );
  return importantMail;
};
const Trash = async () => {
  const mail = await fetchMail();
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
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
