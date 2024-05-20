import { useSearchMultiQuery } from "@/redux/services/movieApi";
import { SearchResultsProps, seachResult } from "@/shared/types";
import React from "react";

const SearchResults: React.FC<SearchResultsProps> = ({ searchQuery }) => {
  const { data: searchResults, isLoading } = useSearchMultiQuery(searchQuery, {
    skip: !searchQuery,
  });
  return (
    <div className="border border-[#262626] rounded-xl relative my-10">
      <button className="bg-primary-red rounded-lg py-2 px-5 absolute -top-5 left-8">
        Search results
      </button>
      <div className="p-8 grid grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : searchResults?.results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults?.results.map((result: seachResult) => (
            <div
              key={result.id}
              className="w-full flex flex-col gap-1 border border-[#262626] bg-[#1A1A1A] p-4 rounded-xl"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  result?.poster_path || result?.profile_path
                }`}
                alt={result?.title || result?.name}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
              <h3>{result.title || result.name}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchResults;
