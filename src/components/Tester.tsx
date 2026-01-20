import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Hero from "./Hero.tsx";
import Analytics from "./Analytics.tsx";
import Newsletter from "./newsletter.tsx";
import Cards from "./Cards.tsx";

const Tester = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </>
  );
};

const Navbar = () => {
  const [navOn, setNavOn] = useState<Boolean>(false);

  const handleNav = () => {
    setNavOn(!navOn);
  };

  return (
    <>
      <div className="flex justify-between px-8 items-center h-24 max-w-[1240] mx-auto text-white">
        <h1 className="text-3xl font-bold text-orange-400 font-moonerfont">
          WEBER
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Products</li>
          <li className="p-4">Partners</li>
          <li className="p-4">About Us</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!navOn ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            navOn
              ? "fixed z-10 left-0 top-0 w-[40%] h-full border-r border-r-gray-900 p-2 ease-in-out duration-500 bg-black"
              : "fixed -left-full"
          }
        >
          <h1 className="m-4 text-3xl font-bold text-orange-400 font-moonerfont">
            WEBER
          </h1>

          <ul>
            <li className="p-4 border-b border-b-gray-600">Home</li>
            <li className="p-4 border-b border-b-gray-600">Products</li>
            <li className="p-4 border-b border-b-gray-600">Partners</li>
            <li className="p-4 border-b border-b-gray-600">About Us</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tester;
