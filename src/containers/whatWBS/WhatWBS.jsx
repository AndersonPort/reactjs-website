import React from 'react';
import { Feature } from '../../components'
import './whatWBS.css';

const WhatWBS = () => {
    return (
        <div className='wbs__whatwbs section__margin' id='whtgpt3'>
            <div className='wbs__whatwbs-feature'>
                <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
            </div>
            <div className='wbs__whatwbs-heading'>
                <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
                <p>Explore the library</p>
            </div>
            <div className='wbs__whatwbs-container'>
                <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
                <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    )
}

export default WhatWBS
