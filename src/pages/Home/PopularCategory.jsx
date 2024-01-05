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
  { img: img3, caption: "Lorem ipsum" },
  { img: img4, caption: "Lorem ipsum" },
  { img: img5, caption: "Lorem ipsum" },
  { img: img6, caption: "Lorem ipsum" },
  { img: img7, caption: "Lorem ipsum" },
  { img: img8, caption: "Lorem ipsum" },
  { img: img9, caption: "Lorem ipsum" },
  { img: img10, caption: "Lorem ipsum" },
  { img: img11, caption: "Lorem ipsum" },
  { img: img12, caption: "Lorem ipsum" },
  { img: img13, caption: "Lorem ipsum" },
  { img: img14, caption: "Lorem ipsum" },
  { img: img15, caption: "Lorem ipsum" },
  { img: img17, caption: "Lorem ipsum" },
  { img: img18, caption: "Lorem ipsum" },
  { img: img19, caption: "Lorem ipsum" },
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
        responsive={{ 0: { items: 4 }, 600: { items: 5 }, 1000: { items: 7 } }}
        autoplay
        autoplayTimeout={3000}
      >
        {CarouselImg.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt="" className="img-fluid" />
            <p className="text-center mt-2">{item.caption}</p>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default PopularCategory;
