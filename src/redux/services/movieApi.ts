import { GenresResponse } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "5bcc4b9d176bd6bf411391507d34d2d8";
const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGenres: builder.query<GenresResponse, void>({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
    }),
    getMovies: builder.query<any, void>({
      query: () => `discover/movie?api_key=${API_KEY}`,
    }),
    getTrending: builder.query<any, void>({
      query: () => `trending/movie/day?api_key=${API_KEY}`,
    }),
    getNewReleases: builder.query<any, void>({
      query: () => `movie/now_playing?api_key=${API_KEY}`,
    }),
    getMustWatch: builder.query<any, void>({
      query: () => `movie/top_rated?api_key=${API_KEY}`,
    }),
    getVideo: builder.query<any, number>({
      query: (id) => `movie/${id}/videos?api_key=${API_KEY}`,
    }),
    getDetail: builder.query<any, number>({
      query: (id) => `movie/${id}?api_key=${API_KEY}`,
    }),
    getMoviesByGenre: builder.query<any, number>({
      query: (genreId) =>
        `discover/movie?with_genres=${genreId}&api_key=${API_KEY}`,
    }),
    searchMulti: builder.query<any, string>({
      query: (query) => `search/multi?query=${query}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetVideoQuery,
  useGetTrendingQuery,
  useGetDetailQuery,
  useGetNewReleasesQuery,
  useGetMustWatchQuery,
  useGetMoviesByGenreQuery,
  useSearchMultiQuery,
} = movieApi;
