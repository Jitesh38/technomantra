import React from "react";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = import.meta.glob("/src/assets/gallery/*.{jpg,png,svg,JPG}", {
    eager: true,
  });
  const imageList = Object.values(images).map((module) => module.default);
  return (
    <>

    <h1 className="text-center text-5xl md:text-7xl zain-bold p-4 text-yellow-500">Gallery</h1>
      {/* new carasuel */}

      <div className="w-full max-w-4xl mx-auto p-4 bg-black text-white">
        <Slider {...settings}>
          {imageList.map((src, index) => (
            <div>
              <img
                src={src}
                loading="lazy"
                alt="Slide 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Gallery;
