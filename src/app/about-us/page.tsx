import BavetteStory from "@/app/about-us/(section)/BavetteStory";
import Hero from "@/app/about-us/(section)/Hero";
import JoinUs from "@/app/about-us/(section)/JoinUs";
import Review from "@/app/about-us/(section)/Review";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="items-cente flex h-full w-full flex-col justify-center overflow-hidden bg-[#317299]">
        <Navbar position="absolute" />
        <Hero />
        <BavetteStory />
        <JoinUs />
        <Review />
        <Footer />
      </div>
    </main>
  );
};

export default page;

// Images:
// public/images/about-us
