import React from "react";
import Image from "next/image";
const BottomGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 h-[50%]">
      <div className="w-full h-full relative">
        <Image
          src="/images/desktop/milk.jpg"
          className="object-cover"
          alt="bottom grid"
          fill
        />
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/images/desktop/orange-slice.jpg"
          className="object-cover"
          alt="bottom grid"
          fill
        />
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/images/desktop/iceCream.jpg"
          className="object-cover"
          alt="bottom grid"
          fill
        />
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/images/desktop/sugarCubes.jpg"
          className="object-cover"
          alt="bottom grid"
          fill
        />
      </div>
    </div>
  );
};

export default BottomGrid;
