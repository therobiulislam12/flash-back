import React from "react";
import PrimaryButton from "./PrimaryButton";
import aboutImg from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="py-12">
      <div className="lg:flex justify-between items-center lg:space-x-8 py-12 lg:py-20 lg:gap-8 space-y-4">
        <img
          src={aboutImg}
          alt="about-area"
          className="rounded-lg w-full lg:w-1/2"
        />
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#00E3AA]">
           About Us
          </h1>
          <h2 className="text-2xl font-semibold">
            We are a online camera selling platform. Any kind of used camera is here. If you want you become a seller and also a buyer
          </h2>
          <p className="text-lg">
            Details potential buyers will wish to know include the model of the
            camera, the condition, when it was bought and any known defect or
            damage. Start the selling process by getting all the details you can
            about the gear that you own. You'll get the most accurate quotes and
            the most interested buyers
          </p>
          <PrimaryButton>Learn More</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
