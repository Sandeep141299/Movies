import React from "react";
import "./Css/navbar.css";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          Movies
        </a>

        <div class='navbar navbar-inverse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/' id='nav-link'>
                  Home
                </Link>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/contactus' id='nav-link'>
                  Contact Us
                </Link>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/aboutus' id='nav-link'>
                  About Us
                </Link>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/dashboard' id='nav-link'>
                  Dashboard
                </Link>
              </a>
            </li>
            <li className='nav-item' id='nav-link'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/User-profile' id='nav-link'>
                  User Profile
                </Link>
              </a>
            </li>{" "}
            <li className='nav-item'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/Register' id='nav-link'>
                  Register
                </Link>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' id='nav-link'>
                <Link to='/Login' id='nav-link'>
                  Login
                </Link>
              </a>
            </li>
          </ul>
          <ul className='navbar-nav' id='searchbar'>
            {" "}
            <li>
              <form class='form-inline'>
                <input class='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
              </form>
            </li>
            <li>
              {" "}
              <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
                Search
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
