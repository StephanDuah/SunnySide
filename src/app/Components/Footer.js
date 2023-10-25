import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-footerBg p-11 text-footerText">
      <div className="">
        <h1 className="font-bold text-xl">sunnyside</h1>
      </div>
      <div className="flex gap-6 my-2">
        <h4>About</h4>
        <h4>Service</h4>
        <h4>Projects</h4>
      </div>
      <div className="flex gap-4 font-bold mt-[2.5rem]">
        <Image
          width={20}
          height={20}
          src="/images/icon-facebook.svg"
          alt="facebook"
        />
        <Image
          width={20}
          height={20}
          src="/images/icon-instagram.svg"
          alt="facebook"
        />
        <Image
          width={20}
          height={20}
          src="/images/icon-twitter.svg"
          alt="facebook"
        />
        <Image
          width={20}
          height={20}
          src="/images/icon-pinterest.svg"
          alt="facebook"
        />
      </div>
    </div>
  );
};

export default Footer;
