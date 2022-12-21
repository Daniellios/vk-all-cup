import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";

import type { IMailLetter } from "../components/Mail/interfaces";
import MailLetter from "../components/Mail/MailLetter";

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/sign/mail/important/Important.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWlsL2ltcG9ydGFudC9JbXBvcnRhbnQuanNvbiIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MTYxMDM3NCwiZXhwIjoxOTg2OTcwMzc0fQ.7Bb4Jw2jd0CyPhmq7aSDLdQMAyBZYpaCG30O03Vn_wQ`;

export const getStaticProps: GetStaticProps<{
  mail: IMailLetter[];
}> = async () => {
  const res = await fetch(URL);
  const mail: IMailLetter[] = await res.json();
  return { props: { mail } };
};

const Important = ({
  mail,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let counter = 0;

  return (
    <div className="email__list_wrapper">
      <div className="email__list">
        {mail &&
          mail.map((letter: IMailLetter, idx: number) => {
            const letterComponent = (
              <MailLetter
                key={"important" + idx}
                {...letter}
                id={counter}
                path={"important"}
              ></MailLetter>
            );
            counter++;
            return letterComponent;
          })}
      </div>
    </div>
  );
};

export default Important;
