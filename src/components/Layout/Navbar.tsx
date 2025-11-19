import React from "react";
import { CiMail, CiMobile1 } from "react-icons/ci";

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
  return (
    <nav className=" text-black">
      <div className="bg-primary">
        <div className="w-full max-w-max-w mx-auto py-5">
          <div className="flex gap-20 items-center">
            <div className="flex gap-2 items-center">
              <span>
                <CiMail />
              </span>
              <span>contact@example.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>
                <CiMobile1 />
              </span>
              <span>+1 5589 55488 55</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/80">
        <div className="w-full max-w-max-w  mx-auto h-[70px] flex justify-between items-center ">
          <div className="py-4">
            <img src="/logo.svg" alt="" className="max-w-[220px]" />
          </div>
          <div className="flex gap-8  h-full items-center">
            {links.map((link) => (
              <a
                href={link.path}
                className="h-full inline-flex items-center capitalize px-5 font-semibold hover:bg-primary"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
