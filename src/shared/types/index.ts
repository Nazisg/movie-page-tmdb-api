import { ReactNode } from "react";

export interface CardProps {
  children?: ReactNode;
}

export interface Slide {
  genre: string;
  movies: string[];
}

export interface PaginationProps {
  handlePrev: () => void;
  handleNext: () => void;
  totalSlides: number;
  currentSlide: number;
}

export interface CardSliderProps {
  header: string;
  children: ReactNode;
}
export interface Genre {
  id: number;
  name: string;
}
export interface GenresResponse {
  genres: Genre[];
}
export interface Trend {
  id: number;
  poster_path: string;
  popularity: number;
}

export interface newReleases {
  id: number;
  poster_path: string;
  release_date: string;
  first_air_date?: string | undefined;
}

export interface MustWatch {
  id: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface GenreCardProps {
  genre: {
    id: number;
    name: string;
  };
  top: boolean;
}
export interface seachResult {
  id: number;
  poster_path: string;
  profile_path: string;
  title: string;
  name: string;
}

export interface SearchResultsProps {
  searchQuery: string;
}

export interface FormatRuntimeProps {
  id: number;
}

export interface ButtonProps {
  icon: string;
  bg: string;
  onClick?: () => void;
}
