"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftArrow from "../../svg/LeftArrow";
import MainLogo from "../../svg/MainLogo";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleGoBack = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.back();
  };

  const routePath = pathname?.split("/").length;

  return (
    <header className="flex w-full items-center rounded-t-xl bg-white py-3 px-4 shadow-md shadow-[#00103D]/10 dark:bg-[color:var(--bg-header-dark-theme)]">
      {routePath === 3 ? (
        <Link href={"#"} className="hover:underline" onClick={handleGoBack}>
          <div className="flex h-8 items-center gap-3">
            <LeftArrow></LeftArrow>
            <p className="font-normal">Вернуться</p>
          </div>
        </Link>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
