import Image from "next/image";
import memoji from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent,black_40%,black_70%)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memoji}
            alt="A person working on a computer"
            className="size-[100px]"
          />
          <div className="inline-flex bg-gray-900 border border-gray-800 px-4 py-1.5 rounded-lg items-center gap-4">
            <div className="size-2.5 rounded-full bg-green-500"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm a Software Engineer specializing in building exceptional user
            experiences. Currently, solving a tabbo in Indian societies.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4 " />
          </button>
          <button className="inline-flex items-center gap-2 border border-white text-gray-900 bg-white px-6 h-12 rounded-xl ">
            <span>👋🏻</span>
            <span className="font-semibold ">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
