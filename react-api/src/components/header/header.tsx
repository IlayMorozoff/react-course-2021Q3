import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="nav__wrapper">
        <nav className="nav">
          <ul className="links__list">
            <li className="item">
              <NavLink to="/" exact className="link" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li className="item">
              <NavLink to="/about" exact className="link" activeClassName="selected">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
