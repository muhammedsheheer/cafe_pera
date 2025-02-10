import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 bg-[#317299] lg:flex-row lg:gap-0">
        <div className="h-full w-full overflow-hidden p-4 lg:w-1/2 lg:p-0">
          <Image
            src="/images/home/booking/dining.png"
            width={948}
            height={880}
            alt="private dining"
            className="h-auto w-full rounded-lg lg:rounded-none"
          />
        </div>
        <div className="flex h-full w-full flex-col items-center gap-6 p-6 md:items-start lg:w-1/2 lg:p-0 lg:pl-20">
          <h1 className="text-center font-italiana text-4xl capitalize text-[#F7F4ED] sm:text-6xl lg:text-start">
            Reserve Your <br />
            Table at Cafe Pera
          </h1>
          <p className="max-w-[450px] text-center font-inter text-sm font-[300] leading-[140%] text-[#F7F4ED] md:text-start lg:text-base">
            Experience the charm of Twickenham hospitality. Visit Cafe Pera for
            a memorable outing filled with delicious meals and a cozy ambiance.
          </p>
          <Link href={"/menu"}>
            <Button className="flex flex-row gap-2 rounded-full bg-[#F7F4ED] px-7 py-7 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#000]">
              View Menu <ArrowRight className="w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
