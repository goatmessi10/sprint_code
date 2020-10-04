import React from 'react';
import './App.css';
import { Contact } from './Components/Contact/Contact';
import Navigation from './Components/Navigation/Navigation';

const App = ()=> {
  return (
    <div  className='App'>
     <Navigation/>
     <Contact/>
    </div>
  );
}

export default App;
