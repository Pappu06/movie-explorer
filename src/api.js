// src/api.js
import axios from 'axios';

const API_KEY = 'ce407f9b5256c715443715e21564f257';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
