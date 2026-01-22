import minionYum from "../assets/minionYum.png";
import emojiWoah from "../assets/emojiWoah.png";

const AboutUs = () => {
  return (
    <div className="w-full bg-white">
      <div className="h-24 flex justify-center items-center align-middle pt-8">
        <h1 className="text-center font-extralight text-5xl">Our Team</h1>
      </div>

      <hr className="border-t border-gray-300 mx-16 mt-2" />
      <div className="flex flex-col md:flex-row justify-center items-center p-8 gap-16">
        <AboutUsCard
          pfp={emojiWoah}
          name="Shinier Yoo"
          role="Founder"
          description="Living proof that dreaming big works"
        />
        <AboutUsCard
          pfp={minionYum}
          name="Yoink Tecker"
          role="Founder"
          description="Monkeman likes competitive programming"
        />
      </div>
    </div>
  );
};

interface aboutUsCardProp {
  pfp: string;
  name: string;
  role: string;
  description: string;
}

const AboutUsCard = (props: aboutUsCardProp) => {
  return (
    <div className="w-75 h-110 border border-gray-500 rounded-xl overflow-hidden bg-gray-100 p-1">
      <div className="grid grid-cols-1 grid-row-2">
        <div className="w-full h-auto">
          <img
            className="w-full object-cover rounded-xl pb-1"
            src={props.pfp}
          />
          <hr className="border-t border-gray-500" />
          <div className="text-black px-2 pt-1.5">
            <h1 className="text-2xl font-extralight">{props.name}</h1>
            <h1 className="text-lg font-medium">{props.role}</h1>
            <p className="text-lg font-extralight">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
