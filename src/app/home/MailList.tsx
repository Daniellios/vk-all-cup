import React from "react";
import { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";
import fsPromises from "fs/promises";
import path from "path";

const fetchMail = async () => {
  const filePath = path.join(process.cwd(), "db.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return objectData;
};

const MailList = async () => {
  const mail = await fetchMail();
  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail.map((letter: IMailLetter, idx: number) => {
          return <MailLetter key={idx} {...letter} id={idx}></MailLetter>;
        })}
      </div>
    </div>
  );
};

export default MailList;
