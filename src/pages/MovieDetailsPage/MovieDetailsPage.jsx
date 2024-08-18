import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { movieDetails } from "../../services/movieAPI";
import { useEffect, useRef, useState } from "react";
import { PacmanLoader } from "react-spinners";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const movPoster = movie
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "Poster is not found!";

  const prevLocation = useRef(location.state?.from || "/");
  console.log(movie);

  useEffect(() => {
    const fetchMovDetails = async () => {
      try {
        setIsLoading(true);
        const response = await movieDetails(movieId);
        setMovie(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovDetails();
  }, [movieId]);

  {
    if (isLoading)
      return (
        <div>
          <PacmanLoader color="#ffdd00" />
        </div>
      );
  }

  {
    if (!movie) return <div>Movie is not found</div>;
  }

  return (
    <>
      <Link to={prevLocation.current}>Go back</Link>
      <div>
        <img src={movPoster} alt={movie.title} />
        <h1>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>
        <p>
          Production country:{" "}
          {movie.production_countries.map((item) => item.name).join(",")}
        </p>
        <p>Rating: {movie.vote_average} </p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
