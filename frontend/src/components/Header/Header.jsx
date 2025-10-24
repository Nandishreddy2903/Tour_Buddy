import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import LogoVideo from "./../../assets/images/TRAVELOGO.mp4";  // Update this path with your actual video file path

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch, role } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    handleMenuToggle();
    navigate("/home");
    toast.info("Logged Out");
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className="transition-all shadow-md duration-300">
      <nav className="container mx-auto px-5 flex justify-between items-center py-4 relative">
        <div className="relative w-32 md:w-48">
          {/* Replace Logo with Video */}
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={LogoVideo} type="video/mp4" />
          </video>
        </div>

        <div className="flex gap-2 md:hidden">
          {user ? (
            <div className="flex gap-3 items-center">
              <Link
                className="text-[18px] font-semibold text-BaseColor rounded hover:text-BHoverColor cursor-pointer"
                to={role === "user" && "/my-account"}
              >
                {user.username}
              </Link>
            </div>
          ) : null}
          <BiMenu
            className="w-8 h-8 cursor-pointer transition-all duration-300 ease-in-out transform hover:rotate-90"
            onClick={handleMenuToggle}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed text-center top-0 h-screen right-0 w-2/3 bg-gray-100 p-4 shadow-md z-40 transform scale-100 opacity-100 animate-slide-in">
            <IoClose
              className="w-8 h-8 cursor-pointer absolute top-4 right-0 mr-6 text-gray-600 hover:text-black transition-all duration-300 ease-in-out transform hover:rotate-90"
              onClick={handleMenuToggle}
            />
            <ul className="flex flex-col items-center h-full justify-center gap-10 text-lg font-bold">
              {role !== "admin" && (
                <>
                  <Link to="/home" onClick={handleMenuToggle} className="menu-item">
                    Home
                  </Link>
                  <Link to="/tours" onClick={handleMenuToggle} className="menu-item">
                    Tours
                  </Link>
                  <Link to="/about" onClick={handleMenuToggle} className="menu-item">
                    Gallery
                  </Link>
                  <Link to="/contact" onClick={handleMenuToggle} className="menu-item">
                    Contact
                  </Link>
                </>
              )}
              {role === "admin" && (
                <>
                  <Link to="/all-booking" onClick={handleMenuToggle} className="menu-item">
                    Bookings
                  </Link>
                  <Link to="/all-tours" onClick={handleMenuToggle} className="menu-item">
                    Tours
                  </Link>
                  <Link to="/create" onClick={handleMenuToggle} className="menu-item">
                    Create
                  </Link>
                </>
              )}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn-logout transition-all duration-300 ease-in-out"
                >
                  Logout
                </button>
              ) : null}
              {!user && (
                <div className="flex items-center justify-center gap-4">
                  <Link to="/login" onClick={handleMenuToggle}>
                    <button className="btn-login transition-all duration-300">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" onClick={handleMenuToggle}>
                    <button className="btn-register transition-all duration-300">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="md:flex hidden space-x-8 font-sans text-lg transition-all duration-300 ease-in-out">
          {role === "admin" ? (
            <>
              <Link to="/all-booking" className="menu-item">
                Bookings
              </Link>
              <Link to="/all-tours" className="menu-item">
                Tours
              </Link>
              <Link to="/create" className="menu-item">
                Create
              </Link>
            </>
          ) : (
            <>
              <Link to="/home" className="menu-item">
                Home
              </Link>
              <Link to="/tours" className="menu-item">
                Tours
              </Link>
              <Link to="/about" className="menu-item">
                Gallery
              </Link>
              <Link to="/contact" className="menu-item">
                Contact
              </Link>
            </>
          )}
        </ul>

        {/* User profile and Logout button */}
        <div className="md:flex hidden items-center space-x-4">
          {user ? (
            <div className="flex gap-3 items-center">
              <Link
                className="text-[18px] font-semibold text-BaseColor rounded hover:text-BHoverColor cursor-pointer"
                to={role === "user" && "/my-account"}
              >
                {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="btn-logout transition-all duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="btn-login transition-all duration-300 ease-in-out">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn-register transition-all duration-300 ease-in-out">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
