import axios from "axios";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Category from "./Category";

const Advertisement = () => {
  const [advertisementItems, setAdvertisementItems] = useState([]);
  const [product, setProduct] = useState({})

  useEffect(() =>{
    axios('http://localhost:5000/advertisementItems').then(advertisement => setAdvertisementItems(advertisement.data))
  }, [])
  


  return (
    advertisementItems.length > 0 && (
      <div className="py-8 px-4 lg:py-12 bg-[#00E3AA] rounded-lg shadow my-8 lg:my-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center uppercase mb-6 lg:mb-12">
          Advisement Products
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          advertisementItems.map(advertisementItem => <Category key={advertisementItem._id} category={advertisementItem} showSelectedCategory setBookings={setProduct}/>)
        }
        </div>

        {
          product && <BookingModal category={product} setBookings={setProduct}></BookingModal>
        }
      </div>
    )
  );
};

export default Advertisement;
