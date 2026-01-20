import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center align-middle text-center bg-white items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-black my-3">
        NotFoundPage
      </h1>
      <Link to={"/"}>
        <button className="text-black bg-orange-400 hover:bg-orange-500 duration-300  rounded-md w-50 font-medium py-2 mx-auto">
          return to home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
