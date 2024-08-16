import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<MovieDetailsPage />}>
          <Route></Route>
          <Route></Route>
        </Route>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};
