import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovie } from "../../services/movieAPI";
import { PacmanLoader } from "react-spinners";
import s from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovie();
        setMovies(data);
      } catch (error) {
        setError(true);
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  {
    isLoading && (
      <div className={s.icon}>
        <PacmanLoader color="#ffdd00" />
      </div>
    );
  }
  {
    isError && (
      <p>
        Sorry for the temporary inconvenience.
        <br />
        please reload the page or try again
      </p>
    );
  }

  return (
    <div className={s.boxHomePage}>
      <h1 className={s.mainTitle}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
