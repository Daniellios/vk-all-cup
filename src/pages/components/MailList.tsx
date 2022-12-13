import Link from "next/link";
import React from "react";
import MailLetter from "./MailLetter";

const MailList = () => {
  return (
    <div className="email__list">
      <MailLetter id={"1"} key={1} height={0}></MailLetter>
      <MailLetter id={"2"} key={2} height={49} isImportant={true}></MailLetter>
    </div>
  );
};

export default MailList;
