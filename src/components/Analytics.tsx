import AiBaby from "../assets/aiBaby.png";

const Analytics = () => {
  return (
    <>
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-310 mx-auto grid md:grid-cols-2">
          <img className="w-125 mx-auto my-4" src={AiBaby} alt="/" />
          <div className="flex flex-col justify-center md:px-3">
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-orange-400">
              View data analytics and other information
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              eveniet esse veritatis perspiciatis veniam minus, error,
              voluptatum, pariatur tenetur necessitatibus ullam expedita quis
              maxime optio. Illum mollitia quas nulla cum corporis.
            </p>
            <button className="bg-black text-orange-400 rounded-md w-50 font-medium py-2 mx-auto md:mx-0 my-4">
              Get viewing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
