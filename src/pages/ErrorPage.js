import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-6xl text-teal-500 font-bold block">Opps !!!</h1>
      <h1 className="text-5xl text-red-500 font-bold my-4">
        404 Page Not Found
      </h1>
      <Link to="/">
        <button className="btn btn-primary rounded shadow-lg">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
