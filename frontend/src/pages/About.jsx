import React from "react";
import ImagesGallery from "../components/Gallery/Gallery";

const About = () => {
  return (
    <section>
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
    </section>
  );
};

export default About;
