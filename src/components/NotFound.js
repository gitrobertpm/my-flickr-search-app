
import { NavLink } from 'react-router-dom';

import bubbles from '../img/bubbles.jpg';

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 — Not Found</h2>
      <img src={bubbles} alt="Bubbles" />
      <p>Unfortunately, the page you're looking for doesn't exist.</p>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/">← Go Back Home</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NotFound;
