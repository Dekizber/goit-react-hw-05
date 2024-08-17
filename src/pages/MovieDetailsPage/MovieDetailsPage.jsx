import {
  Route,
  Routes,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    const from = location.state?.from || "/movies";
    navigate(from);
  };

  return (
    <div>
      <h1>Movie Details</h1>
      {/* Деталі фільму */}
      <button onClick={handleGoBack}>Go back</button>

      <Routes>
        <Route path="cast" element={<MovieCast movieId={movieId} />} />
        <Route path="reviews" element={<MovieReviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;
