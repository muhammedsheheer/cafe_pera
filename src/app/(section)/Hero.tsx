import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100vh] w-full">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-center font-italiana text-5xl font-[400] capitalize leading-[110%] text-[#000] lg:text-7xl">
          The Heartwarming <br /> Language of Twickenham <br /> Love
        </h1>

        <Link href={"/menu"}>
          <Button className="flex flex-row gap-2 rounded-full bg-[#317299] px-7 py-7 text-center font-playfair text-sm font-[500] capitalize leading-[80%] tracking-[1px] text-[#fff]">
            View Menu <ArrowRight className="w-4" />
          </Button>
        </Link>
      </div>

      <div className="z-5 absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
    </section>
  );
};

export default Hero;
