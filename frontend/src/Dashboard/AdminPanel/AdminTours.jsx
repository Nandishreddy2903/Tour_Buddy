import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import AdminToursCards from "../../shared/AdminToursCards";

const AdminTours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { apiData: tours, error } = useFetch(`${BASE_URL}/tour?page=${page}`);
  const { apiData: tourCount } = useFetch(`${BASE_URL}/tour/count`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 12);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <div className="py-8 px-4 md:px-6 lg:px-8 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-700">
        Admin Tour Management
      </h1>

      {error ? (
        <p className="text-center text-red-500">Failed to load tours. Please try again later.</p>
      ) : (
        <>
          <div className="flex flex-col gap-5 overflow-x-auto">
            <table className="table-auto w-full border-collapse shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-100 text-gray-800">
                <tr>
                  <th className="px-4 py-2 border">No</th>
                  <th className="px-4 py-2 border text-left">Title</th>
                  <th className="px-4 py-2 border">City</th>
                  <th className="px-4 py-2 border">Featured</th>
                  <th className="px-4 py-2 border">Max People</th>
                  <th className="px-4 py-2 border">Reviews</th>
                </tr>
              </thead>
              <tbody>
                {tours?.map((tour, index) => (
                  <AdminToursCards
                    tour={tour}
                    key={tour._id}
                    index={index + 1 + page * 12}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center mt-8 gap-3">
            {pageCount > 1 &&
              [...Array(pageCount).keys()].map((number) => (
                <span
                  key={number}
                  onClick={() => setPage(number)}
                  className={`cursor-pointer px-3 py-1 border rounded-md ${
                    page === number
                      ? "bg-blue-500 text-white font-semibold"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-300"
                  }`}
                >
                  {number + 1}
                </span>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminTours;
