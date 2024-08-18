import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { movieReviews } from "../../services/movieAPI";
import s from "./MovieReviews.module.css";

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

  {
    isLoading && (
      <div className={s.iconLoader}>
        <PacmanLoader color="#ffdd00" />
      </div>
    );
  }

  return (
    <ul className={s.reviewsList}>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li className={s.reviewsItem} key={review.id}>
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
