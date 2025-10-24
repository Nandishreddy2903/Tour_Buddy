const express = require('express');
const mongoose = require('mongoose');
const tourRepository = require('./tourRepository');

const app = express();
app.use(express.json()); // For parsing JSON bodies

// Create a new tour
app.post('/tours', async (req, res) => {
  try {
    const newTour = await tourRepository.createTour(req.body);
    res.status(201).json(newTour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all tours
app.get('/tours', async (req, res) => {
  try {
    const tours = await tourRepository.getAllTours();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific tour by ID
app.get('/tours/:id', async (req, res) => {
  try {
    const tour = await tourRepository.getTourById(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a tour by ID
app.put('/tours/:id', async (req, res) => {
  try {
    const updatedTour = await tourRepository.updateTour(req.params.id, req.body);
    if (!updatedTour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json(updatedTour);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a tour by ID
app.delete('/tours/:id', async (req, res) => {
  try {
    const deletedTour = await tourRepository.deleteTour(req.params.id);
    if (!deletedTour) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
