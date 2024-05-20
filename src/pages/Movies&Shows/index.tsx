import Movies from "@/pages/Movies&Shows/section/Movies";
import Carousel from "@/shared/components/Carousel";
import { useEffect, useState } from "react";
import Shows from "./section/Shows";

export default function MoviesAndShows() {
  const [activeSection, setActiveSection] = useState("movies");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMovies = () => {
    setActiveSection("movies");
  };

  const handleShowShows = () => {
    setActiveSection("shows");
  };

  return (
    <div>
      <Carousel />
      {isMobile ? (
        <div className="border-4 border-[#1F1F1F] rounded-xl py-1 px-2 flex gap-2 md:hidden mt-5">
          <button
            className={`border border-transparent rounded-lg py-1 px-2 w-full ${
              activeSection === "movies"
                ? "border-[#1A1A1A] bg-[#1A1A1A]"
                : "text-[#BFBFBF]"
            }`}
            onClick={handleShowMovies}
          >
            Movies
          </button>
          <button
            className={`border border-transparent py-1 px-2 w-full ${
              activeSection === "shows"
                ? "border-[#1A1A1A] bg-[#1A1A1A] border rounded-lg"
                : "text-[#BFBFBF]"
            }`}
            onClick={handleShowShows}
          >
            Shows
          </button>
        </div>
      ) : null}
      {isMobile ? (
        <>
          {activeSection === "movies" && <Movies />}
          {activeSection === "shows" && <Shows />}
        </>
      ) : (
        <>
          <Movies />
          <Shows />
        </>
      )}
    </div>
  );
}
