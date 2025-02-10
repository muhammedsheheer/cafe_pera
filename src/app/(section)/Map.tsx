import Link from "next/link";
import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#F7F4ED] py-12 lg:py-20">
      <div className="lg: flex flex-col gap-4 lg:flex-row lg:gap-0">
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8491808491217!2d126.94335037568219!3d37.558616972040646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989adfa13739%3A0xf85d7931420c04cc!2sCafe%20Pera!5e0!3m2!1sen!2sin!4v1739181969008!5m2!1sen!2sin"
            loading="lazy"
            className="h-[50vh] w-full lg:h-full"
          ></iframe>
        </div>
        <div className="w-full px-6 md:px-[40px] lg:w-1/2 lg:px-[100px] 2xl:px-[150px]">
          <div className="flex flex-col gap-14 rounded-t-full bg-[#317299] px-4 py-12 lg:py-24">
            <h3 className="text-center font-italiana text-4xl font-[400] capitalize leading-[110%] text-[#F7F4ED] lg:text-6xl">
              Contact us
            </h3>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="text-center font-inter text-sm font-[500] capitalize leading-[80%] tracking-[0.72px] text-[#000] lg:text-base">
                Booking request
              </span>
              <Link
                href={""}
                className="text-center font-inter text-base font-[400] text-[#fff] lg:text-lg"
              >
                +442037546801
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="text-center font-inter text-sm font-[500] capitalize leading-[80%] tracking-[0.72px] text-[#000] lg:text-base">
                Location{" "}
              </span>
              <Link
                href={""}
                target="_blank"
                className="text-center font-inter text-base font-[400] text-[#fff] lg:text-lg"
              >
                36 Staines Rd, Twickenham TW2 <br /> 5AH, United Kingdom
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4">
              <span className="text-center font-inter text-sm font-[500] capitalize leading-[80%] tracking-[0.72px] text-[#000] lg:text-base">
                Opening Hours{" "}
              </span>
              <span className="text-center font-inter text-base font-[400] text-[#fff] lg:text-lg">
                Sunday- Monday: 7:00 AM – 4:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
