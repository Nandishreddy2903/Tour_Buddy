import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Booked = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <FaCheckCircle size={60} className="text-green-500" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Congratulations!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Your tour has been successfully booked!
        </p>
        <Link
          to="/my-account"
          className="inline-block w-full py-3 px-6 text-white text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Check My Bookings
        </Link>
      </div>
    </section>
  );
};

export default Booked;
