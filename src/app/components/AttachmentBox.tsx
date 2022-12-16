"use client";

import Image from "next/image";
import React, { FC } from "react";
import Attach from "../../svg/categories/Attach";
import formatConverter from "../../utils/formatConverter";
import { IDoc } from "./Mail/interfaces";

interface IAttachments {
  doc: IDoc;
}

const AttachmentBox: FC<IAttachments> = ({ doc }) => {
  const decoded = formatConverter(doc.img);

  return (
    <div className="email__list_item_icon attachment">
      <Attach></Attach>
      <div className="attachment__box">
        <div className="attachment__item">
          <Image src={doc.img} alt="attachment" width={32} height={32}></Image>
          <p>
            {decoded && `image ${decoded?.type}`} {decoded && decoded.size}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttachmentBox;
