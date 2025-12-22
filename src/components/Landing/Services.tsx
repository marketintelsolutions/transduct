import React from "react";

const services = [
  {
    icon: "previous",
    heading: "Pre-Opening Services",
    text: "Managing the planning and setup of a new hotel before it opens.",
  },
  {
    icon: "attract",
    heading: "Sales and Marketing",
    text:
      "Creating and implementing marketing and sales strategies to attract guests.",
  },
  {
    icon: "consult",
    heading: "Consulting",
    text:
      "Providing expert advice on various aspects, such as technology upgrades, strategic planning, and operational problems.",
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
      <div className="w-full max-w-max-w mx-auto py-12 sm:py-16 lg:py-20 px-4">
        <h2 className="text-center uppercase font-semibold text-2xl sm:text-3xl lg:text-4xl">
          SERVICES
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-light text-center mt-3 sm:mt-4 lg:mt-5 px-4">
          Our work is dedicated to championing strategic investments and
          groundbreaking projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10 lg:mt-14">
          {services.map((item, index) => (
            <div
              className="flex hover:border-2 hover:border-primary hover:shadow-[0px_2px_25px_15px_rgba(0,0,0,0.05)] cursor-pointer flex-col border border-gray-200 px-4 sm:px-6 py-10 sm:py-14 items-center text-center transition-all"
              key={index}
            >
              <span>
                <img
                  src={`/${item.icon}.png`}
                  alt={item.text}
                  className="w-16 sm:w-20"
                />
              </span>
              <h2 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-semibold">
                {item.heading}
              </h2>
              <p className="mt-4 sm:mt-6 font-light text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
