import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [searchResults, setSearchResults] = useState([]);

  // Логіка пошуку фільмів

  return (
    <div>
      <h1>Search Movies</h1>
      {/* Форма пошуку */}
      <MovieList movies={searchResults} />
    </div>
  );
}

export default MoviesPage;
