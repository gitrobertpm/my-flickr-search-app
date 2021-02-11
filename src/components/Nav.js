import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/search/javascript">JavaScript</NavLink></li>
        <li><NavLink to="/search/treehouse">Treehouse</NavLink></li>
        <li><NavLink to="/search/sunshine">Sunshine</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
