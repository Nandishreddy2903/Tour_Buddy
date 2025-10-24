import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import TourCard from "../../shared/TourCard";

const FeaturedTourList = () => {
  const { apiData: featuredToursData, error } = useFetch(
    `${BASE_URL}/tour/featured`
  );

  return (
    <div className="py-8">
      {error && (
        <div className="text-center text-red-600 text-xl font-semibold mb-4">
          <p>Error loading tours: {error}</p>
        </div>
      )}
      {!error && featuredToursData?.length === 0 && (
        <div className="text-center text-gray-700 text-lg font-medium">
          No featured tours available at the moment.
        </div>
      )}
      {!error && featuredToursData?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredToursData.map((tour) => (
            <div
              key={tour._id}
              className="transition-transform transform hover:scale-105 hover:shadow-lg p-4 bg-white border border-gray-200 rounded-md"
            >
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedTourList;
