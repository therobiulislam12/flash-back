import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 lg:px-0">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
