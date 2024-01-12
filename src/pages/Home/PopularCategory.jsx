import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import img3 from "./img/PopulorCatogoriesImg/img3.jpeg";
import img4 from "./img/PopulorCatogoriesImg/img4.jpeg";
import img6 from "./img/PopulorCatogoriesImg/img6.jpeg";
import img7 from "./img/PopulorCatogoriesImg/img7.jpeg";
import img8 from "./img/PopulorCatogoriesImg/img8.png";
import img9 from "./img/PopulorCatogoriesImg/img9.jpeg";
import img10 from "./img/PopulorCatogoriesImg/img10.png";
import img11 from "./img/PopulorCatogoriesImg/img11.jpeg";
import img12 from "./img/PopulorCatogoriesImg/img12.jpeg";
import img13 from "./img/PopulorCatogoriesImg/img13.jpeg";
import img14 from "./img/PopulorCatogoriesImg/img14.jpeg";
import img15 from "./img/PopulorCatogoriesImg/img15.jpeg";
import img17 from "./img/PopulorCatogoriesImg/img17.jpeg";
import img18 from "./img/PopulorCatogoriesImg/img18.jpeg";
import img19 from "./img/PopulorCatogoriesImg/img19.png";
import NewWomenOutfit from './img/1509Q-3x2-1.jpg';
import "./Home.css";

const CarouselImg = [
  { img: img3, productCategory: "Ladies", caption: "Ladies Shoes" },
  { img: img4, productCategory: "Men", caption: "Men Shirts" },
  { img: img6, productCategory: "Ladies", caption: "Ladies Tops" },
  {
    img: img7,
    productCategory: "Ladies",
    caption: "Ladies Cardigans & Jumpers",
  },
  { img: img8, productCategory: "Ladies", caption: "Ladies Accessories" },
  { img: img9, productCategory: "Men", caption: "Men T-Shirts & Tops" },
  { img: img10, productCategory: "Ladies", caption: "Ladies Clothes" },
  { img: img11, productCategory: "Men", caption: "Men Trousers" },
  { img: img12, productCategory: "Ladies", caption: "Ladies Shirts" },
  { img: img13, productCategory: "Men", caption: "Men Jeans" },
  { img: img14, productCategory: "Men", caption: "Men Jacket" },
  { img: img15, productCategory: "Men", caption: "Men Hoddies & Sweatshirts" },
  { img: img17, productCategory: "Ladies", caption: "Ladies Trousers" },
  { img: img18, productCategory: "Ladies", caption: "Ladies Tops" },
  { img: img19, productCategory: "Men", caption: "Men Clothes" },
];

const PopularCategory = () => {
  const [title, setTitle] = useState("Popular Catogories");
  return (
    <div className="container">
      <p className="fw-bold">{title}</p>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav={false}
        responsive={{ 0: { items: 4 }, 700: { items: 5 }, 1000: { items: 8 } }}
        autoplay
        autoplayTimeout={3000}
      >
        {CarouselImg.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt="" className="img-fluid" />
            <p className="text-center fw-bold product-category mt-3">
              {item.productCategory}
            </p>
            <p className="text-center product-caption">{item.caption}</p>
          </div>
        ))}
      </OwlCarousel>
      <img src={NewWomenOutfit} alt="" className="img-fluid" />
    </div>
  );
};

export default PopularCategory;
