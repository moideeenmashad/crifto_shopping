import React, { useState, useEffect } from "react";
import holidayBgImg from "./img/6038-Holiday-3x2-8-SLUSSEN-GEN.jpg";
import newClothBgImg from "./img/3188-3x2-1-new-classics.jpg";
import "./Home.css";
import AOS from "aos";

const EventSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [shippingPrice, SetShippingPrice] = useState(1999);
  let ButtonLinkTo = [
    { btnItem: "Men", LinkTo: "#" },
    { btnItem: "Women", LinkTo: "#" },
    { btnItem: "Divided", LinkTo: "#" },
    { btnItem: "Kids", LinkTo: "#" },
  ];
  return (
    <div className="container p-2">
      <div className="delivery-title d-flex justify-content-evenly">
        <p className="d-block d-sm-block d-md-block">
          Estimated delivery time: 2-7 days
        </p>
        <p className="d-none d-sm-none d-md-none d-lg-block">
          Members get free shipping above Rs.{shippingPrice}
        </p>
        <p className="d-none d-sm-none d-md-none d-lg-block">
          Free & flexible 15 days return
        </p>
      </div>
      <div className="img-container">
        <img src={holidayBgImg} alt="img" className="img-fluid mb-4" />
        <div className="button-container d-flex d-none d-lg-block">
          {ButtonLinkTo.map((value, index) => {
            return (
              <a href={value.LinkTo} className="btn btn-light me-2">
                {value.btnItem}
              </a>
            );
          })}
        </div>
      </div>
      <div className="img-container">
        <img src={newClothBgImg} alt="img" className="img-fluid" />
        <div className="season-title d-none d-md-none d-lg-block">
          <h5 className="season-text text-uppercase text-light">
            winter_edit / december
          </h5>
          <p className="new-classics fw-bolder text-light">New classics</p>
          <p className="new-description text-light">
            A modern take on heritage-inspired menswear.
          </p>
          <a href="#" className="btn btn-light">
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
