const Partners = () => {
  return (
    <div className="w-full bg-white pt-8 pb-12">
      <div className="w-full max-w-300 h-12 mx-auto text-black text-center text-5xl font-extralight">
        Our Partners
      </div>
      <hr className="border-t border-gray-300 mx-16 my-4" />

      <div className="w-full max-w-300 flex flex-col lg:flex-row gap-6 mx-auto justify-center items-center py-2">
        <PartnerCard
          number="01"
          company="Macvidia industries"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla culpa, vel nisi laboriosam praesentium dolore, dolorem, eius molestias maiores nobis!"
        />
        <PartnerCard
          number="02"
          company="Appleta brands"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor adipisci sint! Eligendi quaerat, magnam doloremque cupiditate ad non!"
        />
        <PartnerCard
          number="03"
          company="Yahggle"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim sapiente modi similique et ullam ducimus eum ad excepturi?"
        />
      </div>
    </div>
  );
};

interface partnerCardProps {
  number: string;
  company: string;
  description: string;
}

const PartnerCard = (props: partnerCardProps) => {
  return (
    <div className="flex bg-black w-90 h-75 align-baseline pt-6 pb-6 rounded-xl px-6 flex-col items-baseline">
      <h1 className="w-full text-left text-6xl font-bold text-orange-400">
        {props.number}
      </h1>
      <h1 className="text-white font-bold text-3xl w-full text-left py-1">
        {props.company}
      </h1>
      <p className="text-white font-light text-xl">{props.description}</p>
    </div>
  );
};

export default Partners;
