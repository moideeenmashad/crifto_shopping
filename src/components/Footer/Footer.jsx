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

  let [aboutCompany, setaAboutCompany] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
  );
  let [companyAddress, setCompanyAddress] = useState(
    "385 Lisette Ways, East Iluminada, MA 56787"
  );
  // Social Link
  let youtube = "bi bi-linkedin";
  let facebook = "bi bi-facebook";
  let twitter = "bi bi-twitter-x";
  let instagram = "bi bi-instagram";
  const socialMedia = [
    {
      media: facebook,
      linkTo: "https://www.facebook.com/",
    },
    {
      media: twitter,
      linkTo: "https://twitter.com/",
    },
    {
      media: youtube,
      linkTo: "https://www.youtube.com/",
    },
    {
      media: instagram,
      linkTo: "https://www.instagram.com/",
    },
  ];

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
            <div className="flex mt-3">
              {socialMedia.map((item, index) => (
                <a
                  href={item.linkTo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark px-2"
                  key={index}
                >
                  <i className={item.media}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
