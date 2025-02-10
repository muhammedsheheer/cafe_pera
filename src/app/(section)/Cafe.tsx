import Image from "next/image";
import React from "react";

const Cafe: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#F7F4ED] lg:h-screen">
      <div className="absolute left-36 top-0 hidden lg:block">
        <h1 className="text-center font-italiana text-[18vw] font-[400] capitalize leading-[110%] text-[#D6DCDF]">
          Cafe Pera{" "}
        </h1>
      </div>
      <div className="absolute left-20 right-20 top-56 hidden lg:block">
        <h1 className="text-center font-italiana text-[18vw] font-[400] capitalize leading-[110%] text-[#317299]">
          Cafe Pera{" "}
        </h1>
      </div>
      <div className="absolute -bottom-8 left-20 right-20 hidden lg:block">
        <h1 className="text-center font-italiana text-[18vw] font-[400] capitalize leading-[110%] text-[#D6DCDF]">
          Cafe Pera{" "}
        </h1>
      </div>
      <div className="absolute left-20 top-8 hidden lg:block">
        <Image
          src="/images/home/cafe/image3.png"
          width={948}
          height={880}
          alt="image"
          className="h-[250px] w-[400px] rounded-lg object-cover lg:rounded-none"
        />
      </div>
      <div className="absolute right-20 top-8 hidden lg:block">
        <Image
          src="/images/home/cafe/image2.png"
          width={948}
          height={880}
          alt="image"
          className="h-[250px] w-[300px] rounded-lg object-cover lg:rounded-none"
        />
      </div>
      <div className="absolute bottom-10 left-[40%] hidden lg:block">
        <Image
          src="/images/home/cafe/image1.png"
          width={948}
          height={880}
          alt="image"
          className="h-[350px] w-[250px] rounded-lg object-cover lg:rounded-none"
        />
      </div>
      <div className="flex flex-col gap-5 px-4 py-8 lg:hidden">
        <h1 className="text-center font-italiana text-6xl font-[400] capitalize leading-[110%] text-[#317299]">
          Cafe Pera{" "}
        </h1>
        <Image
          src="/images/home/cafe/image1.png"
          width={948}
          height={880}
          alt="image"
          className="h-[300px] w-full rounded-lg object-cover lg:rounded-none"
        />
        <Image
          src="/images/home/cafe/image2.png"
          width={948}
          height={880}
          alt="image"
          className="h-[300px] w-full rounded-lg object-cover lg:rounded-none"
        />
        <Image
          src="/images/home/cafe/image3.png"
          width={948}
          height={880}
          alt="image"
          className="h-[300px] w-full rounded-lg object-cover lg:rounded-none"
        />
      </div>
    </section>
  );
};

export default Cafe;
