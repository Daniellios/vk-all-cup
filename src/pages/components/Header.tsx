import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import LeftArrow from "../../svg/LeftArrow";
import MainLogo from "../../svg/MainLogo";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center rounded-t-xl bg-white py-3 px-4 shadow-md shadow-[#00103D]/10 dark:bg-[color:var(--bg-header-dark-theme)]">
      {router.pathname === "/" ? (
        <>
          <MainLogo></MainLogo>
          <Link href={"https://mail.ru/"}>
            <Image
              className="block md:hidden"
              src={"/assets/logo-no-text.svg"}
              alt="mail ru logo"
              width={32}
              height={32}
            ></Image>
          </Link>
        </>
      ) : (
        <Link href={"/"} className="hover:underline">
          <div className="flex h-10 items-center gap-3">
            <LeftArrow></LeftArrow>
            <p className="font-normal">Вернуться</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
