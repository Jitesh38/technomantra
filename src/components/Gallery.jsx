import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Gallery() {
  const images = import.meta.glob("/src/assets/gallery/*.{jpg,png,svg,JPG}", {
    eager: true,
  });
  const imageList = Object.values(images).map((module) => module.default);
  return (
    <>
      <div className="text-center">
        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-xl zain-bold p-4">
          Gallery
        </h1>
        <p>Some memories that we made together✌</p>
      </div>
      <div className="flex-center ">
        <Carousel className="w-full lg:max-w-screen-lg md:max-w-3xl sm:max-w-lg ">
          <CarouselContent>
            {imageList.map((src, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <img                                 
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default Gallery;
