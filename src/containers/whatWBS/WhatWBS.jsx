import React from 'react';
import { Feature } from '../../components'
import './whatWBS.css';

const WhatWBS = () => {
    return (
        <div className='wbs__whatwbs section__margin' id='whtwbs'>
            <div className='wbs__whatwbs-feature'>
                <Feature />
            </div>
            <div className='wbs__whatwbs-heading'>
                <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className='wbs__whatwbs-container'>
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    )
}

export default WhatWBS
