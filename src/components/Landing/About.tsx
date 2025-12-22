import React from "react";

const logos = [
  "logoblack.svg",
  "logoblack.svg",
  "logoblack.svg",
  "logoblack.svg",
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="w-full max-w-max-w mx-auto py-12 sm:py-16 lg:py-20 px-4">
        <h2 className="text-center uppercase font-semibold text-2xl sm:text-3xl lg:text-4xl">
          ABOUT US
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-light text-center mt-3 sm:mt-4 lg:mt-5 px-4">
          Transduct is at the forefront of creating destinations that inspire,
          delight, and endure.
        </p>

        <div className="flex flex-col lg:flex-row mt-8 sm:mt-10 lg:mt-12 gap-8 lg:gap-14 justify-between">
          <div className="w-full lg:max-w-[45%] flex flex-col text-sm sm:text-base font-light gap-4 lg:gap-5">
            <h3 className="font-semibold text-lg sm:text-xl">
              Welcome to Transduct — Shaping the Future of Hospitality in
              Nigeria
            </h3>
            <p className="text-justify">
              At Transduct, we believe hospitality is more than just service —
              it is the foundation of experiences, connections, and growth. Our
              work is dedicated to championing strategic investments and
              groundbreaking projects that elevate Nigeria's business and
              hospitality sectors to world-class standards.
            </p>
            <p className="text-justify">
              We are committed to redefining how hospitality is built,
              experienced, and sustained by creating landmark developments that
              blend innovation, cultural authenticity, and global best
              practices.
            </p>
            <p className="text-justify">
              From hotels and resorts to tourism and lifestyle developments,
              Transduct is at the forefront of creating destinations that
              inspire, delight, and endure. Our vision is clear: to stand as the
              benchmark for transformative partnerships and iconic projects that
              position Nigeria as a premier hub for hospitality and tourism in
              Africa.
            </p>
          </div>
          <div className="w-full lg:max-w-[50%]">
            <img
              src="/about.jpg"
              alt="about"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gray-200 w-full p-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
          <div className="bg-white p-5 sm:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8">
            <span className="text-2xl sm:text-3xl text-primary">01</span>
            <h4 className="text-2xl sm:text-3xl font-medium">Mission</h4>
            <p className="text-sm sm:text-base font-light text-black/80">
              To champion strategic investments and projects that redefine
              standards in Nigeria's business and hospitality sectors.
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8">
            <span className="text-2xl sm:text-3xl text-primary">02</span>
            <h4 className="text-2xl sm:text-3xl font-medium">Vision</h4>
            <p className="text-sm sm:text-base font-light text-black/80">
              To stand as a benchmark for transformative partnerships and
              landmark developments in Nigeria within tourism & hospitality
              sector
            </p>
          </div>
          <div className="bg-white md:col-span-2 lg:col-span-1">
            <img
              src="/vision.jpg"
              alt="vision"
              className="w-full h-full object-cover mx-auto min-h-[250px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary/20">
        <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-20 w-full max-w-max-w mx-auto py-8 sm:py-10 px-4">
          {logos.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`partner ${index + 1}`}
              className="w-[120px] sm:w-[150px] lg:w-[200px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
