import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import EventSection from "./Event";
import PopularCategory from "./PopularCategory";

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
    </div>
  );
};

export default Home;
