import Button from "@/shared/components/Button";
import next from "@/shared/media/imgs/next.png";
import prev from "@/shared/media/imgs/prev.png";
import { PaginationProps } from "@/shared/types";
import React from "react";

const Pagination: React.FC<PaginationProps> = ({
  handlePrev,
  handleNext,
  totalSlides,
  currentSlide,
}) => {
  return (
    <div className="md:flex hidden gap-[0.3rem] items-center border border-[#1F1F1F] bg-[#0F0F0F] rounded-xl p-2">
      <Button icon={prev} bg="#1A1A1A" onClick={handlePrev} />
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-4 h-[0.2rem] rounded-full ${
            index === currentSlide ? "bg-primary-red w-5" : "bg-[#333333]"
          }`}
        ></div>
      ))}
      <Button icon={next} bg="#1A1A1A" onClick={handleNext} />
    </div>
  );
};

export default Pagination;
