
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 — Not Found</h2>
      <p>Unfortunately, the page you're looking for doesn't exist.</p>
      <Link to="/"> ←— Go Back Home</Link>
    </div>
  );
}

export default NotFound;
