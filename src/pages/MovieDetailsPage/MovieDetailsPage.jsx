import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { movieDetails } from "../../services/movieAPI";
import { useEffect, useRef, useState } from "react";
import { PacmanLoader } from "react-spinners";
import s from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const movPoster = movie
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "Poster is not found!";

  const prevLocation = useRef(location.state?.from || "/");

  useEffect(() => {
    const fetchMovDetails = async () => {
      try {
        setIsLoading(true);
        const response = await movieDetails(movieId);
        setMovie(response);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovDetails();
  }, [movieId]);

  {
    if (isLoading)
      return (
        <div className={s.icon}>
          <PacmanLoader color="#ffdd00" />
        </div>
      );
  }

  {
    if (!movie) return <div>Movie is not found</div>;
  }

  return (
    <>
      <Link className={s.linkBack} to={prevLocation.current}>
        Go back
      </Link>

      <div className={s.boxFilm}>
        <div className={s.boxInformation}>
          <img src={movPoster} alt={movie.title} />
          <div className={s.boxParameters}>
            <h1>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h1>
            <p className={s.average}>
              Production country:{" "}
              {movie.production_countries.map((item) => item.name).join(",")}
            </p>
            <p className={s.overview}>
              Rating: {movie.vote_average.toFixed(1)}{" "}
            </p>
            <h2>Overview</h2>
            <p className={s.overview}>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
        <div className={s.additional}>
          <h3 className={s.titleInformation}>Additional information</h3>
          <ul className={s.listInformation}>
            <li>
              <Link className={s.linkInformation} to={"cast"}>
                Cast
              </Link>
            </li>
            <li>
              <Link className={s.linkInformation} to={"reviews"}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default MovieDetailsPage;
