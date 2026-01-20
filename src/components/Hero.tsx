import Typed from "typed.js";
import "./Hero.css";
import { useRef, useEffect } from "react";

const Hero = () => {
  //used to accept typed class
  const el = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ["Landing Pages", "Ecommerce", "Interfaces"],
      typeSpeed: 30,
      backSpeed: 40,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-225 -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-outline text-orange-400 font-bold">
          MAKING GATEWAYS AND CONNECTIONS
        </p>
        <h1 className="text-outline w-full text-4xl sm:text-6xl md:text-7xl font-bold mb-2 md:pt-1 md:pb-3 text-center">
          Create your own website
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-lg font-bold text-center align-middle">
            Reliable websites for
          </p>
          <p
            ref={el}
            className="md:text-3xl sm:text-2xl text-lg font-bold pl-2 text-center align-middle"
          ></p>
        </div>

        <button className="bg-orange-400 rounded-md w-50 font-medium py-1 mx-auto my-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
