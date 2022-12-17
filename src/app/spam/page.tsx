import React from "react";

import path from "path";
import fsPromises from "fs/promises";

import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const fetchMail = async () => {
  const filePath = path.join(process.cwd(), "db.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  console.log(objectData);

  const importantMail = objectData.filter(
    (letter: IMailLetter) => letter.folder === "Спам"
  );
  return importantMail;
};

const Spam = async () => {
  const mail = await fetchMail();
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
          const letterComponent = (
            <MailLetter key={idx} {...letter} id={counter}></MailLetter>
          );
          counter++;
          return letterComponent;
        })}
      </div>
    </div>
  );
};

export default Spam;
