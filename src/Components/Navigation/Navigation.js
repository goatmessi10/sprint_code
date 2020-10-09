import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import React, { useState } from 'react';
import Logo from "./Image/ss3.png"
import './Navigation.css';


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
     
        <div>
            <div className= {state.join(' ')}>        
            <a href="" >Home</a>
            <a href="">Courses</a>
            <a href="">Contact</a>
            <a href="">About</a>
             <a   className="icon" onClick={navBarHandler}>
             <HorizontalSplitIcon/>
             </a>
             </div>
        </div>
    )
}

export default Navigation
