import { useGetMoviesByGenreQuery } from "@/redux/services/movieApi";
import Card from "@/shared/components/Card";
import next from "@/shared/media/imgs/next.png";
import { GenreCardProps } from "@/shared/types";
import React from "react";

const GenreCardMovies: React.FC<GenreCardProps> = ({ genre, top }) => {
  const { data: movies } = useGetMoviesByGenreQuery(genre.id);

  const posters = movies?.results.slice(0, 4).map((movie: any) => (
    <div className="w-full" key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>
  ));

  return (
    <Card>
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-custom-gradient"></div>
        <div className="relative z-0 grid grid-cols-2 grid-rows-2 gap-1">
          {posters}
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div>
          {top && (
            <button className="bg-primary-red py-1 px-2 text-xs rounded mb-2">
              Top 10 In
            </button>
          )}
          <h3 className="font-semibold">{genre.name}</h3>
        </div>
        <img src={next} alt="next" className="w-[1.3rem]" />
      </div>
    </Card>
  );
};

export default GenreCardMovies;
