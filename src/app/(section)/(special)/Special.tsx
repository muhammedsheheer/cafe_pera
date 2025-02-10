"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#317299] py-12">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full flex-col gap-4 py-12">
        <div className="relative flex flex-col items-center gap-6 px-4 lg:flex-row lg:justify-between lg:px-[80px] 2xl:px-[140px]">
          <div>
            <h3 className="font-italiana text-4xl font-[400] capitalize text-[#F7F4ED] lg:text-6xl lg:leading-[110px]">
              Cafe Pera Specials{" "}
            </h3>
          </div>
          <div>
            <Link href={"/menu"}>
              <Button className="flex flex-row gap-2 rounded-full bg-transparent px-7 py-7 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#fff] ring-1 ring-[#fff]">
                View Menu <ArrowRight className="w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
