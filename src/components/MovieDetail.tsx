import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const [movie, setMovie] = useState<any>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="loading loading-dots loading-lg"></div>;
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="card lg:card-side bg-base-100 shadow-xl mt-8 p-4 ">
        <figure>
          <img className='rounded-lg' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{movie.title}</h2>
          <p className="mt-4">{movie.overview}</p>
          <p className="mt-2"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="mt-2"><strong>Rating:</strong> {movie.vote_average}</p>
          <p className="mt-2"><strong>Genres:</strong> {movie.genres.map((genre: any) => genre.name).join(', ')}</p>
          <p className="mt-2"><strong>Runtime:</strong> {movie.runtime} minutes</p>
        </div>
      </div>
      <div className="flex justify-center mt-4"> {/* Center align content */}
        <button className="btn btn-ghost bg-gray-50" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default MovieDetail;
