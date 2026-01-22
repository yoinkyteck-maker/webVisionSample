import "./Footer.css";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-310 mx-auto grid py-16 px-8 lg:grid-cols-3 gap-8 text-white">
      <div>
        <h1 className="text-3xl font-bold text-orange-400 font-moonerfont">
          weber
        </h1>
        <p className="py-4">
          Did you know that in minecraft, the rarest death message occurs when
          you are knocked by the enderdragon in the overworld to the world
          border
        </p>
        <div className="flex gap-2 md:w-[75%] my-6 justify-between align-middle">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between gap-4">
        <div>
          <h6 className="font-medium">Projects</h6>
          <ul>
            <li className="py-0.5">Landing Pages</li>
            <li className="py-0.5">Ecommerce</li>
            <li className="py-0.5">Custom</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Support</h6>
          <ul>
            <li className="py-0.5">Adjust content</li>
            <li className="py-0.5">Usage</li>
            <li className="py-0.5">Errors</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Company</h6>
          <ul>
            <li className="py-0.5">About</li>
            <li className="py-0.5">Founders</li>
            <li className="py-0.5">TNC</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium">Contact</h6>
          <ul>
            <li className="py-0.5">Email</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
