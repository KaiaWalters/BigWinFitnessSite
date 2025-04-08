import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bgImage from "../assets/homePage/images/home_isthataturtle_excellent.jpg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const carouselItems = [
  { text: "Hiking", imageUrl: bgImage, shape: "rectangle" },
  { text: "Swimming", imageUrl: bgImage, shape: "rectangle" },
  { text: "Running", imageUrl: bgImage, shape: "rectangle" },
  { text: "Walking tours", imageUrl: bgImage, shape: "rectangle" },
];

const CarouselSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-amber-200 text-white text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-8">
        Hit your weekly goals with...
      </h2>
      <Carousel
        responsive={responsive}
        className="w-full"
        swipeable
        draggable
        showDots={true}
      >
        {carouselItems.map((item, index) => (
          <Card key={index} text={item.text} imageUrl={item.imageUrl} shape={item.shape} />
        ))}
      </Carousel>
    </div>
  );
};

const Card = ({ text, imageUrl, shape }) => {
  const shapeClasses = {
    square: "clip-square",
    diamond: "clip-diamond",
    star: "clip-star",
    heart: "clip-heart"
  };

  return (
    <div className="overflow-hidden p-8 flex flex-col items-center text-center">
      <img src={imageUrl} alt={text} className={`w-40 h-40 object-cover mb-4 ${shapeClasses[shape]}`} />
      <h3 className="text-lg font-semibold text-white-800">{text}</h3>
    </div>
  );
};

export default CarouselSection;
