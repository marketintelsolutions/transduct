import React from "react";

const CallToAction = () => {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 px-4">
      <div className="flex justify-center items-center flex-col gap-6 sm:gap-8 text-white w-full h-full">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          Call To Action
        </h3>
        <p className="max-w-[1000px] text-center text-base sm:text-lg px-4">
          At Transduct, our effective hotel management blends with hospitality,
          leadership, and strategic planning to create exceptional guest
          experiences and drive business success.
        </p>
        <button className="py-3 sm:py-4 px-8 sm:px-10 border border-white hover:bg-primary hover:border-primary cursor-pointer transition-all text-sm sm:text-base">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
