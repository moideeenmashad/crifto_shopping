import React from "react";
import img404 from "./404.png";
import "./Page404.css";

const Page404 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={img404} alt="404" className="img-fluid" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
