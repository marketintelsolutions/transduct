import React from "react";

const links = [
  {
    heading: "Useful Links",
    items: [
      {
        text: "Home",
        path: "#home",
      },
      {
        text: "About Us",
        path: "#about",
      },
      {
        text: "Services",
        path: "#services",
      },
      {
        text: "Contact",
        path: "#contact",
      },
    ],
  },
  {
    heading: "Our Services",
    items: [
      {
        text: "Operations management",
        path: "#services",
      },
      {
        text: "Pre-Opening Services",
        path: "#services",
      },
      {
        text: "Revenue Management",
        path: "#services",
      },
      {
        text: "Sales and Marketing",
        path: "#services",
      },
      {
        text: "Feasibility Studies",
        path: "#services",
      },
      {
        text: "Brand Management",
        path: "#services",
      },
      {
        text: "Consulting",
        path: "#services",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 pb-20">
      <div className="w-full max-w-max-w mx-auto flex gap-10 justify-between">
        <div className="border-t-2 border-primary bg-white/10 px-20 pt-12 pb-12 w-fit flex flex-col gap-5 justify-center items-center">
          <h2 className="text-3xl font-semibold">Transduct</h2>
          <p className="max-w-[300px] text-center font-light">
            30B FOLA OSIBO ROAD, LEKKI, ETI-OSA, LAGOS STATE
          </p>
          <p className="text-sm font-light">
            <span className="font-semibold">Phone: </span>
            01 - 2716899
          </p>
          <p className="text-sm font-light">
            <span className="font-semibold">Email: </span>
            info@transductltd.com
          </p>
        </div>
        {links.map((link, index) => (
          <div key={index}>
            <h4 className="font-semibold text-lg">{link.heading}</h4>
            <div className="flex mt-6 flex-col gap-5">
              {link.items.map((linkitem) => (
                <p className="text-sm font-light">{linkitem.text}</p>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h4 className="font-semibold text-lg">Our Newsletter</h4>
          <p className="max-w-[380px] text-sm mt-6">
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>

          <div className="mt-8 flex">
            <input
              type="text"
              className="w-full border-y border-l border-white py-3 px-2"
            />
            <button className="px-4 py-3 bg-primary border border-primary text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t-[0.5px] w-full max-w-max-w mx-auto border-gray-100 mt-14 pt-10">
        <p className="text-center">© Copyright Transduct All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
