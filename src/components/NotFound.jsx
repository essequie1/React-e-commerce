import { Link } from 'react-router-dom';
import '../scss/NotFound.scss';

export const NotFound = () => {
  return (
    <div className="notfound">
      <h1>The page you're looking for doesn't exists!</h1>
      <h3>We're sorry for the inconvenience.</h3>
      <Link className="notfound__link" to={'/'}>
        Continue Shopping
        <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </div>
  );
};
