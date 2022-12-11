import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full items-center rounded-t-xl bg-white py-3 px-4">
      <Link href={"https://mail.ru/"}>
        <Image
          className="hidden md:block"
          src={"/assets/logo.svg"}
          alt="mail ru logo"
          width={96}
          height={32}
        ></Image>
      </Link>

      <Link href={"https://mail.ru/"}>
        <Image
          className="block md:hidden"
          src={"/assets/logo-no-text.svg"}
          alt="mail ru logo"
          width={32}
          height={32}
        ></Image>
      </Link>
    </div>
  );
};

export default Header;
