import React from 'react';
import './App.css';
import { Contact } from './Components/Contact/Contact';
import Register from './Components/Intro/Register';
import Navigation from './Components/Navigation/Navigation';
const App = ()=> {
  return (
    <div  className='App'>
     <Navigation/>
     <Register/>
     <Contact/>
     
    </div>
  );
}

export default App;
