import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import img3 from "./img/PopulorCatogoriesImg/img3.jpeg";
import img4 from "./img/PopulorCatogoriesImg/img4.jpeg";
import img5 from "./img/PopulorCatogoriesImg/img15.jpeg";
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

const CarouselImg = [
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
  { img: img10 },
  { img: img11 },
  { img: img12 },
  { img: img13 },
  { img: img14 },
  { img: img15 },
  { img: img17 },
  { img: img18 },
  { img: img19 },
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
        items={7}
        responsive={{
          0: {
            items: 4,
          },
          600: {
            items: 5,
          },
          900: {
            items: 7,
          },
        }}
        autoplay
        autoplayTimeout={3000}
      >
        {CarouselImg.map((item, index) => {
          return (
            <div className="item">
              <img src={item.img} alt="" className="img-fluid" />
            </div>
          );
        })}
      </OwlCarousel>
      ;
    </div>
  );
};

export default PopularCategory;
