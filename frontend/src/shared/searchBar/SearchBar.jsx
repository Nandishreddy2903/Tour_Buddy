import React, { useRef } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";
import "./SeachhBar.css";

const SearchBar = () => {
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const cityRef = useRef();
  const navigate = useNavigate();

  const SubmitHandler = async (e) => {
    e.preventDefault(); // Prevent form submission

    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;
    const searchTerm = cityRef.current.value;

    if (minPrice === "" || maxPrice === "" || searchTerm === "") {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );

      if (!response.ok) {
        toast.error("No Record Found!");
        return;
      }

      const result = await response.json();

      navigate(
        `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        { state: result.data }
      );
    } catch (error) {
      toast.error("An error occurred, please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 py-4 px-4 md:px-6 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
      <form
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center"
        onSubmit={SubmitHandler}
      >
        {/* Location Input */}
        <div className="flex gap-3 items-center">
          <span className="text-indigo-600">
            <FaPeopleGroup size={20} />
          </span>
          <div>
            <label htmlFor="location" className="text-gray-700 font-medium">Location</label>
            <input
              type="text"
              id="location"
              placeholder="Where are you going?"
              ref={cityRef}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Search location"
            />
          </div>
        </div>

        {/* Min Price Input */}
        <div className="flex gap-3 items-center">
          <span className="text-teal-500">
            <IoIosPricetags size={20} />
          </span>
          <div>
            <label htmlFor="minPrice" className="text-gray-700 font-medium">Min Price</label>
            <input
              type="number"
              id="minPrice"
              placeholder="Min. Price"
              ref={minPriceRef}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Minimum price"
            />
          </div>
        </div>

        {/* Max Price Input */}
        <div className="flex gap-3 items-center">
          <span className="text-purple-600">
            <IoIosPricetags size={20} />
          </span>
          <div>
            <label htmlFor="maxPrice" className="text-gray-700 font-medium">Max Price</label>
            <input
              type="number"
              id="maxPrice"
              placeholder="Max Price"
              ref={maxPriceRef}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Maximum price"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center sm:col-span-2 lg:col-span-1">
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-indigo-700 transition duration-300"
          >
            <IoIosSearch size={20} />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
