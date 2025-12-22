import React from "react";

const links = [
  {
    heading: "Useful Links",
    items: [
      { text: "Home", path: "#home" },
      { text: "About Us", path: "#about" },
      { text: "Services", path: "#services" },
      { text: "Contact", path: "#contact" },
    ],
  },
  {
    heading: "Our Services",
    items: [
      { text: "Pre-Opening Services", path: "#services" },
      { text: "Sales and Marketing", path: "#services" },
      { text: "Consulting", path: "#services" },
      { text: "Asset Management", path: "#services" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-max-w mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 justify-between px-4">
        <div className="border-t-2 border-primary bg-white/10 px-8 sm:px-12 lg:px-20 pt-8 sm:pt-10 lg:pt-12 pb-8 sm:pb-10 lg:pb-12 w-full lg:w-fit flex flex-col gap-4 sm:gap-5 justify-center items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Transduct</h2>
          <p className="max-w-[300px] text-center font-light text-sm sm:text-base">
            30B FOLA OSIBO ROAD, LEKKI, ETI-OSA, LAGOS STATE
          </p>
          <p className="text-xs sm:text-sm font-light">
            <span className="font-semibold">Phone: </span>07026679881
          </p>
          <p className="text-xs sm:text-sm font-light">
            <span className="font-semibold">Email: </span>info@transductltd.com
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 flex-1">
          {links.map((link, index) => (
            <div key={index}>
              <h4 className="font-semibold text-base sm:text-lg">
                {link.heading}
              </h4>
              <div className="flex mt-4 sm:mt-6 flex-col gap-3 sm:gap-5">
                {link.items.map((linkitem, idx) => (
                  <a
                    key={idx}
                    href={linkitem.path}
                    className="text-xs sm:text-sm font-light hover:text-primary transition-colors"
                  >
                    {linkitem.text}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-base sm:text-lg">
              Our Newsletter
            </h4>
            <p className="max-w-[380px] text-xs sm:text-sm mt-4 sm:mt-6">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <div className="mt-6 sm:mt-8 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-y border-l border-white py-2 sm:py-3 px-2 bg-transparent text-sm"
              />
              <button className="px-3 sm:px-4 py-2 sm:py-3 bg-primary border hover:bg-white hover:text-primary cursor-pointer border-primary text-white transition-all text-xs sm:text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[0.5px] w-full max-w-max-w mx-auto border-gray-100 mt-10 sm:mt-12 lg:mt-14 pt-8 sm:pt-10 px-4">
        <p className="text-center text-xs sm:text-sm">
          © 2025 | Transduct | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
