import React from "react";

const Banner = () => {
  return (
    <section
      className="relative h-[85vh]"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "0px -280px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <video autoPlay muted loop className="w-full object-cover h-full">
        <source src="/banner.mp4" />
      </video> */}

      <div className="absolute top-0 left-0 w-full h-full bg-black/80 text-white">
        <div className="w-full max-w-max-w mx-auto h-full flex flex-col gap-10 pt-[220px]">
          <h1 className="text-5xl uppercase font-bold">Welcome to Transduct</h1>
          <h2 className="text-2xl">
            We are committed to redefining how hospitality is built,
            experienced, and sustained
          </h2>
          <button className="py-3 px-5 border-2 w-fit hover:bg-primary hover:text-white cursor-pointer hover:border-primary">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
