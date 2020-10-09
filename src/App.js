import React, { useEffect, useRef } from 'react';
import './App.css';
import { Contact } from './Components/Contact/Contact';

import Navigation from './Components/Navigation/Navigation';

import Courses from './Courses';
import Introduction from './Introduction';
import CourseBanner from './Assets/templatesample/courseBanner_3.jpg';
import CoursePopup from './Components/CoursePopup/CoursePopup';
import Slider  from './Components/Slider';

const App = ()=> {


  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "//code.jivosite.com/widget/RK8KelSDZK";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);


  return (
    <div  className='App'>

        <CoursePopup/>        
        <Navigation/>
        <Introduction/>
        <div id="courses-heading-div" className="courses-heading">
          <img className="courseHeadingBanner" alt ="course banner" src={CourseBanner}/>

          <h2 className="courseHeadingBannerName">Courses we offer</h2></div>
        <div className="courses-cointainer">  <Courses/>  </div>
        <Slider/>
        <Contact/>
     
    </div>
  );
}

export default App;
