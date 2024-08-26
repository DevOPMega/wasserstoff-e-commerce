import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black shadow  p-4 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://flowbite.com/"
         className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
          <h1 className="text-2xl text-white font-semibold md:text-3xl">Wasserstoff</h1>
            
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            Wasserstoff™
          </Link>
          . All Rights Reserved.
        </span>
    </footer>
  );
};

export default Footer;
