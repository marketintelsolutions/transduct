import React from "react";

const services = [
  {
    icon: "daily",
    heading: "Operations Management",
    text:
      "Overseeing daily hotel operations to improve efficiency and guest experience.",
  },
  {
    icon: "previous",
    heading: "Pre-Opening Services",
    text: "Managing the planning and setup of a new hotel before it opens.",
  },
  {
    icon: "revenue",
    heading: "Revenue Management",
    text: "Developing strategies to optimize pricing, inventory, and revenue.",
  },
  {
    icon: "attract",
    heading: "Sales and Marketing",
    text:
      "Creating and implementing marketing and sales strategies to attract guests.",
  },
  {
    icon: "analysis",
    heading: "Feasibility Studies",
    text:
      "Conducting market and financial analysis for new hotel projects or acquisitions.",
  },
  {
    icon: "manage",
    heading: "Brand Management",
    text: "Building and maintaining the hotel's brand identity and reputation.",
  },
  {
    icon: "consult",
    heading: "Consulting",
    text:
      "Providing expert advice on various aspects, such as technology upgrades, strategic planning, and operational problems.",
  },
  {
    icon: "note",
    heading: "Financial management",
    text: "Handling budgeting, forecasting, accounting, and reporting.",
  },
  {
    icon: "asset",
    heading: "Asset management",
    text: "Optimizing the management and performance of the hotel's assets.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="w-full max-w-max-w mx-auto py-20">
        <h2 className="text-center uppercase font-semibold text-4xl">
          SERVICES
        </h2>
        <p className="text-xl font-light text-center mt-5">
          Our work is dedicated to championing strategic investments and
          groundbreaking projects
        </p>

        <div className="grid grid-cols-3 gap-5 mt-14">
          {services.map((item, index) => (
            <div
              className="flex hover:border-2 hover:border-primary hover:shadow-[0px_2px_25px_15px_rgba(0,0,0,0.05)] cursor-pointer flex-col border border-gray-200 px-6 py-14 items-center text-center"
              key={index}
            >
              <span>
                <img
                  src={`/${item.icon}.png`}
                  alt={item.text}
                  className="w-20"
                />
              </span>
              <h2 className="mt-5 text-2xl font-semibold">{item.heading}</h2>
              <p className="mt-6 font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
