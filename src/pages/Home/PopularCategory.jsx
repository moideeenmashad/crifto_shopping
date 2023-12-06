import React from "react";
import img1 from "./img/PopulorCatogoriesImg/10201.jpeg";
import img2 from "./img/PopulorCatogoriesImg/10202.jpeg";
import img3 from "./img/PopulorCatogoriesImg/10207.jpeg";

const PopularCategory = () => {
  let productCatogoriesImg = [{ img: img1 }, { img: img2 }, { img: img3 }];
  return (
    <div className="container">
      {/* <Carousel className='owl-theme' loop margin={10} nav>
        {productCatogoriesImg.map((value, index) => {
          return (
            <div>
              <img src={value.img} className="img-fluid" />
              <p className="legend"></p>
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
};

export default PopularCategory;
