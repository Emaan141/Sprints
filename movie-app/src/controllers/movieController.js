// src/controllers/movieController.js
const movies = [];

// Get all movies (returns id and name of all movies)
const getAllMovies = (req, res) => {
  const movieList = movies.map((movie) => ({ id: movie.id, name: movie.name }));
  res.json(movieList);
};

// Add a new movie (adds movie name and id)
const addMovie = (req, res) => {
  const { name } = req.body;
  const id = movies.length + 1;
  const newMovie = { id, name };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};

// Edit a movie by its id
const editMovie = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  movie.name = name || movie.name;
  res.json(movie);
};

// Delete a movie by its id
const deleteMovie = (req, res) => {
  const { id } = req.params;
  const index = movies.findIndex((m) => m.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  const deletedMovie = movies.splice(index, 1);
  res.json(deletedMovie[0]);
};

module.exports = { getAllMovies, addMovie, editMovie, deleteMovie };
