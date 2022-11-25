import React, { useState } from "react";

const Advertisement = () => {
  const [advertisementItems, setAdvertisementItems] = useState({});

  return (
    advertisementItems && (
      <div className="py-8 px-4 lg:py-12 bg-[#00E3AA] rounded-lg shadow my-8 lg:my-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-white text-center uppercase mb-6 lg:mb-12">
          Advisement Products
        </h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="shadow-lg rounded-md p-4 text-center cursor-pointer hover:-translate-y-2 transition bg-gray-50 space-y-4 lg:space-y-6 border">
            <img
              src="https://www.cameralabs.com/wp-content/uploads/2019/08/canon-eos-90d-hero-1.jpg"
              alt="name"
              className="w-full rounded h-56"
            />
            <div className={"text-center"}>
              <h2 className="text-2xl font-semibold">DSLR Cameras</h2>
            </div>
          </div>
          <div className="shadow-lg rounded-md p-4 text-center cursor-pointer hover:-translate-y-2 transition bg-gray-50 space-y-4 lg:space-y-6 border">
            <img
              src="https://cdn.pocket-lint.com/r/s/1201x/assets/images/137301-cameras-news-buyer-s-guide-best-360-camera-lead-image15-vh3apnaeiz.jpg"
              alt="name"
              className="w-full rounded h-56"
            />
            <div className={"text-center"}>
              <h2 className="text-2xl font-semibold">DSLR Cameras</h2>
            </div>
          </div>
          <div className="shadow-lg rounded-md p-4 text-center cursor-pointer hover:-translate-y-2 transition bg-gray-50 space-y-4 lg:space-y-6 border">
            <img
              src="https://cdn.pocket-lint.com/r/s/1201x/assets/images/137301-cameras-news-buyer-s-guide-best-360-camera-lead-image15-vh3apnaeiz.jpg"
              alt="name"
              className="w-full rounded h-56"
            />
            <div className={"text-center"}>
              <h2 className="text-2xl font-semibold">DSLR Cameras</h2>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Advertisement;
