// src/routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const loggerMiddleware = require('../middleware/loggerMiddleware');

// Log all requests
router.use(loggerMiddleware);

// Routes for movies
router.get('/', movieController.getAllMovies);
router.post('/', movieController.addMovie);
router.put('/:id', movieController.editMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
