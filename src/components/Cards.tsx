import "./Cards.css";
import minionYum from "../assets/minionYum.png";

const Cards = () => {
  return (
    <div className="w-full py-40 px-4 bg-white">
      <div className="max-w-310 mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full rounded-2xl shadow-xl flex flex-col py-8 px-8 hover:scale-105 duration-300">
          <img
            className="bg-white w-20 mx-auto -mt-18"
            src={minionYum}
            alt="/"
          />
          <h2 className="text-2xl text-center font-bold pt-5 pb-2">
            Landing page
          </h2>
          <p className="text-center font-bold text-3xl pb-2">$149</p>
          <div className="text-center font-medium">
            <p className="py-1 border-b">Introduce your brand</p>
            <p className="py-1 border-b">Show off products</p>
            <p className="py-1 border-b">Get contacted</p>
          </div>

          <button>Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
