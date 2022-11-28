import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { MdReport } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const Category = ({ category, showSelectedCategory, setBookings }) => {
  const [exitsItem, setExitsItems] = useState({});
  const {
    _id,
    name,
    image,
    productName,
    pickUpLocation,
    price,
    originalPrice,
    yearsOfUse,
    sellerName,
    verified,
    time,
  } = category;

  const handleReportItem = (id) => {
    const reportedDetails = {
      reportedProductId: id,
      productName,
      sellerName,
      postedTime: time,
    };

    axios(`http://localhost:5000/reportedItems?reportedId=${id}`).then((data) =>
      setExitsItems(data.data[0])
    );

    if (exitsItem) {
      if (exitsItem?.reportedProductId !== id) {
        fetch("http://localhost:5000/reportedItem", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(reportedDetails),
        })
          .then((res) => res.json())
          .then(
            (data) => data.acknowledged && toast.success("Your reported added")
          );
      } else {
        toast.error("You already report this items");
      }
    }
  };

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
            <div
              className="flex items-center gap-2"
              onClick={() => handleReportItem(_id)}
            >
              <MdReport className="text-red-500" />
              <p className="text-lg underline text-red-500">
                Reported to Admin
              </p>
            </div>

            {/* Button section */}
            <div className="flex items-center justify-between mt-8 ">
              <p className="text-lg">
                Posted : <span className="font-bold">{time}</span>
              </p>
              <label
                htmlFor="booking_modal"
                className="btn bg-[#00E3AA] hover:bg-[#05d6a2] border-0 "
                onClick={() => setBookings(category)}
              >
                Book Now
              </label>
            </div>

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
