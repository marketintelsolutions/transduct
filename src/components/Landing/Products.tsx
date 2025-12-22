import React, { useState, useEffect } from "react";

const imageCarousel = [
  "hotel.jpg",
  "image2.jpeg",
  "image3.jpeg",
  "image4.jpeg",
  "image5.jpeg",
];

const Products = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imageCarousel.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageCarousel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageCarousel.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="services" className="bg-white">
      <div className="w-full max-w-max-w mx-auto py-12 sm:py-16 lg:py-20 px-4">
        <h2 className="text-center uppercase font-semibold text-2xl sm:text-3xl lg:text-4xl">
          PRODUCTS
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-center mt-6 sm:mt-8 lg:mt-10">
          Hotel Presidential Enugu, Nigeria
        </h3>
        <p className="text-base sm:text-lg lg:text-xl font-light text-center mt-3 sm:mt-4 lg:mt-5 px-4">
          Through transformative partnerships, we set benchmarks for excellence
        </p>

        <div className="flex flex-col lg:flex-row mt-8 sm:mt-10 lg:mt-12 gap-8 lg:gap-14 justify-between">
          <div
            className="w-full lg:max-w-[50%] relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={`/${imageCarousel[currentImageIndex]}`}
              alt={`hotel ${currentImageIndex + 1}`}
              className="w-full object-cover rounded-lg aspect-video sm:aspect-auto"
            />

            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
              {imageCarousel.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-6 sm:w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="w-full lg:max-w-[45%] flex flex-col font-light text-base sm:text-lg leading-relaxed sm:leading-[35px] gap-4 lg:gap-5">
            <h3 className="font-medium text-lg sm:text-xl">
              About Hotel Presidential Enugu, Nigeria
            </h3>
            <p className="text-justify">
              Hotel Presidential in Enugu is a historic landmark that has been
              lovingly restored to its former glory. Originally built in 1963
              under the leadership of Dr. Michael Okpara, the hotel lay
              abandoned for around 15 years before being rebuilt and
              re-commissioned in 2025 Under the administration of His Excellency 
              Governor Peter Mbah
            </p>
            <p className="text-justify">
              Operated by Transduct Limited, the renovated Hotel Presidential
              blends heritage with modern luxury. With about 100 rooms, the
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
