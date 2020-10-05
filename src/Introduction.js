import React from 'react'
import './Introduction.css'
import Register from './Components/Intro/Register';
import introImage from './Assets/images/main.gif'


function Introduction() {
    return (
        <div>
            
            <div className="introduction-cointainer">
                <div className="introduction-cointainer-text">
                    <h3 class="introduction-text-heading">Think twice Code once</h3>
                    
                    <Register/>
                    
                </div>
                <div className="introduction-cointainer-image" >
                    <img src={introImage} alt="coding"></img>
                </div>
            </div>

        </div>
    )
}

export default Introduction
