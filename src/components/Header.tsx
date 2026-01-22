import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOn, setNavOn] = useState<Boolean>(false);

  const handleNav = () => {
    setNavOn(!navOn);
  };

  return (
    <div className="width-full bg-black sticky top-0 z-10">
      <div className="flex justify-between px-8 items-center h-24 max-w-310 mx-auto text-white">
        <h1 className="text-3xl font-bold text-orange-400">WEBER</h1>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/Products">Products</Link>
          </li>
          <li className="p-4">
            <Link to="/Partners">Partners</Link>
          </li>
          <li className="p-4">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/Contact">Contact</Link>
          </li>
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
    </div>
  );
};

export default Navbar;
