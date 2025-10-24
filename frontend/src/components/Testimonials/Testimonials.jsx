import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "Rajesh Kumar",
      description:
        "Our trip with Travel Buddy was nothing short of amazing! The attention to detail, friendly guides, and unforgettable experiences made it truly special. Can't wait for the next adventure!",
    },
    {
      pic: avatar2,
      name: "Anjali Sharma",
      description:
        "Travel Buddy exceeded my expectations. From stunning landscapes to cultural encounters, every moment was a delight. The team's expertise and personalized service made the journey unforgettable.",
    },
    {
      pic: avatar3,
      name: "Vikram Patel",
      description:
        "I've traveled with many agencies, but Travel Buddy stands out. The seamless planning, knowledgeable guides, and unique destinations set them apart. An incredible way to explore the world!",
    },
    {
      pic: avatar1,
      name: "Priya Iyer",
      description:
        "Travel Buddy made our dream vacation a reality. The carefully crafted itinerary, diverse activities, and genuine hospitality created an experience we'll cherish forever. Highly recommended!",
    },
    {
      pic: avatar3,
      name: "Amit Singh",
      description:
        "A big shoutout to the Travel Buddy team for an unforgettable journey. The blend of adventure and relaxation was perfect. I'll be booking my next trip with them without a doubt.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-12 rounded-lg shadow-lg">
      <Slider {...settings}>
        {testimonialsData.map((data, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            <p className="text-gray-800 text-md mb-6 italic leading-relaxed">
              "{data.description}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-BaseColor">
                <img
                  src={data.pic}
                  className="w-full h-full object-cover"
                  alt={data.name}
                />
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900">{data.name}</h5>
                <p className="text-sm text-gray-500">Customer</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
