import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="fixed flex justify-between items-center text-white  w-full p-4 left-0 top-0 bg-transparent z-10 ">
      <div className="font-bold">sunnyside</div>
      <ul className="flex justify-around gap-4 items-center">
        <li>
          <div>About</div>
        </li>
        <li>
          <div>Service</div>
        </li>
        <li>
          <div>Projects</div>
        </li>
        <li>
          <div className="px-4 py-2 bg-white text-black rounded-full">
            Contact
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
