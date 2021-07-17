
import { NavLink } from 'react-router-dom';

import bubbles from '../img/bubbles.jpg';

const NoResults = () => {
  return (
    <div className="no-results">
      <img src={bubbles} />
      <h2>Zero Results</h2>
      <p>Unfortunately, that search didn't return any results.</p>
      <p>Please try again.</p>
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/">← Go Back Home</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default NoResults;
