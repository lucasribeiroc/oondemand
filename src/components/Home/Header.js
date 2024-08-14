import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#00343F] w-full h-[79px] flex justify-between items-center px-4 md:px-8 lg:px-16">
      <Link href="/">
        <div className="pl-4 md:pl-8 lg:pl-16">
          <Image src="/logo-header.svg" alt="Logo" width={150} height={150} />
        </div>
      </Link>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4 md:space-x-6 lg:space-x-8">
        <div className="relative group hidden md:block">
          <button className="text-white flex items-center">
            Discovery
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
            <Link
              href="/new-season"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              New season
            </Link>
            <Link
              href="/most-searched"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Most searched
            </Link>
            <Link
              href="/most-selled"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Most selled
            </Link>
          </div>
        </div>
        <Link href="/about" className="text-white hidden md:block">
          About
        </Link>
        <Link href="/contact-us" className="text-white hidden md:block">
          Contact Us
        </Link>
      </nav>
      <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8 pr-4 md:pr-8 lg:pr-16">
        <Link href="/login">
          <Image src="/login.png" alt="Login" width={24} height={24} />
        </Link>
        <Link href="/cart">
          <Image src="/cart.png" alt="Cart" width={24} height={24} />
        </Link>
      </div>
      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 pl-5">
        <button
          className="text-white flex items-center"
          onClick={toggleDropdown}
        >
          Menu
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
            <Link
              href="/discovery"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Discovery
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-200">
              About
            </Link>
            <Link
              href="/contact-us"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Contact Us
            </Link>
            <Link
              href="/new-season"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              New season
            </Link>
            <Link
              href="/most-searched"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Most searched
            </Link>
            <Link
              href="/most-selled"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Most selled
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
