import LogoVideo from "./../../assets/images/TRAVELOGO.mp4";  // Update this path with your actual video file path
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {
  const { role } = useContext(AuthContext);

  return (
    <>
      {role === "admin" ? null : (
        <footer className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white px-8 py-12">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* Logo and Contact Information */}
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <video
                src={LogoVideo}
                alt="Travel Buddy Logo"
                className="h-24 mb-6"
                autoPlay
                loop
                muted
              />
              <div className="text-center md:text-left">
                <p className="mb-2 text-lg font-medium">Address: 456 Adventure Lane, City, Country</p>
                <p className="mb-2 text-lg font-medium">Phone: +91 123 456 789</p>
                <p className="mb-4 text-lg font-medium">Email: support@travelbuddy.com</p>
                <p className="text-sm">© 2024 Travel Buddy. All rights reserved.</p>
              </div>
            </div>

            {/* Newsletter Column with Updated Style */}
            <div className="flex flex-col items-center md:items-start gap-4 mb-6 md:mb-0 w-full md:w-1/3">
              <h3 className="text-2xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="w-full py-3 px-6 text-white bg-indigo-600 rounded-3xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition duration-300">
                Subscribe Now
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6 md:flex-col items-center md:items-start">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
