import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/movieAPI";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        const response = await searchMovies(query);
        setMovies(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = e.currentTarget;
    const initQuery = result.elements.query.value.trim();

    if (result === "") {
      return;
    }

    setSearchParams({ query: initQuery });
    result.reset();
  };

  return (
    <div className={s.boxSearchPage}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.inputSearch}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search..."
        />
        <button className={s.btnSearch} type="submit">
          Search
        </button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
