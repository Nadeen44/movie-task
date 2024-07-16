import axios from 'axios';

const API_KEY = '54c081db8091c09bfa574339f528734d'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getMovies = async () => {
    try {
      const response = await tmdbApi.get('/movie/top_rated');
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };
  
  export const getMovieDetails = async (id: string) => {
    try {
      const response = await tmdbApi.get(`/movie/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  };
