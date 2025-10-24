// tourRepository.js
const Tour = require('./models/Tour'); // Assuming the Tour model is defined in models/Tour.js

// Create a new tour
async function createTour(tourData) {
  const tour = new Tour(tourData);
  return await tour.save();
}

// Get all tours
async function getAllTours() {
  return await Tour.find();
}

// Get a tour by ID
async function getTourById(tourId) {
  return await Tour.findById(tourId);
}

// Update a tour by ID
async function updateTour(tourId, updatedData) {
  return await Tour.findByIdAndUpdate(tourId, updatedData, { new: true });
}

// Delete a tour by ID
async function deleteTour(tourId) {
  return await Tour.findByIdAndDelete(tourId);
}

module.exports = {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour
};
