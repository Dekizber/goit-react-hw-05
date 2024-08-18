import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((movie) => (
        <li className={s.itemMovie} key={movie.id}>
          <Link
            className={s.itemLink}
            to={`/movies/${movie.id}`}
            state={{ location }}
          >
            {movie.title} ({movie.release_date.slice(0, 4)})
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
