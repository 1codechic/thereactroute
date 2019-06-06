import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

const navStyle = {
  color: 'white'
};

function Nav() {
  return (
    <nav>
      <h3>logo here</h3>
      <ul className='nav-links'>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/FortNite'>
          <li>4tNite</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
