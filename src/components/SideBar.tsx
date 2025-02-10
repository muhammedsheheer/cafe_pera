import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-4xl font-normal text-[#317299]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-start p-0 font-playfair text-4xl font-normal text-[#317299]"
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="flex w-full justify-start p-0 font-playfair text-4xl font-normal text-[#317299]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-start p-0 font-playfair text-4xl font-normal text-[#317299]"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-start p-0 font-playfair text-4xl font-normal text-[#317299]"
            >
              Table Booking
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
