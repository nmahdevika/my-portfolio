import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-fulll border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36">
          <Image src={"/images/logo.svg"} width={128} height={38} alt="Logo" />
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileNav />
          <Button asChild className="rounded-full" size={"lg"}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
