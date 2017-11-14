import axios from 'axios';
import { TRENDING_GIFS, SEARCH_GIFS } from './types';

const API_KEY = 'i74q56cKUKi6MRpPfPNNLbqLXBxKGrqy';
const TRENDING_URL = 'http://api.giphy.com/v1/gifs/trending';
const SEARCH_URL = 'http://api.giphy.com/v1/gifs/search';
const LIMIT = '5'; // API DEFAULT is 25

export const trendingGifs = async () => {
  const url = `${TRENDING_URL}?api_key=${API_KEY}&limit=${LIMIT}`;
  const res = await axios.get(url);

  return {
    type: TRENDING_GIFS,
    payload: {
      query: '',
      res: res.data
    }
  };

}

export const searchGifs = async (query) => {
  const url = `${SEARCH_URL}?q=${query}&api_key=${API_KEY}&limit=${LIMIT}`;
  const res = await axios.get(url); 

  return {
    type: SEARCH_GIFS,
    payload: {
      query: query,
      res: res.data
    }
  };
}