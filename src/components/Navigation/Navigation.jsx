import { NavLink } from 'react-router-dom';


let activeClassName = {
  color: '#2196f3',
};

export default function Navigation() {
  <nav>
    <NavLink
      to="/"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Movies
    </NavLink>
  </nav>;
}
