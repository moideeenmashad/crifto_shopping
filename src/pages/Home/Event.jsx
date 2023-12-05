import React from "react";
import holidayBgImg from "./img/6038-Holiday-3x2-8-SLUSSEN-GEN.jpg";
import newClothBgImg from "./img/3188-3x2-1-new-classics.jpg";

const EventSection = () => {
  return (
    <div className="container p-2">
      <div className="delivery-title d-flex justify-content-evenly">
        <p className="d-block d-sm-block d-md-block">
          Estimated delivery time: 2-7 days
        </p>
        <p className="d-none d-sm-none d-md-none d-lg-block">
          Members get free shipping above Rs.1999
        </p>
        <p className="d-none d-sm-none d-md-none d-lg-block">
          Free & flexible 15 days return
        </p>
      </div>
      <div className="img-container" style={{ position: "relative" }}>
        <img src={holidayBgImg} alt="img" className="img-fluid mb-4" />
      </div>
      <div className="img-container" style={{ position: "relative" }}>
        <img src={newClothBgImg} alt="img" className="img-fluid" />
      </div>
    </div>
  );
};

export default EventSection;
