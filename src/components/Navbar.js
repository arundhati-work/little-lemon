import React from "react";
import "./styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../components/assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="navigation">
      <div id="menuToggle">
        <input type='checkbox'/>
        <span></span>
        <span></span>
        <span></span>
          <ul id="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
            <li>
            <button><NavLink to="mailto:arundhatib.work@gmail.com?subject=Regarding Little Lemon">Contact Us</NavLink></button>
            </li>
          </ul>
        </div>
        <div className="navbar-logo">
        <NavLink to="/">{<img className="logo-img" src = { Logo } alt = "Little Lemon logo" />}</NavLink>
      </div>
      </nav>
  );
}
