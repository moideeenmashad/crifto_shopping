import React, { useState } from "react";
import "./Footer.css";
const Footer = () => {
  const categoriesList = [
    { ft_item: "Ladies", linkTo: "#" },
    { ft_item: "Men", linkTo: "#" },
    { ft_item: "Kids", linkTo: "#" },
    { ft_item: "New & Featured", linkTo: "#" },
    { ft_item: "Sport", linkTo: "#" },
    { ft_item: "Sustainability", linkTo: "#" },
  ];
  const informationsList = [
    { ft_item: "About Us", linkTo: "#" },
    { ft_item: "Contact Us", linkTo: "#" },
    { ft_item: "Terms & Conditions", linkTo: "#" },
    { ft_item: "Return & Exchange", linkTo: "#" },
    { ft_item: "Privacy & Policy", linkTo: "#" },
    { ft_item: "Shipping & Delivery", linkTo: "#" },
  ];

  let [aboutCompany, setaboutCompany] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
  );
  let [companyAddress,setCompanyAddress] = useState("385 Lisette Ways, East Iluminada, MA 56787")

  return (
    <footer className="container-fluid">
      <div className="container mt-3 p-5">
        <div className="row g-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <p className="ft-item shop-list">About</p>
            <p className="company-address">{aboutCompany}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <p className="ft-item shop-list">Categories</p>
            {categoriesList.map((item, index) => (
              <a key={index} className="ft-item-list" href={item.ft_item}>
                {item.ft_item}
              </a>
            ))}
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <p className="ft-item information-list">Informations</p>
            {informationsList.map((item, index) => (
              <a key={index} className="ft-item-list" href={item.ft_item}>
                {item.ft_item}
              </a>
            ))}
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <p className="ft-item contact-list">Contact us</p>
            <p className="company-address">{companyAddress}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
