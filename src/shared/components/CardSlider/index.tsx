import Pagination from "@/shared/components/Pagination";
import { CardSliderProps } from "@/shared/types";
import React, { ReactNode, useEffect, useState } from "react";

const CardSlider: React.FC<CardSliderProps> = ({ header, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState<ReactNode[]>([]);
  const visibleCount = 5;

  useEffect(() => {
    const calculateVisibleSlides = () => {
      const slidesArray = React.Children.toArray(children);
      const startIndex = currentSlide * visibleCount;
      const endIndex = startIndex + visibleCount;
      setVisibleSlides(slidesArray.slice(startIndex, endIndex));
    };

    calculateVisibleSlides();
  }, [currentSlide, children]);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.floor(React.Children.count(children) / visibleCount) - 1
        : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide ===
      Math.floor(React.Children.count(children) / visibleCount) - 1
        ? 0
        : prevSlide + 1
    );
  };

  return (
    <div className="md:p-8 p-2">
      <div className="flex justify-between items-center pt-3">
        <h2 className="font-bold md:text-3xl text-2xl">{header}</h2>
        <Pagination
          currentSlide={currentSlide}
          totalSlides={Math.ceil(React.Children.count(children) / visibleCount)}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
     <div className="md:overflow-hidden overflow-x-scroll"> <div className="min-w-[768px] flex gap-5 items-center my-5">{visibleSlides}</div></div>
    </div>
  );
};

export default CardSlider;
