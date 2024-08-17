import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const params = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjNmZDhjOGJjYTlkZDQxNjIwMzgzODgzMzMwNjAzOCIsIm5iZiI6MTcyMzgzMzczMy43MjU0Nywic3ViIjoiNjZiZjk2Nzc0ZDYxNWJjMzgyNDg5YWNlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JPqfnBO8-iEqoLnHCjf6XyQscNbKBdy3rLCqoI0fYQg'
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
    return data;
};

export const movieCast = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/credits`, params);
    return data.cast;
};

export const movieDetails = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}`, params);
    return data;
};

console.log(movieDetails);


export const movieReviews = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, params);
    return data.results;
};
