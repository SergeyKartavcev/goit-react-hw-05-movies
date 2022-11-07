import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'
let activeClassName = {
  color: '#2196f3',
};

const Navigation = () => {
  return (
    <nav className={s.bar}>
      <NavLink
       className={s.link}
        to="/"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Home
      </NavLink>

      <NavLink
       className={s.link}
        to="/movies"
        style={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
