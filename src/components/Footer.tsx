"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#F7F4ED] px-4 pb-6 pt-12 lg:px-24 lg:pt-24">
      <div className="flex flex-col gap-4 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-24">
          <Link
            href={"/"}
            className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
          >
            home
          </Link>
          <Link
            href={"/menu"}
            className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
          >
            menu
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/hero/logo.svg"}
              width={281}
              height={74}
              alt="logo"
              className="h-[40px] w-[140px]"
            />
          </Link>
          <Link
            href={"/about-us"}
            className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
          >
            about
          </Link>
          <Link
            href={"/contact"}
            className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
          >
            contact
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href={""} target="_blank">
            <Icons.instagram className="text-[#317299]" />
          </Link>
          <Link href={""} target="_blank">
            <Icons.unknown className="text-[#317299]" />
          </Link>
          <Link href={""} target="_blank">
            <Icons.google className="text-[#317299]" />
          </Link>
          <Link href={""} target="_blank">
            <Icons.facebook className="text-[#317299]" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            className="text-center font-inter text-sm font-[400] tracking-[0.80px] text-[#240E0D]"
            href={""}
            target="_blank"
          >
            © 2025 Cafe Pera All Rights Reserved | 
            <span className="text-[#CCAD64]">Powered By Foodo</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
