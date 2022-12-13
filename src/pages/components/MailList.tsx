import Link from "next/link";
import React from "react";
import MailLetter from "./MailLetter";

const MailList = () => {
  return (
    <div className="mt-3 mb-3 flex h-fit w-[calc(100%_-_232px)] flex-col overflow-y-visible rounded-lg  md:dark:bg-[#232324] xl:dark:bg-[#2C2C2D] 2xl:dark:bg-[#232324] ">
      <MailLetter></MailLetter>
      <MailLetter></MailLetter>
    </div>
  );
};

export default MailList;
