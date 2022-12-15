import React from "react";
import MailLetter from "./MailLetter";

const MailList = () => {
  const fetchMail = async () => {
    const response = await fetch("/api/data");
    const mail = await response.json();
    console.log(mail);
  };

  // fetchMail();

  return (
    <div className="email__list">
      <MailLetter id={"1"} key={1} height={0}></MailLetter>
      <MailLetter id={"2"} key={2} height={49} important={true}></MailLetter>
    </div>
  );
};

export default MailList;
