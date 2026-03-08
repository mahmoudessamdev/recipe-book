import React from "react";
import BFIcon from "./home-icons/egg-and-bacon.png";
import LIcon from "./home-icons/soup.png";
import DRIcon from "./home-icons/burger.png";
import DTIcon from "./home-icons/ice-cream.png";
import QBIcon from "./home-icons/granola.png";
import Image from "next/image";

function ExploreSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-cyan-bg rounded-3xl w-11/12 flex flex-col md:flex-row justify-between items-center px-5 py-6  gap-10 md:gap-15 ">
        <div className="flex flex-col flex-6 xl:flex-4">
          <div className="">
            <span className="bg-red-400 py-1 px-3 rounded-full text-white text-sm">
              EXPLORE
            </span>
            <p className="mt-5 text-5xl font-bold">OUR DIVERSE</p>
            <p className="text-5xl font-bold mb-5">PALETTE</p>
            <p className="text-gray-500 text-lg ">
              If you are a breakfast enthusiast, a connoisseur of savory
              delights, or on the lookout for irresistible desserts, our curated
              selection has something to satisfy every palate.
            </p>
          </div>
          <button className="py-3 px-5 text-black text-xl font-bold border-solid rounded-full bg-transparent border border-black">
            SEE MORE
          </button>
        </div>
        <div className="flex-6 xl:flex-8 w-full h-full grid grid-row-5 gap-3">
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-[#00000020] px-1 rounded-xl">
            <Image src={BFIcon} alt="egg" className="" width={40} height={40} />
            <span className="font-bold">BREAKFAST</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-[#00000020] px-1 rounded-xl">
            <Image src={LIcon} alt="soup" className="" width={40} height={40} />
            <span className="font-bold">LUNCH</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-[#00000020] px-1 rounded-xl">
            <Image
              src={DRIcon}
              alt="hamburger"
              className=""
              width={40}
              height={40}
            />
            <span className="font-bold">DINNER</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-[#00000020] px-1 rounded-xl">
            <Image
              src={DTIcon}
              alt="iceCream"
              className=""
              width={40}
              height={40}
            />
            <span className="font-bold">DESSERT</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-400 cursor-pointer hover:bg-[#00000020] px-1 rounded-xl">
            <Image
              src={QBIcon}
              alt="snack"
              className=""
              width={40}
              height={40}
            />
            <span className="font-bold">QUICK BITE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
