import {
  useGetGenresQuery,
  useGetMustWatchQuery,
  useGetNewReleasesQuery,
  useGetTrendingQuery,
} from "@/redux/services/movieApi";
import Card from "@/shared/components/Card";
import CardSlider from "@/shared/components/CardSlider";
import FormatRuntime from "@/shared/components/FormatRuntime";
import GenreCardMovies from "@/shared/components/GenreCardMovies";
import time from "@/shared/media/imgs/time.png";
import view from "@/shared/media/imgs/view.png";
import { Genre, MustWatch, Trend, newReleases } from "@/shared/types";
import StarRatings from "react-star-ratings";

export default function Movies() {
  const { data: genres } = useGetGenresQuery();
  const { data: trending } = useGetTrendingQuery();
  const { data: newReleases } = useGetNewReleasesQuery();
  const { data: mustWatch } = useGetMustWatchQuery();

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return `Released at ${date.toLocaleDateString("en-GB", options)}`;
  };

  return (
    <div className="md:border md:border-[#262626] border:none rounded-xl relative md:my-20 my-5">
      <button className="bg-primary-red rounded-lg py-2 px-5 absolute -top-5 left-8 md:block hidden">
        Movies
      </button>
      <CardSlider header="Our Genres">
        {genres?.genres.map((genre: Genre) => (
          <GenreCardMovies key={genre.id} genre={genre} top={false} />
        ))}
      </CardSlider>
      <CardSlider header="Popular Top 10 In Genres">
        {genres?.genres?.slice(6, 16).map((genre: Genre) => (
          <GenreCardMovies key={genre.id} genre={genre} top={true} />
        ))}
      </CardSlider>
      <CardSlider header="Trending Now">
        {trending?.results?.map((trend: Trend) => (
          <Card key={trend.id}>
            <div className="w-[10.8rem]">
              <img
                src={`https://image.tmdb.org/t/p/w500${trend?.poster_path}`}
                alt="poster"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-2 flex gap-1 items-center">
                <img src={time} alt="time" className="w-4" />
                <span className="text-xs text-[#999999]">
                  <FormatRuntime id={trend.id} />
                </span>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-2 flex gap-1 items-center">
                <img src={view} alt="eye" className="w-4" />
                <span className="text-xs text-[#999999]">
                  {(trend?.popularity / 1000).toFixed(1) + "K"}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </CardSlider>
      <CardSlider header="New Releases">
        {newReleases?.results?.map((newRel: newReleases) => (
          <Card key={newRel.id}>
            <div className="w-[10.8rem]">
              <img
                src={`https://image.tmdb.org/t/p/w500${newRel?.poster_path}`}
                alt="poster"
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="flex justify-center items-center mt-2 w-full">
              <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-2 flex w-full gap-1 items-center justify-center">
                <span className="text-[0.65rem] text-[#999999]">
                  {formatDate(newRel.release_date)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </CardSlider>
      <CardSlider header="Must - Watch Movies">
        {mustWatch?.results?.map((watch: MustWatch) => {
          return (
            <Card key={watch.id}>
              <div className="w-[10.8rem]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${watch?.poster_path}`}
                  alt="poster"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-1 flex gap-1 items-center">
                  <img src={time} alt="time" className="w-3" />
                  <span className="text-[0.6rem] text-[#999999]">
                    <FormatRuntime id={watch.id} />
                  </span>
                </div>
                <div className="bg-[#141414] border border-[#262626] rounded-full pb-1 px-1 flex gap-[0.1rem] justify-center items-baseline">
                  <StarRatings
                    rating={watch?.vote_average / 2 || 0}
                    starRatedColor="#E50000"
                    numberOfStars={5}
                    name="rating"
                    starDimension="10px"
                    starSpacing="0rem"
                  />
                  <p className="text-[0.6rem] text-[#999999]">
                    {(watch?.vote_count / 1000).toFixed(0) + "K"}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </CardSlider>
    </div>
  );
}
