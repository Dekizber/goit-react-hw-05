import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const params = {
    headers: {
        Authorization: 'Bearer 163fd8c8bca9dd416203838833306038'
    },
};

export const fetchMovie = async () => {
    const dataTrendingMovie = await axios.get('/trending/movie/day', params);
    return dataTrendingMovie;
};

export const searchMovies = async query => {
    console.log("🚀 ~ searchMovies ~ searchMovies:", searchMovies)
    const dataSearchMovie = await axios.get('/search/movie', {
        ...params,
        params: { query },
    });
    return dataSearchMovie;
};

export const movieDetails = async movieId => {
    console.log("🚀 ~ movieDetails ~ movieDetails:", movieDetails)
    const dataMovieDetails = await axios.get(`/movie/${movieId}`, params);
    return dataMovieDetails;
};

export const movieCast = async movieId => {
    console.log("🚀 ~ movieCast ~ movieCast:", movieCast)
    const dataMovieCast = await axios.get(`/movie/${movieId}/credits`, params);
    return dataMovieCast;
};

export const movieReviews = async movieId => {
    console.log("🚀 ~ movieReviews ~ movieReviews:", movieReviews)
    const dataMovieReviews = await axios.get(`/movie/${movieId}/reviews`, params);
    return dataMovieReviews;
};

