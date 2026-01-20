import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-8">
      <div className="grid max-w-310 mx-auto lg:grid-cols-3 grid-rows-1">
        <div className="lg:col-span-2">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-orange-400 py-2">
            Want to keep up with new styles and features?
          </h1>
          <p>
            Enter your email for monthly recaps on web design and our services
          </p>
        </div>

        <div className="my-4 col-span-1">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="text-white bg-black p-3 w-full rounded-md"
              type="email"
              placeholder="Enter Email"
            />
            <button className="text-black bg-orange-400 rounded-md w-50 font-medium py-2 mx-auto md:mx-0 my-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
