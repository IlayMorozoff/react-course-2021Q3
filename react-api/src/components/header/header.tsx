import { FC } from 'react';
import './header.css';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="nav__wrapper">
        <nav className="nav">
          <ul className="links__list">
            <li className="item">
              <a href="/" className="link">
                Home
              </a>
            </li>
            <li className="item">
              <a href="/about" className="link">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
