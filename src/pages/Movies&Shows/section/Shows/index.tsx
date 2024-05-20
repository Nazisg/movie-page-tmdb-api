import {
  useGetGenresQuery,
  useGetMustWatchQuery,
  useGetNewReleasesQuery,
  useGetTrendingQuery,
} from "@/redux/services/showsApi";
import Card from "@/shared/components/Card";
import CardSlider from "@/shared/components/CardSlider";
import FormatRuntimeShows from "@/shared/components/FormatRuntimeShows";
import GenreCardShows from "@/shared/components/GenreCardShows";
import SeasonShows from "@/shared/components/SeasonShows";
import season from "@/shared/media/imgs/season.png";
import time from "@/shared/media/imgs/time.png";
import { Genre, MustWatch, Trend, newReleases } from "@/shared/types";
import StarRatings from "react-star-ratings";

function Shows() {
  const { data: genres } = useGetGenresQuery();
  const { data: trending } = useGetTrendingQuery();
  const { data: newReleases } = useGetNewReleasesQuery();
  const { data: mustWatch } = useGetMustWatchQuery();

  return (
    <div className="md:border md:border-[#262626] border:none rounded-xl relative md:my-20 my-5">
      <button className="bg-primary-red rounded-lg py-2 px-5 absolute -top-5 left-8 md:block hidden">
        Shows
      </button>
      <CardSlider header="Our Genres">
        {genres?.genres.map((genre: Genre) => (
          <GenreCardShows key={genre.id} genre={genre} top={false} />
        ))}
      </CardSlider>
      <CardSlider header="Popular Top 10 In Genres">
        {genres?.genres?.slice(5, 15).map((genre: Genre) => (
          <GenreCardShows key={genre.id} genre={genre} top={false} />
        ))}
      </CardSlider>
      <CardSlider header="Trending Shows Now">
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
                <span className="text-[0.7rem] text-[#999999]">
                  <FormatRuntimeShows id={trend?.id} />
                </span>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-2 flex gap-1 items-center">
                <img src={season} alt="season" className="w-4" />
                <SeasonShows id={trend?.id} />
              </div>
            </div>
          </Card>
        ))}
      </CardSlider>
      <CardSlider header="New Released Shows">
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
            <div className="flex justify-between items-center mt-2">
              <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-1 flex gap-1 items-center">
                <img src={time} alt="time" className="w-[0.8rem]" />
                <span className="text-[0.7rem] text-[#999999]">
                  <FormatRuntimeShows id={newRel?.id} />
                </span>
              </div>
              <div className="bg-[#141414] border border-[#262626] rounded-full py-1 px-1 flex gap-1 items-center">
                <img src={season} alt="season" className="w-[0.8rem]" />
                <SeasonShows id={newRel?.id} />
              </div>
            </div>
          </Card>
        ))}
      </CardSlider>
      <CardSlider header="Must - Watch Shows">
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
                    <FormatRuntimeShows id={watch?.id} />
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

export default Shows;
