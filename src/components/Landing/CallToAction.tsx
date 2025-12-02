import React from "react";

const CallToAction = () => {
  return (
    <>
      {/* <div className="sticky top-0 left-0 h-[80vh]  bg-black/50">
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full"></div>
        <img
          src="/about.jpg"
          alt="about img"
          className="w-full h-full object-cover"
        />
      </div> */}
      <section className="relative py-24">
        <div className=" flex justify-center items-center flex-col gap-8 text-white w-full h-full">
          <h3 className="text-4xl font-semibold">Call To Action</h3>
          <p className="max-w-[1000px] text-center text-lg">
            At Transduct, our effective hotel management blends with hospitality, 
            leadership, and strategic planning to create exceptional guest experiences 
            and drive business success.
          </p>
          <button className="py-4 px-10 border border-white hover:bg-primary hover:border-primary cursor-pointer">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
