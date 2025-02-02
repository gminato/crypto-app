import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    //clicking navbar goes to homepage
    <Link to='/'>
      <div className='navbar'>
        {/* <FaCoins className='icon' /> */}
        <h1>
          Coin <span className='purple'>Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
