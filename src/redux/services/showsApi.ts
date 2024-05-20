import { GenresResponse } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "5bcc4b9d176bd6bf411391507d34d2d8";
const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const showsApi = createApi({
  reducerPath: "showsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getGenres: builder.query<GenresResponse, void>({
      query: () => `genre/tv/list?api_key=${API_KEY}`,
    }),
    getShows: builder.query<any, void>({
      query: () => `discover/tv?api_key=${API_KEY}`,
    }),
    getTrending: builder.query<any, void>({
      query: () => `trending/tv/day?api_key=${API_KEY}`,
    }),
    getNewReleases: builder.query<any, void>({
      query: () => `discover/tv?air_date.lte=2024-04-19&api_key=${API_KEY}`,
    }),
    getMustWatch: builder.query<any, void>({
      query: () => `tv/top_rated?api_key=${API_KEY}`,
    }),
    getDetail: builder.query<any, number>({
      query: (id) => `tv/${id}?api_key=${API_KEY}`,
    }),
    getShowsByGenre: builder.query<any, number>({
      query: (genreId) =>
        `discover/tv?with_genres=${genreId}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetTrendingQuery,
  useGetDetailQuery,
  useGetNewReleasesQuery,
  useGetMustWatchQuery,
  useGetShowsByGenreQuery,
} = showsApi;
