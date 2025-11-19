import React from "react";

const About = () => {
  return (
    <section>
      <div className="w-full max-w-max-w mx-auto py-20">
        <h2 className="text-center uppercase font-semibold text-4xl">
          ABOUT US
        </h2>
        <p className="text-xl font-light text-center mt-5">
          Transduct is at the forefront of creating destinations that inspire,
          delight, and endure.
        </p>

        <div className="flex mt-12 gap-14 justify-between ">
          <div className="w-full max-w-[45%] flex flex-col text-base font-light gap-5">
            <h3 className="font-semibold text-xl">
              Welcome to Transduct — Shaping the Future of Hospitality in
              Nigeria
            </h3>
            <p>
              At Transduct, we believe hospitality is more than just service —
              it is the foundation of experiences, connections, and growth. Our
              work is dedicated to championing strategic investments and
              groundbreaking projects that elevate Nigeria’s business and
              hospitality sectors to world-class standards.
            </p>
            <p>
              We are committed to redefining how hospitality is built,
              experienced, and sustained by creating landmark developments that
              blend innovation, cultural authenticity, and global best
              practices.
              {/* Through transformative partnerships, we set benchmarks
              for excellence, ensuring that every project contributes not only
              to the growth of the industry but also to the advancement of
              communities and the Nigerian economy at large. */}
            </p>
            <p>
              From hotels and resorts to tourism and lifestyle developments,
              Transduct is at the forefront of creating destinations that
              inspire, delight, and endure. Our vision is clear: to stand as the
              benchmark for transformative partnerships and iconic projects that
              position Nigeria as a premier hub for hospitality and tourism in
              Africa.
            </p>
          </div>
          <div className="w-full max-w-[50%]">
            <img src="/about.jpg" alt="about" className="w-full object-cover" />
          </div>
        </div>

        <div className="mt-20 bg-gray-200 w-fit p-px grid grid-cols-3 gap-px">
          <div className="bg-white max-w-[500px] p-5 flex flex-col gap-4">
            <span className="text-3xl text-primary">01</span>
            <h4 className="text-3xl font-medium">Mission</h4>
            <p className="text-base font-light text-black/80">
              To champion strategic investments and projects that redefine
              standards in Nigeria’s business and hospitality sectors.
            </p>
          </div>
          <div className="bg-white max-w-[500px] p-5 flex flex-col gap-4">
            <span className="text-3xl text-primary">02</span>
            <h4 className="text-3xl font-medium">Vision</h4>
            <p className="text-base font-light text-black/80">
              To stand as a benchmark for transformative partnerships and
              landmark developments in Nigeria within tourism & hospitality
              sector
            </p>
          </div>
          <div className="bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
