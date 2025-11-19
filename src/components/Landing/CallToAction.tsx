import React from "react";

const CallToAction = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 left-0 h-[50vh] bg-black/50">
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full"></div>
        <img
          src="/about.jpg"
          alt="about img"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 flex justify-center items-center flex-col gap-8 text-white w-full h-full">
        <h3 className="text-4xl font-semibold">Call To Action</h3>
        <p className="max-w-[1000px] text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          laborum porro totam recusandae modi quibusdam ab adipisci consequatur
          libero praesentium?
        </p>
        <button className="py-4 px-10 border border-white">Learn More</button>
      </div>
    </section>
  );
};

export default CallToAction;
