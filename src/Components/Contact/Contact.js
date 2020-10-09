import React from 'react'
import './Contact.css'
import { AboutUs } from './AboutUs';
import { Intro } from './Intro';
import { Reach } from './Reach';
export const Contact = () => {
    return (
        <div className='main-div' >
            <div className='warpper-div'>
            <Intro/> 
            <AboutUs/> 
            <Reach/>
             </div>
        </div>
     
    )
}
