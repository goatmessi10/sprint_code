import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import React, { useState } from 'react';
import './Navigation.css';
import {Link} from 'react-scroll'
const Navigation =()=> {
    let navBarClass = ["topnav"]
     const [state, setstate] = useState(navBarClass)
    
    const navBarHandler = ()=>{
        let navBarChanged = [...state];
         if (navBarChanged.length===1) {
        navBarChanged.push("responsive");
        } 
        else{
        navBarChanged.pop();
            }
        setstate(navBarChanged);
    }
   
    return (
            <div className= {state.join(' ')}>        
            <div>Home</div>
            <Link to="courses-heading-div" smooth={true} duration={1000}><div>Courses</div></Link>
            <Link to="contact-div" smooth={true} duration={1000}><div>Contact</div></Link> 
            <div>About</div>
             <div  className="icon" onClick={navBarHandler}>
             <HorizontalSplitIcon/>
             </div>
             </div>
    )
}

export default Navigation
