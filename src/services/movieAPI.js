import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const params = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZThiMDkyMDgyOGQyYzNlMDFmNzQ1ZjMwNjNkYWNjNiIsIm5iZiI6MTcyMzk4NTE0NS4yNDA4OTksInN1YiI6IjY2YmY5Njc3NGQ2MTViYzM4MjQ4OWFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TjhSVf5gS_3OVFw6WjF77l9X4AWoxJXmRFdbms3c8QI'
    },
};

export const fetchMovie = async () => {
    const { data } = await axios.get('/trending/movie/day', params);
    return data.results;
};

export const searchMovies = async query => {
    const { data } = await axios.get('/search/movie', {
        ...params,
        params: { query },
    });
    return data.results;
};

export const movieCast = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/credits`, params);
    return data.cast;
};

export const movieDetails = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}`, params);
    return data;
};

export const movieReviews = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, params);
    return data.results;
};
