import React from 'react';
import './styles/Navlinks.css';
import { NavLink } from 'react-router-dom';


const NavLinks = (props) => {
  return (
    <ul className="menu-items">
            <li
              transition={{delay: 0.05}}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <NavLink to="/" className="active-links links">Home</NavLink>
              </li>
            <li
            transition={{delay: 0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/about" className="active-links links">About</NavLink>
            </li>
            <li
            transition={{delay: 0.15}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/menu" className="active-links links">Menu</NavLink>
            </li>
            <li
            transition={{delay: 0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="/reservations" className="active-links links">Reservations</NavLink>
            </li>
            <li
            transition={{delay: 0.25}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#" className="links">Order Online</NavLink>
            </li>
            <li
            transition={{delay: 0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <NavLink to="#" className="links">Login</NavLink>
            </li>
        </ul>
  )
}

export default NavLinks