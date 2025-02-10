"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./SideBar";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={`${position} ${
        pathname === "/"
          ? "top-5 z-50 h-[10vh] w-full bg-transparent px-4 pt-0 md:px-[50px] lg:px-[80px] lg:pt-6 2xl:px-[180px]"
          : "top-0 z-50 h-[10vh] w-full bg-[#F7F4ED] px-4 pt-0 md:px-[50px] lg:h-[15vh] lg:px-[80px] lg:pt-6 2xl:px-[180px]"
      }`}
    >
      <div className="hidden lg:block">
        <div className="flex flex-row items-start justify-end">
          <div className="flex flex-row items-center justify-center gap-28">
            <Link
              href={"/"}
              className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
            >
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
            >
              About
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
              href={"/menu"}
              className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
            >
              Menu
            </Link>
            <Link
              href={"/contact"}
              className="text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] lg:text-base"
            >
              Contact
            </Link>
            <Link href={"/table-booking"}>
              <Button className="flex flex-row gap-2 rounded-full bg-transparent px-6 py-7 text-center font-playfair text-sm font-[400] capitalize leading-[80%] tracking-[1px] text-[#000] ring-1 ring-[#000]">
                Book Table <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="block py-4 lg:hidden">
        <div className="flex flex-row items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/images/hero/logo.svg"}
              width={281}
              height={74}
              alt="logo"
              className="h-[40px] w-[100px]"
            />
          </Link>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <EqualizerIcon />
              </Button>
            </Sidebar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
