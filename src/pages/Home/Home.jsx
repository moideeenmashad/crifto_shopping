import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Event from './Event'

const Home = () => {
  return (
    <div>
      <div className="mb-3">
        <Navbar />
      </div>
      <div className="mb-3">
        <Event/>
      </div>
    </div>
  );
};

export default Home;
