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
  { text: "Hiking", imageUrl: bgImage, shape:"diamond" },
  { text: "Swimming", imageUrl: bgImage, shape:"heart" },
  { text: "Running", imageUrl: bgImage, shape:"diamond" },
  { text: "Walking tours", imageUrl: bgImage, shape:"heart" },
  { text: "Walking tennis", imageUrl: bgImage, shape:"diamond" },
  { text: "Bird Watching", imageUrl: bgImage, shape:"heart" },
];





const CarouselSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center  bg-yellow-400 text-white text-center p-8">
        <h2 className="p-8 m-4 text-4xl md:text-6xl font-bold mb-4">Hit your weekly goals with...</h2>
        <Carousel responsive={responsive}  className="w-full" >
        {carouselItems.map((item, index) => (
          <Card key={index} text={item.text} imageUrl={item.imageUrl} shape={item.shape} />
        ))}
        </Carousel>
    </div>
  );
};

const Card = ({text, imageUrl, shape}) => {

  const shapeClasses = {
    square: "clip-square",
    diamond: "clip-diamond",
    star: "clip-star",
    heart: "clip-heart",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center">
      <img src={imageUrl} alt={text}  className={`w-40 h-40 object-cover mb-4 ${shapeClasses[shape]}`}/>
      <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
    </div>
  )
}

export default CarouselSection;