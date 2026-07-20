import { useState, useEffect } from "react";

import carousel1 from "../assets/carousel-1.webp";
import carousel2 from "../assets/carousel-2.webp";
import carousel3 from "../assets/carousel-3.webp";
import carousel4 from "../assets/carousel-4.webp";
import carousel5 from "../assets/carousel-5.webp";
import carousel6 from "../assets/carousel-6.webp";

function Hero() {
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#f3eeee] py-8 overflow-hidden">

      <div className="relative w-full h-[700px] md:h-[500px] overflow-hidden">

        {/* Left Preview */}
        <img
          src={images[(current - 1 + images.length) % images.length]}
          onClick={prev}
          className="
            absolute
            left-[-25px]
            top-1/2
            -translate-y-1/2

            w-16
            h-[600px]

            md:left-10
            md:w-28
            md:h-[500px]
            

            object-cover
            rounded-3xl
            cursor-pointer
            transition-all
            duration-500
          "
        />

        {/* Center Image */}
        <img
          src={images[current]}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[78%]
            h-[650px]

            md:w-[72%]
            md:max-w-[1180px]
            md:h-[500px]

            object-cover
            rounded-3xl
            shadow-xl
            transition-all
            duration-500
          "
        />


        <img
          src={images[(current + 1) % images.length]}
          onClick={next}
          className="
            absolute
            right-[-25px]
            top-1/2
            -translate-y-1/2

            w-16
            h-[600px]

            md:right-10
            md:w-28
            md:h-[500px]

            object-cover
            rounded-3xl
            cursor-pointer
            transition-all
            duration-500
          "
        />

      </div>


      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-black scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;