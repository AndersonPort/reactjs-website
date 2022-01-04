import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='wbs__header section__padding' id='home'>
            <div className='wbs__header-content'>
                <h1 className='gradient__text'>Let's build something amazing with GPT-3 OpenAI</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quod consequatur id velit expedita illo ea, reprehenderit blanditiis eligendi ullam officia officiis, ipsum dolorum atque voluptatibus doloribus esse nam provident?</p>

            <div className='wbs__header-content__input'>
                <input type="email" placeholder='Your Email Adress' />
                <button type='button'>Get Started</button>
            </div>

            <div className='wbs__header-content__people'>
                <img src={people} alt="people" />
                <p>1,685 people requested access a visit in last 24 hours</p>
            </div>

            <div className='wbs__header-image'>
                <img src={ai} alt="ai" />
            </div>

            </div>
        </div>
    )
}

export default Header
