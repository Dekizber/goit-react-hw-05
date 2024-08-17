import { Link, useLocation } from "react-router-dom";

function MovieList({ movies }) {
  const location = useLocation();
  console.log(movies);

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
