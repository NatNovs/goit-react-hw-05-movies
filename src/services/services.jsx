import axios from 'axios'; 

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '6cbea8cece37cf85eba0b83585dd8520';


export const fetchTrending = async () => {
  const params = {
    api_key: API_KEY,
    page: 1, 
  }; 
  const { data } = await axios.get('/trending/movie/day', { params });
  return data.results;
};


export const fetchSearchResult = async query => {
  const params = {
    api_key: API_KEY,
    page: 1,
    query,
  };
  const { data } = await axios.get('/search/movie', { params });
  console.log(data.results)
  return data.results.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};

export const fetchOneMovie = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
  };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  return data;
};


export const fetchCast = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
   try{  
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
  return data;
} catch (error) {
  console.error(error.message);
  throw new Error('Failed to fetch cast');
}
};


export const fetchReviews = async movieId => {
  const params = {
    api_key: API_KEY,
    page: 1,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });
  console.log(data);
  return data.results;
  
};

