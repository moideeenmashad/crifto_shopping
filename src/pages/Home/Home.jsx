import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";
import EventSection from "./Event";
import PopularCategory from "./PopularCategory";
import Footer from "../../layouts/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="sticky-top mb-3">
        <Navbar />
      </div>
      <div className="mb-3">
        <EventSection />
      </div>
      <div className="mb-3">
        <PopularCategory />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
