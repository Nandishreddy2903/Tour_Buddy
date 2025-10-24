import React from "react";
import "tailwindcss/tailwind.css";
import card01 from "../assets/images/gallery-01.jpg";
import card02 from "../assets/images/gallery-02.jpg";
import card03 from "../assets/images/gallery-03.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import SearchBar from "../shared/searchBar/SearchBar";
import ServicesList from "../components/services/ServicesList";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";
import faqImg from "../assets/images/experience.webp";
import ImagesGallery from "../components/Gallery/Gallery";
import image1 from "../assets/images/experience.webp";
import image2 from "../assets/images/image2.webp";
import image3 from "../assets/images/image3.webp";
const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-cover md:pt-4 px-6 md:px-12 bg-center">
        {/* {Search Section Starts} */}
        <div className="grid md:grid-cols-2 gap-8">
        <div>
        <div className="my-8 px-4 md:px-8">
  <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-center md:text-left mb-4">
    Discover Your Dream Destination with{" "}
    <span className="text-[#FF6F61]">Travel Buddy</span>
  </h1>
  <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-8 text-center md:text-left text-gray-700 md:text-gray-800">
    Travel Buddy isn’t just a travel guide—it's your personal adventure partner! 
    Explore hidden gems, customize your perfect trip, and unlock unforgettable experiences. 
    Whether you’re seeking relaxation or thrilling adventures, your dream journey starts here!
  </p>
</div>

</div>


          <div className="gap-4 grid grid-cols-3 min-h-[200px] p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
  <div className="rounded-lg my-8 overflow-hidden group relative">
    <img src={card01} className="object-cover h-full w-full transition-transform duration-500 transform group-hover:scale-110" alt="" />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <p className="text-white text-lg font-semibold">Adventure Awaits!</p>
    </div>
  </div>

  <div className="rounded-lg overflow-hidden group relative">
    <img src={card02} className="object-cover h-full w-full transition-transform duration-500 transform group-hover:scale-110" alt="" />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <p className="text-white text-lg font-semibold">Explore New Horizons</p>
    </div>
  </div>

  <div className="rounded-lg my-8 overflow-hidden group relative">
    <img src={card03} className="object-cover h-full w-full transition-transform duration-500 transform group-hover:scale-110" alt="" />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <p className="text-white text-lg font-semibold">Discover Hidden Gems</p>
    </div>
  </div>
</div>

        </div>
        <SearchBar />
      </div>

      {/* {Services Section Starts} */}
      <section className="pb-12 px-6 md:px-12">
        <div className="container mx-auto mt-8 flex-col flex md:flex-row">
          <div className="mb-6 flex-shrink-0 mx-4 flex-1 min-w-[30%]">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-cursiveFont font-bold mb-4 text-center">
  Explore Our{" "}
  <span className="text-[#FF5733] text-[38px] md:text-[44px] lg:text-[50px] font-cursiveFont">
    Exclusive Services
  </span>
</h2>
<p className="para text-sm md:text-base lg:text-lg leading-6 md:leading-8 text-center md:text-left text-[#4A4E69] md:text-[#22223B]">
  "Redefining Excellence: Services Crafted to Enrich and Elevate Your Experience Beyond Expectations."
</p>

            {/* Add Slider Component or Carousel Component if needed */}
          </div>
          <ServicesList className="flex-grow" />
        </div>
      </section>

      {/* {Gallery Section Start} */}
      <section className="py-8 text-center px-6 md:px-12 bg-[#F9FAFB]">
  <h1 className="text-[30px] md:text-[38px] font-cursiveFont font-bold mb-4 text-center">
    Discover the{" "}
    <span className="text-[#1E88E5] text-[36px] md:text-[44px] font-cursiveFont">
      Beauty of Exploration
    </span>
  </h1>
  <p className="text-md md:text-lg leading-7 md:leading-8 mb-8 text-[#374151]">
    "Step into our gallery and immerse yourself in the vibrant tapestry of 
    destinations, adventures, and unforgettable moments curated by Travel Buddy."
  </p>
  <ImagesGallery />
</section>

      {/* {Gallery Section Ends} */}
      <section className="min-h-screen py-8 px-6 md:px-12 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-lg">
  <h1 className="text-[40px] md:text-[48px] font-cursiveFont font-bold mb-4 text-center text-white drop-shadow-lg hover:text-yellow-300 transition-all duration-300">
    Explore Our Handpicked Adventures
  </h1>
  <p className="para md:text-lg text-gray-900 text-center max-w-4xl mx-auto font-bold mb-8 md:leading-8">
  "Dive into an ocean of experiences , whether it's exploring ancient ruins, soaking up the sun on golden beaches, or trekking through lush forests. Our carefully selected tours will take you to places that are as unique as your journey."
</p>

        <div className="">
          <FeaturedTourList />
        </div>
      </section>
      {/* {Featured seactiton ends} */}

      {/* {Testimonials section start} */}
      <section className="py-12 bg-gradient-to-b from-white via-gray-100 to-white">
  <div className="max-w-screen-xl mx-auto px-6 md:px-12">
    <div className="text-center mx-auto xl:w-[600px]">
      <h1 className="text-[32px] md:text-[42px] font-bold font-serif mb-6 leading-tight tracking-wide">
        Our{" "}
        <span className="text-BaseColor text-[42px] font-cursiveFont">
          Travelers Speak
        </span>
      </h1>
      <p className="text-md md:text-lg font-paraFont italic leading-relaxed mb-10 text-gray-800">
        "Discover the journeys through their eyes: authentic stories, heartfelt experiences, and unforgettable adventures. See why Travel Buddy is their trusted companion."
      </p>
    </div>

    {/* Carousel Container */}
    <div className="overflow-hidden relative px-4 md:px-8">
      <Testimonials />
    </div>
  </div>
</section>


      {/* {Testimonials section ends} */}

      {/* {faq Section Start} */}
      <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-16">
  <div className="max-w-screen-xl mx-auto px-6 md:px-12">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left Image Grid Section */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6">
        {/* First Image - Large Circle */}
        <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg">
          <img 
            src={image1} 
            alt="Traveler Image 1" 
            className="object-cover w-full h-full"
          />
        </div>
        {/* Second Image - Rounded Rectangle */}
        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image2} 
            alt="Traveler Image 2" 
            className="object-cover w-full h-full"
          />
        </div>
        {/* Third Image - Small Circle */}
        <div className="w-3/4 aspect-square rounded-full overflow-hidden shadow-lg mx-auto">
          <img 
            src={image3} 
            alt="Traveler Image 3" 
            className="object-cover w-full h-full"
          />
        </div>
        {/* Fourth Image - Square 
        <div className="w-full aspect-square rounded-lg overflow-hidden shadow-lg">
          <img 
            src={image2} 
            alt="Traveler Image 4" 
            className="object-cover w-full h-full"
          />
        </div>*/}
      </div>

      {/* FAQ Content Section */}
      <div className="w-full lg:w-1/2 text-white">
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-center lg:text-left">
          Got Questions? We’ve Got Answers
        </h2>
        <p className="text-lg md:text-xl font-light mb-8 text-center lg:text-left leading-relaxed">
          Discover answers to your queries about our services, processes, and more. Your satisfaction is our priority, and we’re here to guide you every step of the way.
        </p>

        <FaqList />
      </div>
    </div>
  </div>
</section>


      {/* {faq Section ends} */}
    </>
  );
};

export default Home;
