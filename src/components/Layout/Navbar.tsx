import React, { useState } from "react";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const links = [
  {
    text: "home",
    path: "#home",
  },
  {
    text: "about",
    path: "#about",
  },
  {
    text: "services",
    path: "#services",
  },
  {
    text: "contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#242424] text-white">
        <div className="w-full max-w-max-w mx-auto py-3 sm:py-5 px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 lg:gap-20 items-start sm:items-center text-sm">
            <div className="flex gap-2 items-center">
              <span className="text-primary">
                <CiMail />
              </span>
              <span className="text-xs sm:text-sm">info@transductltd.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-primary">
                <CiMobile1 />
              </span>
              <span className="text-xs sm:text-sm">07026679881</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 left-0 z-50 text-white bg-[#313030]">
        <div className="w-full max-w-max-w mx-auto h-[70px] flex justify-between items-center px-4">
          <div className="py-4">
            <img
              src="/logo.svg"
              alt="logo"
              className="max-w-[150px] sm:max-w-[180px] lg:max-w-[220px]"
            />
          </div>

          <div className="hidden lg:flex gap-8 h-full items-center">
            {links.map((link) => (
              <a
                key={link.text}
                href={link.path}
                className="h-full inline-flex items-center capitalize px-5 font-semibold hover:bg-primary transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-[#242424] border-t border-gray-700">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.path}
                  className="capitalize px-6 py-4 font-semibold hover:bg-primary transition-colors border-b border-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
