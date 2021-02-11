
import { Link } from 'react-router-dom';

const NoResults = () => {
  return (
    <div className="no-results">
      <h2>Zero Results</h2>
      <p>Unfortunately, that search didn't return any results.</p>
      <p>Please try again.</p>
      <Link to="/"> ←— Go Back Home</Link>
    </div>
  );
}

export default NoResults;
