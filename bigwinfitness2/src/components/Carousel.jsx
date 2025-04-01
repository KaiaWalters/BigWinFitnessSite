import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bgImage from "../assets/christian-mikhael-78gHd4C9aR8-unsplash.jpg";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const carouselItems = [
  { text: "Hiking", imageUrl: bgImage },
  { text: "Swimming", imageUrl: bgImage },
  { text: "Running", imageUrl: bgImage },
  { text: "Walking tours", imageUrl: bgImage },
  { text: "Walking tennis", imageUrl: bgImage },
  { text: "Bird Watching", imageUrl: bgImage },
];

const CarouselSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center  bg-yellow-400 text-white text-center p-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hit your weekly goals with...</h2>
        <Carousel responsive={responsive}  className="w-full" >
        {carouselItems.map((item, index) => (
          <Card key={index} text={item.text} imageUrl={item.imageUrl} />
        ))}
        </Carousel>
    </div>
  );
};

const Card = ({text, imageUrl}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center">
      <img src={imageUrl} alt={text} className="w-40 h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
    </div>
  )
}

export default CarouselSection;