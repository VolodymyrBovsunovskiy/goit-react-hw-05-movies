import axios from 'axios';
const MY_KEY = 'baa4c44aec2e3cf8e4547ba86148755f';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: MY_KEY,
};
export const getAllMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day`);
  return data;
};
export const getMovieById = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`);
  return data;
};

export const getMovieCasts = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
  return data;
};
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
  return data;
};
export const getMoviesbyQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie?query=${query}`);
  return data;
};
