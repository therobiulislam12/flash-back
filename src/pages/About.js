import React from "react";
import useTitles from "../hooks/useTitles";

const About = () => {
    useTitles('About Us')
  return (
    <div className="container mx-auto py-12 lg:py-20 text-center">
      <h1 className="text-2xl font-bold">About Us</h1>
    </div>
  );
};

export default About;
