import React from 'react';
import { Link } from 'gatsby';
// import './layout.css'; // optional global styles

export default function Layout({ children }) {
  return (
    <div className='site-wrapper'>
      <header>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/about'>About</Link> |{' '}
          <Link to='/blog'>Blog</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Site</p>
      </footer>
    </div>
  );
}
