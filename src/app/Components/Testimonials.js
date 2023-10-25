import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="p-[2em]">
      <h1 className="text-center text-2xl text-gray-400 my-[2em]">
        Client&aposs Testimonials
      </h1>
      <div className="flex p-11 flex-col md:flex-row items-center justify-center gap-8">
        {" "}
        <div className="text-center flex flex-col items-center">
          <div className="relative h-[100px] w-[100px] rounded-full">
            <Image
              src={"/images/image-emily.jpg"}
              alt="client1"
              fill
              className="rounded-full"
            />
          </div>
          <p className="paragraph">
            We put trust in Sunnyside and they delivered, making sure our needs
            were met and deadlines were alwauys hit.
          </p>
          <div className="my-[4rem]">
            <h1 className="font-bold text-lg ">Emily R.</h1>
            <p className="text-sm text-gray-500">Marketing Director</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="relative h-[100px] w-[100px] rounded-full">
            <Image
              src={"/images/image-thomas.jpg"}
              alt="client1"
              fill
              className="rounded-full"
            />
          </div>
          <p className="paragraph">
            Sunnyside&aposs enthusiasm coupled with their keen interest in our
            brand&aposs success made it a staisfying and enjoyable experience.
          </p>
          <div className="my-[4rem]">
            <h1 className="font-bold text-lg ">Thomas S.</h1>
            <p className="text-sm text-gray-500">Chief Operating Officer</p>
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="relative h-[100px] w-[100px] rounded-full">
            <Image
              src={"/images/image-jennie.jpg"}
              alt="client1"
              fill
              className="rounded-full"
            />
          </div>
          <p className="paragraph">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnside. Highly recommended!
          </p>
          <div className="my-[4rem]">
            <h1 className="font-bold text-lg ">Jennie F.</h1>
            <p className="text-sm text-gray-500">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
