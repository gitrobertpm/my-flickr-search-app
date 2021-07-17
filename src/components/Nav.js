
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/search/solar eclipse">Solar Eclipse</NavLink></li>
        <li><NavLink to="/search/aurora borealis">Aurora Borealis</NavLink></li>
        <li><NavLink to="/search/bioluminescence">Bioluminescence</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
