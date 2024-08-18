import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovie } from "../../services/movieAPI";

function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovie();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-medium text-amber-600 mb-3">
        Trending today
      </h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
