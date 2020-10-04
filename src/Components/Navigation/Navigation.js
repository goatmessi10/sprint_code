import React from 'react';
import './Navigation.css';
import About from './nav_assets/About';
import Home from './nav_assets/Home';
import Contact from './nav_assets/Contact';
import Courses from './nav_assets/Courses';
import Logo from './Image/ss3.png'
const Navigation =()=> {

    return (
        <div className='navigation'>
            <div className='navigation_logo'>
                
            <img className='logo' src={Logo} alt="logoexp"></img>
            </div>
            <div className='navigation_button'>
            <Home/>
            <Courses/>
            <About/>
            <Contact/> 
            </div>
            
        </div>
    
    )
}

export default Navigation
