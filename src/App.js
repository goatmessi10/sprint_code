import React, { useEffect } from 'react';
import './App.css';
import { Contact } from './Components/Contact/Contact';

import Navigation from './Components/Navigation/Navigation';

import Courses from './Courses';
import Introduction from './Introduction'
const App = ()=> {


  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "//code.jivosite.com/widget/RK8KelSDZK";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);



  return (
    <div  className='App'>
        <Navigation/>
        <Introduction/>
        <div className="courses-heading"><h2>Courses we offer</h2></div>
        <div className="courses-cointainer">  <Courses/>  </div>
      
        <Contact/>
     
    </div>
  );
}

export default App;
