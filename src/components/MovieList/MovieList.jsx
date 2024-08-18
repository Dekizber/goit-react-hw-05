import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ location }}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
