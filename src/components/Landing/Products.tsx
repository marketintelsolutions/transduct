import React from "react";

const Products = () => {
  return (
    <section id="services" className="bg-white">
      <div className="w-full max-w-max-w mx-auto py-20">
        <h2 className="text-center uppercase font-semibold text-4xl">
          PRODUCTS
        </h2>
        <p className="text-xl font-light text-center mt-5">
          We are committed to redefining how hospitality is built, experienced,
          and sustained
        </p>

        <div className="flex mt-12 gap-14 justify-between ">
          <div className="w-full max-w-[50%]">
            <img src="/about.jpg" alt="about" className="w-full object-cover" />
          </div>
          <div className="w-full max-w-[45%] flex flex-col font-light text-lg leading-[35px] gap-5">
            <h3 className="font-semibold text-xl">
              About Hotel Presidential Enugu, Nigeria
            </h3>
            <p className="text-justify">
              Hotel Presidential in Enugu is a historic landmark that has been
              lovingly restored to its former glory. Originally built in 1963
              under the leadership of Dr. Michael Okpara, the hotel lay
              abandoned for around 15 years before being rebuilt and
              re-commissioned in 2025 under the administration of Governor Peter
              Mbah.
            </p>
            <p className="text-justify">
              Operated by Transduct Limited, the renovated Hotel Presidential
              blends heritage with modern luxury. With around 100 rooms, the
              property now features contemporary designs, reliable power and
              water supply, world-class conference and event facilities, and
              upgraded culinary experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
