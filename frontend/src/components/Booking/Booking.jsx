import React, { useState, useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";

const Booking = ({ price, title, reviewsArray, avgRating }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    userId: user?._id,
    tourName: title,
    fullName: "",
    totalPrice: price,
    phone: "",
    maxGroupSize: 1,
    bookAt: currentDate,
    date: "",
  });

  const calculatedPrice = data.maxGroupSize * price;

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      tourName: title,
      totalPrice: calculatedPrice,
    }));
  }, [title, calculatedPrice]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validateFields = () => {
    const newErrors = {};
    if (!data.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!data.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (data.maxGroupSize < 1 || isNaN(data.maxGroupSize))
      newErrors.maxGroupSize = "Group size must be at least 1.";
    if (new Date(data.date) < new Date(currentDate))
      newErrors.date = "Booking date cannot be in the past.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fieldErrors = validateFields();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      if (user) {
        const response = await fetch(`${BASE_URL}/booking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
          toast.success("Booking Successful!");
          navigate("/booked");
        } else {
          toast.error(result.message);
        }
      } else {
        toast.error("Please sign in to proceed.");
      }
    } catch (err) {
      toast.error("Server not responding.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[28px] md:text-[42px] font-extrabold text-blue-600">
          Rs. {price}
          <span className="text-sm font-normal text-gray-600"> /per person</span>
        </h3>
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500 text-xl" />
          <span className="flex gap-1 text-gray-700 font-medium">
            <span>{avgRating}</span>
            <span>({reviewsArray.length} reviews)</span>
          </span>
        </div>
      </div>

      <div className="py-6">
        <h5 className="text-[20px] md:text-[24px] font-semibold text-gray-800">
          Booking Information
        </h5>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <input
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Full Name"
              id="fullName"
              value={data.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Contact No."
              id="phone"
              value={data.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <input
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              placeholder="Number of Persons"
              id="maxGroupSize"
              value={data.maxGroupSize}
              onChange={handleChange}
            />
            {errors.maxGroupSize && (
              <p className="text-red-500 text-sm mt-1">
                {errors.maxGroupSize}
              </p>
            )}
          </div>

          <div>
            <input
              className="w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
              id="date"
              value={data.date}
              onChange={handleChange}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          <div className="mt-8">
            <div className="flex justify-between mb-3">
              <span className="text-gray-700 font-medium">Gross Price:</span>
              <span className="text-gray-800 font-semibold">Rs. {price}</span>
            </div>
            <div className="flex justify-between mb-3 border-b pb-3">
              <span className="text-gray-700 font-medium">GST:</span>
              <span className="text-gray-800 font-semibold">0%</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-blue-700">
              <span>Net Price:</span>
              <span>Rs. {calculatedPrice}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
