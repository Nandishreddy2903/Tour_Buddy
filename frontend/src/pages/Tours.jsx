import React, { useEffect, useState } from "react";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../utils/config";
import TourCard from "../shared/TourCard";
import SearchTours from "../components/Search/SearchTours";
import "./Tours.css";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // Fetching tours and tour count
  const { apiData: tours, error, isLoading } = useFetch(`${BASE_URL}/tour?page=${page}`);
  const { apiData: tourCount } = useFetch(`${BASE_URL}/tour/count`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 12); // Assuming 12 tours per page
    setPageCount(pages);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top on page change
  }, [page, tourCount]);

  return (
    <div>
      {/* Search Component */}
      <SearchTours />

      <section className="min-h-screen py-8 px-6 md:px-12">
        {/* Tours Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold">
            Oops! Unable to load tours. Please try again later.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tours?.map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center mt-8 gap-2">
          {pageCount > 0 &&
            [...Array(pageCount).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                disabled={page === number}
                className={`px-4 py-2 rounded-md transition-colors ${
                  page === number
                    ? "bg-indigo-500 text-white cursor-not-allowed"
                    : "bg-gray-200 hover:bg-indigo-500 hover:text-white"
                }`}
              >
                {number + 1}
              </button>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
