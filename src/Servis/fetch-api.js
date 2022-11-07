import axios from 'axios';

const API_KEY = '69cbf44b099c2de25af69dec6b9fd60c';
axios.defaults.baseURL = 'http://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week', //список самых популярных фильмов на сегодня для создания коллекции на главной странице.
  querySearch: '/search/movie', //поиск кинофильма по ключевому слову на странице фильмов.
  movieDetails: '/movie', //запрос полной информации о фильме для страницы кинофильма.
  movieCredits: '/credits', //запрос информации о актёрском составе для страницы кинофильма.
  movieReviews: '/reviews', //запрос обзоров для страницы кинофильма.
};

export const getTrendingMuvies = async (page = 1) => {
  const response = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return response.data.results;
};

export const getSerchQuery = async (query, page = 1) => {
  const response = await axios.get(
    `${END_POINTS.querySearch}/?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return response.data.results;
};

export const getMoviesDeteils = async id => {
  const response = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const getMoviesCredit = async id => {
  const response = await axios.get(
    `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );

  return response.data.cast;
};

export const getMoviesReviews = async (id, page = 1) => {
  const response = await axios.get(
    `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return response.data.results;
};



