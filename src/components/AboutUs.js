import React from 'react';
import './styles/About.css';
import marioAdrian from './assets/mario-adrian-img.png';

export default function About() {
  return (
    <div className='about-container'>
        <div className='about-text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a 
                lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        </div>
        <div className='about-img'>
            <img src={marioAdrian} alt="Mario-Adrian"/>
        </div>
    </div>
  )
}
