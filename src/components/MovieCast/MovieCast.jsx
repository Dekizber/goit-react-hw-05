import { useEffect, useState } from "react";
import { movieCast } from "../../services/movieAPI";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import s from "./MovieCast.module.css";

function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true);
        const response = await movieCast(movieId);
        setActors(response);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <div className={s.iconLoader}>
          <PacmanLoader color="#ffdd00" />
        </div>
      ) : (
        <ul className={s.listCast}>
          {actors.map((actor) => {
            return (
              <li className={s.itemCast} key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                <p className={s.character}>Character: {actor.character}</p>
                <p></p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MovieCast;
