import React from "react";

const Banner = () => {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] lg:h-[85vh]"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 text-white">
        <div className="w-full max-w-max-w mx-auto h-full flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-bold max-w-3xl">
            Welcome to Transduct
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl max-w-2xl">
            We are committed to redefining how hospitality is built,
            experienced, and sustained
          </h2>
          <button className="py-3 px-5 sm:px-6 lg:px-8 border-2 w-fit hover:bg-primary hover:text-white cursor-pointer hover:border-primary transition-all text-sm sm:text-base font-medium">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
