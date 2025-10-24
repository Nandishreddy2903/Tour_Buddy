import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginImg from "./../assets/images/login2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BASE_URL from "../utils/config";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logInHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: result.data,
            token: result.token,
            role: result.role,
          },
        });
        toast.success(result.message);

        result.role === "admin" ? navigate("/all-booking") : navigate("/");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Server not responding");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl md:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {/* Login Image */}
        <div className="hidden md:block">
          <img
            src={LoginImg}
            alt="Login illustration"
            className="mx-auto h-full object-cover shadow-lg rounded-lg"
          />
        </div>

        {/* Login Form */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Login to Your Account
            </h2>
            <p className="text-sm text-gray-600">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={logInHandler} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.password}
                onChange={handleInput}
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="animate-pulse">Logging in...</span>
                ) : (
                  "Login"
                )}
              </button>

              <p className="text-sm text-center mt-4">
                Don't have an Account?{" "}
                <Link
                  className="text-indigo-600 hover:text-indigo-700"
                  to="/register"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
