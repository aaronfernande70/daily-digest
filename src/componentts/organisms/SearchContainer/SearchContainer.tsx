"use client";
import { useState, useCallback, useEffect } from "react";
import { throttle } from "lodash";
import { getSearchResultsNewsApi, getSearchResultsNewsData, getSearchResultsNYT } from "./helper";
import SearchNewsCard from "@/componentts/molecules/SearchNewsCard";

const SearchContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState({
    newsApi: [],
    nyt: [],
    newsData: []
  });
  const [showResults, setShowResults] = useState(false);

  const fetchSearchResults = async (query: string) => {
    if (query.length <= 3) {
      setSearchResults({ newsApi: [], nyt: [], newsData: [] });
      return;
    }

    const [newsApiResults, nytResults, newsDataResults] = await Promise.all([
      getSearchResultsNewsApi(query),
      getSearchResultsNYT(query),
      getSearchResultsNewsData(query)
    ]);

    setSearchResults({
      newsApi: newsApiResults,
      nyt: nytResults,
      newsData: newsDataResults
    });
  };

  const throttledFetchSearchResults = useCallback(
    throttle((query: string) => fetchSearchResults(query), 300),
    [fetchSearchResults]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchText(query);
    throttledFetchSearchResults(query);
  };

  useEffect(() => {
    return () => throttledFetchSearchResults.cancel();
  }, [throttledFetchSearchResults]);

  useEffect(() => {
    setShowResults(searchText.length > 3);
  }, [searchText]);

  return (
    <div className="flex flex-col align-middle items-center relative">
      <input
        className="border-2 border-gray-500 p-2 m-4 w-full rounded-2xl"
        type="search"
        onBlur={() => setShowResults(false)}
        onFocus={() => setShowResults(true)}
        value={searchText}
        onChange={handleSearch}
      />

      {showResults && (searchResults.newsApi.length || searchResults.nyt.length || searchResults.newsData.length) ? (
        <section className="absolute top-14 bg-white w-full border m-2 z-10 overflow-y-scroll max-h-[60vh] md:flex">
          {renderResultsSection("News API", searchResults.newsApi, "TND")}
          {renderResultsSection("New York Times", searchResults.nyt, "NYT")}
          {renderResultsSection("The News Data", searchResults.newsData, "TND")}
        </section>
      ) : null}
    </div>
  );
};

const renderResultsSection = (title: string, results: any[], keyPrefix: string) => (
  <ul className="md:w-1/3 border-gray-300 p-2">
    <h4 className="p-4 flex justify-center text-sm border-t border-b">{title}</h4>
    {results.map((result, index) => (
      <SearchNewsCard key={`${index}-news_search-item-${keyPrefix}`} news={result} />
    ))}
  </ul>
);

export default SearchContainer;