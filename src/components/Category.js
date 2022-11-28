import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import BookingModal from "./BookingModal";

const Category = ({ category, showSelectedCategory }) => {
  const {
    name,
    image,
    productName,
    pickUpLocation,
    price,
    originalPrice,
    yearsOfUse,
    sellerName,
    verified,
    postedTime,
  } = category;
  return showSelectedCategory ? (
    <div
      className={`shadow-lg rounded-md p-4 text-center cursor-pointer ${
        !showSelectedCategory && "hover:-translate-y-2 transition"
      } bg-gray-50 space-y-4 lg:space-y-6 border`}
    >
      <img
        src={image}
        alt={name}
        className={`${showSelectedCategory ? "h-60" : "h-48"} w-full rounded `}
      />
      <div className={`${showSelectedCategory ? "text-left" : "text-center"} `}>
        <h2 className="text-2xl font-semibold">
          {name} {!showSelectedCategory && "Cameras"} {!name && productName}
        </h2>
        {showSelectedCategory && (
          <>
            {/* Selected products category section */}
            <p className="text-lg">
              Price : <span className="font-bold">$ {price}</span>
            </p>
            <p className="text-lg">
              Pick-up Location :{" "}
              <span className="font-bold">{pickUpLocation}</span>
            </p>
            <p className="text-lg">
              Original Price :{" "}
              <span className="font-bold">$ {originalPrice}</span>
            </p>
            <p className="text-lg">
              Years of used :{" "}
              <span className="font-bold">{yearsOfUse} years</span>
            </p>
            {/* Verified section */}
            <div className="flex items-center gap-2">
              <p className="text-lg">
                Owner :{" "}
                <span className="font-bold underline text-blue-400">
                  {sellerName}
                </span>
              </p>
              {verified && <GoVerified className="text-blue-500" />}
            </div>
            {/* Button section */}
            <div className="flex items-center justify-between mt-8 ">
              <p className="text-lg">
                Posted Date : <span className="font-bold">{postedTime}</span>
              </p>
              <label
                htmlFor="booking_modal"
                className="btn bg-[#00E3AA] hover:bg-[#05d6a2] border-0 "
              >
                Book Now
              </label>
            </div>

            {/* Booking modal */}
            <BookingModal
              category={category}
              showSelectedCategory={showSelectedCategory}
            />
          </>
        )}
      </div>
    </div>
  ) : (
    <Link to={`category/${name.toLowerCase()}-cameras`}>
      <div className="shadow-lg rounded-md p-4 text-center cursor-pointer hover:-translate-y-2 transition bg-gray-50 space-y-4 lg:space-y-6 border">
        <img src={image} alt={name} className="w-full rounded h-48" />
        <div
          className={`${showSelectedCategory ? "text-left" : "text-center"} `}
        >
          <h2 className="text-2xl font-semibold">
            {name} {!showSelectedCategory && "Cameras"}
          </h2>
          {showSelectedCategory && (
            <>
              <p className="text-lg">{pickUpLocation}</p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Category;
