import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../../Images/slider/image-1.png";
import Slide2 from "../../Images/slider/image-2.png";
import Slide3 from "../../Images/slider/image-3.png";

const MainSlider = () => {
  const slides = [
    { id: 1, src: Slide1, alt: "" },
    { id: 2, src: Slide2, alt: "" },
    { id: 3, src: Slide3, alt: "" },
  ];
  return (
    <div>
      <Carousel>
        {slides.map((item) => (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.src} alt={item.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MainSlider;
