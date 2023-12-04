import React from "react";
import EventImg from "./img/6038-Holiday-3x2-8-SLUSSEN-GEN.jpg";

const Event = () => {
  return (
    <div className="container p-2">
      <div className="d-flex justify-content-evenly">
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
      <img src={EventImg} alt="img" className="img-fluid" />
    </div>
  );
};

export default Event;
