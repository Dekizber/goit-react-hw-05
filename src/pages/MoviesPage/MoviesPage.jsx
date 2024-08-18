import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../services/movieAPI";
import { useSearchParams } from "react-router-dom";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") ?? "";
  console.log(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        const response = await searchMovies(query);
        setMovies(response);
        console.log(response);
      } catch (error) {
        throw new Error(error.message);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
