import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="border-2 border-blue-300/60 p-6 rounded-lg shadow-lg bg-white">
        <p className="text-2xl text-red-600 font-bold animate-pulse">404 - Not Found!</p>
        <Link to="/home" className="mt-4 mx-auto w-full justify-center items-center text-center inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Go Home
        </Link>
      </div>
    </div>
  );
};
