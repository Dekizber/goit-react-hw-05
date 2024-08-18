import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <div className={s.boxError}>
      <h1 className={s.titleError}>404 - Page Not Found</h1>
      <Link className={s.linkError} to="/">
        Go to Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
