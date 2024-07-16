// src/components/MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ id, title, posterPath }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl m-4">
      <Link to={`/movie/${id}`}>
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className="w-full h-auto rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
