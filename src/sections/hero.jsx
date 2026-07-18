import { useState,useEffect } from "react"
import carousel1 from "../assets/carousel-1.webp"
import carousel2 from "../assets/carousel-2.webp"
import carousel3 from "../assets/carousel-3.webp"
import carousel4 from "../assets/carousel-4.webp"
import carousel5 from "../assets/carousel-5.webp"
import carousel6 from "../assets/carousel-6.webp"


function Hero(){
    const images=[carousel1,carousel2,carousel3,carousel4,carousel5,carousel6]
    const [current,setCurrent]=useState(0);
   
const next = () => {
  setCurrent((current + 1) % images.length);
};

const prev = () => {
  setCurrent((current - 1 + images.length) % images.length);
};

useEffect(() => {
  const timer = setInterval(() => {
    next();
  }, 5000);

  return () => clearInterval(timer);
}, [current]);
    

    return( 
        <section className="bg-[#b6afae] w-full h-screen">
            <div className="relative flex items-center justify-center mt-10">
            <img
                src={images[(current-1+images.length)%images.length]}
                className="w-20 h-[600px] object-cover rounded-3xl mx-6"
                onClick={prev}
            />
            
            <img
            src={images[current]}
            className="w-[80%] h-[600px] object-cover rounded-3xl  cursor-pointer mx-6"
            />

            <img
            src={images[(current+1)%images.length]}
            className="w-20 h-[600px] object-cover rounded-3xl  cursor-pointer"
            onClick={next}
            />
            </div>
            <div className="flex justify-center gap-2 mt-5">
                    {images.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${
                            current === index ? "bg-black" : "bg-gray-300"
                        }`}
                        />
                    ))}
            </div>            
        </section>
    )
};

export default Hero;