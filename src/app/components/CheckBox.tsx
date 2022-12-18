"use client";

import React, { FC } from "react";

interface ICheckbox {
  isChecked: boolean;
  select: any;
}

const CheckBox: FC<ICheckbox> = ({ select, isChecked }) => {
  return (
    <div
      className={isChecked ? "checkbox flex " : "checkbox "}
      onClick={select}
    >
      <div
        className={`flex h-4 w-4 items-center justify-center rounded border border-[#4e4e4f] ${
          isChecked ? "border-[color:var(--blue)] bg-[color:var(--blue)]" : ""
        }`}
      >
        {isChecked ? (
          <svg
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.7 0.3C7.3 -0.1 6.7 -0.1 6.3 0.3L3 3.6L1.7 2.3C1.3 1.9 0.7 1.9 0.3 2.3C-0.1 2.7 -0.1 3.3 0.3 3.7L2.3 5.7C2.5 5.9 2.7 6 3 6C3.3 6 3.5 5.9 3.7 5.7L7.7 1.7C8.1 1.3 8.1 0.7 7.7 0.3Z"
              fill="white"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CheckBox;
