import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';


const Footer = () => {
    return (
        <div className='wbs__footer section__padding'>
            <div className='wbs__footer-heading'>
                <h1 className='gradient__text'>Do you want to step in to the future before others </h1>
            </div>
            <div className='wbs__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='wbs__footer-links'>
                <div className='wbs__footer-links_logo'>
                    <img src={gpt3Logo} alt="logo" />
                    <p>Crechterwood K12 192 DK Alknjkcb, All Right Reserved</p>
                </div>
                <div className='wbs__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='wbs__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='wbs__footer-links_div'>
                    <h4>Get in Touch</h4>
                    <p>Crechterwood K12 192 DK Alknjkcb</p>
                    <p>058-1235647</p>
                    <p>info@payme.net</p>
                </div>
            </div>
            <div className='wbs__footer-copyright'>
                <p>© 2022 GPT-3. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
