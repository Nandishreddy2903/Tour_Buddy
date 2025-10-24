import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";

// Import images
import Img01 from "../../assets/images/hero-img01.jpg";
import Img02 from "../../assets/images/hero-img02.jpg";
import Img03 from "../../assets/images/front-02.jpg";
import Img04 from "../../assets/images/gallery-04.jpg";
import Img06 from "../../assets/images/gallery-03.jpg";
import Img07 from "../../assets/images/gallery-08.jpg";
import Img08 from "../../assets/images/gallery-02.jpg";
import Img09 from "../../assets/images/gallery-01.jpg";
import Img10 from "../../assets/images/edit.jpg";

// Image array
const Images = [Img01, Img02, Img03, Img06, Img04, Img07, Img08, Img09, Img10];

const ImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (300 - 200 + 1)) + 200; // Random height between 200px and 300px
  };

  return (
    <div className="p-4">
      {/* Masonry Grid */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
        <Masonry gutter="1rem">
          {Images.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg group transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-2"
              onClick={() => openModal(index)}
              style={{ height: `${getRandomHeight()}px` }} // Random height for each image
            >
              <img
                src={item}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition-all transform duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Modal */}
      {selectedImage !== null && (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="flex items-center justify-center outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          ariaHideApp={false}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer z-10"
          >
            &times;
          </button>
          <img
            src={Images[selectedImage]}
            alt="Full Preview"
            className="max-w-full max-h-screen rounded-lg shadow-lg animate-fadeIn"
          />
        </Modal>
      )}

      {/* CSS for Modal and Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ImagesGallery;
