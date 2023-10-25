import Image from "next/image";
import React from "react";

const GridSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="h-[400px] md:h-[500px] lg:[600px] xl-[800px]  md:order-first p-[5rem]">
        <h1 className="text-4xl font-bold my-3 font-barlow">
          Transform your brand
        </h1>
        <p className="leading-[1.8rem] text-gray-700 font-franuces">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients throung compelling visuals that do most
          of the marketing for you
        </p>

        <div className="mt-11 text-lg w-[33%] font-bold cursor-pointer hover:border-b-4 hover:border-eggYellow">
          Learn more
        </div>
      </div>
      <div className=" h-[400px] md:h-[500px] lg:[600px] xl-[800px] order-first">
        <div className="inline-block relative h-full w-full md:hidden ">
          <Image
            fill
            className="object-cover"
            src="/images/mobile/egg.jpg"
            alt="egg"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </div>
        <div className="md:inline-block relative h-full w-full hidden ">
          <Image
            fill
            className="object-cover"
            src="/images/desktop/egg.jpg"
            alt="egg"
            sizes="(min-width: 808px) 50vw, 100vw"
            quality={100}
          />
        </div>
      </div>
      <div className=" h-[400px] md:h-[500px] lg:[600px] xl-[800px] ">
        <div className="inline-block relative h-full w-full md:hidden ">
          <Image
            fill
            className="object-cover"
            src="/images/mobile/pop.jpg"
            alt="egg"
            sizes="(min-width: 808px) 50vw, 100vw"
          />
        </div>
        <div className="md:inline-block relative h-full w-full hidden ">
          <Image
            fill
            className="object-cover"
            src="/images/desktop/pop.jpg"
            alt="egg"
            sizes="(min-width: 808px) 50vw, 100vw"
            quality={100}
          />
        </div>
      </div>
      <div className="h-[400px] md:h-[500px] lg:[600px] xl-[800px] p-[5rem]">
        <h1 className="text-4xl font-bold my-3 font-barlow">
          Stand out to the right audience
        </h1>

        <p className="leading-[1.8rem] text-gray-700">
          Using a collaborative formula of designer, researchers, photographers,
          videographers and copywriters, we'll build and extend your brand in
          digital places.
        </p>

        <div className="mt-11 w-[33%] text-lg font-bold cursor-pointer hover:border-b-4 hover:border-softRed">
          Learn more
        </div>
      </div>

      <div className="relative h-[400px] md:h-[500px] lg:[600px] xl-[800px] ">
        <Image
          fill
          quality={100}
          className="object-cover object-top"
          src="/images/desktop/cherries.jpg"
          alt="egg"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
        <div className=" container absolute bottom-4 flex flex-col text-photoText items-center text-center p-11 px-[7rem]">
          <h1 className="font-semibold text-2xl mb-5 font-barlow">
            Graphic Design
          </h1>
          <p className=" font-franuces">
            Freat design makes you memorable. We deliver artwork that
            undersocres your brand message and captures pontential client;s
            attention.
          </p>
        </div>
      </div>
      <div className="relative h-[400px] md:h-[500px] lg:[600px] xl-[800px] ">
        <Image
          fill
          quality={100}
          className="object-cover object-top"
          src="/images/desktop/orange.jpg"
          alt="egg"
          sizes="(min-width: 808px) 50vw, 100vw"
        />
        <div className=" container absolute bottom-4 flex flex-col text-photoText items-center text-center p-11 px-[7rem]">
          <h1 className="font-semibold text-2xl mb-5">Photography</h1>
          <p className=" ">
            Increase your credibility by getting the most stunning, high-quality
            photos that imporver your business image
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
