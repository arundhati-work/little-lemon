import React from 'react';
import robin from './assets/test-robin.png';
import chandler from './assets/test-chandler.png';
import sheldon from './assets/test-sheldon.png';
import gina from './assets/test-gina.png';
import TestimonialCard from './TestimonialCard';
import './styles/Testimonials.css';

const data = [
    {
        id: 1,
        description: 'Amazing food! Great ambiance! Desserts were my favorite.',
        name: 'Robin Scherbatsky',
        image: robin
    },
    {
        id: 2,
        description: 'Could the crab cakes BE any more delicious? Great place!',
        name: 'Chandler Bing',
        image: chandler
    },
    {
        id: 3,
        description: 'Great variety. Food was delicious. Friendly employees.',
        name: 'Sheldon Cooper',
        image: sheldon
    },
    {
        id: 4,
        description: 'Nice and cozy place with great food!',
        name: 'Gina Linetti',
        image: gina
    },
]

export default function Testimonials() {
  return (
    <div className='testimonials-container'>
        <h1>Testimonials</h1>
        <div className='testimonials-cards-div'>
            {
                data.map((person)=> {
                    return (<TestimonialCard img={person.image} name={person.name} desc={person.description} key={person.id} id={person.id}/>);
                })
            }
        </div>
    </div>
  )
}
