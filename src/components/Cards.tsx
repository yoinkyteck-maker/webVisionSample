import "./Cards.css";
import minionYum from "../assets/minionYum.png";
import officerLong from "../assets/officerNaiLong.png";
import RosePenguin from "../assets/RosePenguin.png";

const Cards = () => {
  return (
    <div className="w-full py-40 px-8 bg-white">
      <div className="max-w-310 mx-auto grid md:grid-cols-3 gap-8">
        <Card
          image={minionYum}
          title="Landing page"
          price="$149"
          details={[
            "improve brand awareness",
            "get contacted",
            "super awesome and affordable",
          ]}
          buttonText="See more"
        />
        <Card
          image={officerLong}
          title="Ecommerce"
          price="$449"
          details={[
            "handle orders and user accounts",
            "easy adjustments and additions",
            "display products",
          ]}
          buttonText="See more"
        />
        <Card
          image={RosePenguin}
          title="Customisable"
          price="price varies"
          details={[
            "add unique details like 3d models",
            "utilise interesting layouts",
            "get more than just a website",
          ]}
          buttonText="See more"
        />
      </div>
    </div>
  );
};

interface cardProps {
  image: string;
  title: string;
  price: string;
  details: string[];
  buttonText: string;
}

const Card = (props: cardProps) => {
  return (
    <div className="w-full rounded-2xl shadow-xl flex flex-col py-8 px-8 hover:scale-105 duration-300">
      <img className="bg-white w-20 mx-auto -mt-18" src={props.image} alt="/" />
      <h2 className="text-2xl text-center font-bold pt-5 pb-2">
        {props.title}
      </h2>
      <p className="text-center font-bold text-3xl pb-2">{props.price}</p>
      <div className="text-center font-medium">
        {props.details.map((item, index) => (
          <p className="py-1 border-b" key={index}>
            {item}
          </p>
        ))}
      </div>

      <button className="bg-orange-400 hover:bg-orange-500 duration-300 rounded-md w-50 font-medium py-1 mx-auto my-4">
        {props.buttonText}
      </button>
    </div>
  );
};

export default Cards;
