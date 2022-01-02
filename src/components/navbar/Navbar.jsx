import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';


// BEM -> Block Element Modifier method

const Navbar = () => {
    return (
        <div className='wbs__navbar'>
            <div className='wbs__navbar-links'>
                <div className='wbs__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
