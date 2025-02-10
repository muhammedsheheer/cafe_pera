"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Hero from "./(section)/Hero";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Special from "./(section)/(special)/Special";
import Start from "./(section)/Start";
import Reserve from "./(section)/Reserve";
import Reviews from "./(section)/Review";
import Map from "./(section)/Map";
import Cafe from "./(section)/Cafe";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Start />
        <Special />
        <Cafe />
        <Reserve />
        <Reviews />
        <Map />
        <Footer />
      </div>
    </main>
  );
}
