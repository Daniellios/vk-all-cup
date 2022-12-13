import React, { FC } from "react";

interface IEmailMark {
  isMarked: boolean;
  mark: any;
}

const EmailMark: FC<IEmailMark> = ({ isMarked, mark }) => {
  return (
    <div
      className={
        isMarked
          ? "email__list_item_mark opacity-100 "
          : "email__list_item_mark "
      }
      onClick={mark}
    >
      <svg
        width="10"
        height="14"
        viewBox="0 0 10 14"
        className={isMarked ? "fill-[color:var(--red)]" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 8C5.57673 8 6.12538 8.24896 6.50515 8.68299L8 10.3914V2H2V10.3914L3.49485 8.68299C3.87462 8.24896 4.42327 8 5 8ZM8.19169 13.6476C8.38762 13.8716 8.67067 14 8.9682 14C9.53805 14 10 13.538 10 12.9682V2C10 0.895431 9.10457 0 8 0H2C0.895431 0 0 0.89543 0 2V12.9682C0 13.538 0.461953 14 1.0318 14C1.32933 14 1.61238 13.8716 1.80831 13.6476L5 10L8.19169 13.6476Z"
          fill="red"
          className={isMarked ? "fill-[color:var(--red)]" : "fill-[#9C9DA2]"}
        />
      </svg>
    </div>
  );
};

export default EmailMark;
