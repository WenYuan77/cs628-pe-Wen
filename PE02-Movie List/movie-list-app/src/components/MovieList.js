import React, { useState } from 'react';
import '../MovieList.css'; 

const MovieList = () => {
  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2010 },
    { title: 'Titanic', genre: 'Romance', releaseYear: 1997 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Interstellar', genre: 'Sci-Fi', releaseYear: 2014 },
    { title: 'The Notebook', genre: 'Romance', releaseYear: 2004 },
  ];

  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="container">
      <h1>Movie List</h1>
      <label htmlFor="genre-select">Filter by Genre:</label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <strong>{movie.title}</strong> - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
