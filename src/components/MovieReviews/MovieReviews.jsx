import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { movieReviews } from "../../services/movieAPI";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const response = await movieReviews(movieId);
        setReviews(response);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);
  console.log(reviews);

  {
    isLoading && (
      <div>
        <PacmanLoader color="#ffdd00" />
      </div>
    );
  }

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We dont have any reviews for this movie!</p>
      )}
    </ul>
  );
}
export default MovieReviews;
