"use client"
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { Menu, Search } from "react-feather";
import { useState } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <div
          id="nav-bar"
          className="flex justify-between h-18 w-11/12 border-solid border-gray-400 border items-center mt-4 rounded-full px-10"
        >
          <Link href={"/"} id="logo-nav-bar" className="md:flex-4">
            <Image src={logo} alt="logo" className="w-14 h-14" />
          </Link>
          <div className="hidden md:flex items-center justify-between gap-10 flex-6">
            <ul className="flex gap-10 2xl:gap-15">
              <Link href={"/"} className="text-gray-500 font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-600">Home</Link>
              <Link href={"/Recipes"} className="text-gray-500 font-sans text-base font-semibold cursor-pointer hover:underline hover:text-gray-600">Recipe</Link>
            </ul>
            <div className="flex items-center gap-8">
              <button className=" p-2 bg-gray-200 rounded-full hover:bg-gray-300 hover:opacity-85"><Search /></button>
              <button className="text-white bg-black rounded-3xl px-5 py-2 hover:opacity-80" >SUBSCRIBE</button>
            </div>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
            <Menu />
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center justify-center gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/Recipes"}>Recipe</Link>
            <button>SUBSCRIBE</button>
          </div>
        )}
      </div>
    </div>
  );
}
export default NavBar;
