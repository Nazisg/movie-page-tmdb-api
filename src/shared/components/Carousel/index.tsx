import { useGetMoviesQuery } from "@/redux/services/movieApi";
import Button from "@/shared/components/Button";
import like from "@/shared/media/imgs/like.png";
import next from "@/shared/media/imgs/next.png";
import play from "@/shared/media/imgs/play.png";
import plus from "@/shared/media/imgs/plus.png";
import prev from "@/shared/media/imgs/prev.png";
import voice from "@/shared/media/imgs/voice.png";
import { useState } from "react";

export default function Carousel() {
  const { data: movies } = useGetMoviesQuery();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideData = movies?.results.slice(5, 10) || [];

  const handlePrev = () => {
    if (slideData) {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
      );
    }
  };

  const handleNext = () => {
    if (slideData) {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
      );
    }
  };

  return (
    <div className="w-full mt-7">
      <div className="relative">
        <div className="relative z-0 h-[40rem] rounded-xl">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={`https://image.tmdb.org/t/p/w500${slideData[currentSlide]?.backdrop_path}`}
            alt={slideData[currentSlide]?.title}
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 z-10 p-8 w-full bg-slider-gradient flex justify-center items-end">
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <h2 className="font-bold md:text-4xl text-2xl">
              {slideData[currentSlide]?.title}
            </h2>
            <p className="text-[#999999] text-center  md:text-base hidden md:block">
              {slideData[currentSlide]?.overview}
            </p>
            <div className="flex md:flex-row flex-col gap-3 md:w-auto w-full items-center">
              <div className="md:max-w-[8.5rem] w-full flex justify-center">
                <button className="bg-primary-red rounded-lg py-3 px-5 flex gap-2 items-center justify-center w-full">
                  <img src={play} alt="play" className="w-4" />
                  Play Now
                </button>
              </div>
              <div className="flex gap-2">
                <Button icon={plus} bg="#0F0F0F" />
                <Button icon={like} bg="#0F0F0F" />
                <Button icon={voice} bg="#0F0F0F" />
              </div>
            </div>
            <div className=" gap-2 items-center justify-between w-full hidden md:flex">
              <Button icon={prev} bg="#0F0F0F" onClick={handlePrev} />
              <div className="flex gap-1 items-center">
                {slideData?.map((_: any, index: number) => (
                  <div
                    key={index}
                    className={`w-4 h-[0.2rem] rounded-full ${
                      index === currentSlide
                        ? "bg-primary-red w-5"
                        : "bg-[#333333]"
                    }`}
                  ></div>
                ))}
              </div>
              <Button icon={next} bg="#0F0F0F" onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
