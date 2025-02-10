import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Start: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#F7F4ED] px-4 py-12 sm:px-[10px] md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[140px]">
      <div className="absolute right-[150px] top-[370px] hidden lg:block">
        <Link href={"/menu"}>
          <Button className="flex flex-row gap-2 rounded-full bg-[#317299] px-7 py-7 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#fff]">
            View Menu <ArrowRight className="w-4" />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-5 lg:gap-8">
        <div>
          <h3 className="text-center font-italiana text-4xl font-[400] capitalize leading-[110%] text-[#040404] lg:text-6xl">
            Start Your Day with Perfect <br /> Coffee, Brunch, and Relaxation at{" "}
            <br /> Cafe Pera
          </h3>
          <div className="flex justify-center pt-6 lg:hidden">
            <Link href={"/menu"}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#317299] px-7 py-7 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#fff]">
                View Menu <ArrowRight className="w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:pt-12">
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
            <div className="relative z-50">
              <div className="absolute -left-12 -top-6 z-30 lg:-left-20">
                <Image
                  src={"/images/home/start/star.svg"}
                  width={143}
                  height={241}
                  alt="image"
                  className="w-12 lg:w-20"
                />
              </div>
              <div className="absolute -left-2 bottom-0 z-0">
                <Image
                  src={"/images/home/start/frame.png"}
                  width={543}
                  height={653}
                  alt="image"
                  className="h-[300px] w-full object-contain lg:h-[500px]"
                />
              </div>
              <Image
                src={"/images/home/start/image1.png"}
                width={543}
                height={653}
                alt="image"
                className="relative z-20 h-[300px] w-full object-contain lg:h-[500px]"
              />
            </div>
            <p className="w-full max-w-[450px] px-4 font-inter text-sm font-[300] leading-[140%] text-[#262626] lg:px-6 lg:text-base">
              Welcome to Cafe Pera, your cozy escape in the heart of Twickenham.
              Renowned for its artisan coffee and freshly prepared dishes, we
              offer a diverse menu perfect for breakfast, brunch, and lunch.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8 lg:pt-32">
            <div className="relative">
              <div className="absolute -bottom-6 -right-2 z-30 lg:-right-20">
                <Image
                  src={"/images/home/start/star.svg"}
                  width={143}
                  height={241}
                  alt="image"
                  className="w-12 lg:w-20"
                />
              </div>
              <div className="absolute left-4">
                <Image
                  src={"/images/home/start/image2.png"}
                  width={543}
                  height={653}
                  alt="image"
                  className="h-[250px] w-full object-contain lg:h-[370px]"
                />
              </div>
              <Image
                src={"/images/home/start/roundf.png"}
                width={543}
                height={653}
                alt="image"
                className="relative h-[250px] w-full object-contain lg:h-[370px]"
              />
            </div>
            <p className="w-full max-w-[450px] px-4 font-inter text-sm font-[300] leading-[140%] text-[#262626] lg:px-6 lg:text-base">
              Whether you’re craving a hearty Full English breakfast, a light
              avocado toast, or a refreshing salad, our carefully crafted
              options are designed to satisfy every palate.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/start/image3.png"}
              width={543}
              height={653}
              alt="image"
              className="relative h-[250px] w-full object-contain lg:h-[300px]"
            />
            <span className="font-italiana text-lg font-[400] capitalize tracking-[1.50px] text-[#000] lg:text-xl">
              Breakfast
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/start/image4.png"}
              width={543}
              height={653}
              alt="image"
              className="relative h-[250px] w-full object-contain lg:h-[300px]"
            />
            <span className="font-italiana text-lg font-[400] capitalize tracking-[1.50px] text-[#000] lg:text-xl">
              Brunch
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/start/image5.png"}
              width={543}
              height={653}
              alt="image"
              className="relative h-[250px] w-full object-contain lg:h-[300px]"
            />
            <span className="font-italiana text-lg font-[400] capitalize tracking-[1.50px] text-[#000] lg:text-xl">
              Lunch
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/images/home/start/image6.png"}
              width={543}
              height={653}
              alt="image"
              className="relative h-[250px] w-full object-contain lg:h-[300px]"
            />
            <span className="font-italiana text-lg font-[400] capitalize tracking-[1.50px] text-[#000] lg:text-xl">
              Coffee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
