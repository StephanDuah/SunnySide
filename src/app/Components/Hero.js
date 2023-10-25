import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative w-full h-[80%] text-center">
      <div className="w-full h-full hidden lg:inline-block">
        <Image
          src={"/images/desktop/hero.jpg"}
          alt="hero"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </div>
      <div className="w-full h-full lg:hidden :inline-block">
        <Image
          src={"/images/mobile/hero.jpg"}
          alt="hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute top-[20%]  w-full  text-center ">
        <h1 className="text-8xl text-white">We Are Creatives</h1>

        <Image
          src="/images/icon-arrow-down.svg"
          alt=""
          width={100}
          height={100}
          className="w-auto h-auto mx-auto mt-[2rem]"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
      </div>
    </section>
  );
};

export default Hero;
