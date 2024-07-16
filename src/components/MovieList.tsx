// src/components/MovieList.tsx
import React, { useEffect, useState } from 'react';
import { getMovies } from '../services/api';
import MovieCard from './MovieCard';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} posterPath={movie.poster_path} />
      ))}
    </div>
  );
};

export default MovieList;
