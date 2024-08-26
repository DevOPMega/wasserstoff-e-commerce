"use client"

import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-black">
      <nav className="m-auto w-11/12 py-3 bg-black text-white flex justify-between items-center md:w-3/4">
        <Link href="/">
          <h1 className="text-2xl font-semibold md:text-3xl">Wasserstoff</h1>
        </Link>
        <div className="flex ">
          {/* Hamburger  */}
          <div 
          onClick={() => setToggle(!toggle)}
          className="flex flex-col space-y-1 p-1 border-2 opacity-85 border-white rounded-md md:hidden cursor-pointer">
            <span className="w-4 h-[2px] bg-white"></span>
            <span className="w-4 h-[2px] bg-white"></span>
            <span className="w-4 h-[2px] bg-white"></span>
          </div>
          {/* Navbar Links */}
          <div className="hidden items-center space-x-2 md:flex">
            <Link href="/" className="text-gray-200 px-4">
              Home
            </Link>
            <Link href="/cart" className="text-gray-200 px-4">
              Cart
            </Link>
            <Link
              href="/account/login"
              className="text-black px-4 py-1 bg-yellow-400 rounded-md  "
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className={`w-full bg-black pt-3 pb-6 px-4 ${!toggle && 'hidden'}`}>
        <div className="flex flex-col space-y-2 text-center">
          <Link href="/" className="text-gray-200 px-4">
            Home
          </Link>
          <Link href="/cart" className="text-gray-200 px-4">
            Cart
          </Link>
          <Link
            href="/account/login"
            className="text-black px-4 py-1 bg-yellow-400 rounded-md  "
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
