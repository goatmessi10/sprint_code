import React, { useState } from 'react';
import './CoursePopup.css';
import CurriculumCard  from './CurriculumCard';
import CourseData from './CourseData';




function CoursePopup(props) {

    
const [backGroundState, setBackGroundState] = useState(["course-curriculum-popup-backgroud"])
const[curriculumState, setcurriculumState] = useState(["course-curriculum-popup-cointainer"])
 

let WeekStructure  = null;
if(props.courseType ==="CppFoundation"){
    WeekStructure = CourseData.CppFoundation.week;
}else if(props.courseType ==="JavaFoundation"){
    WeekStructure = CourseData.JavaFoundation.week;
}else if(props.courseType ==="PythonFoundation"){
    WeekStructure = CourseData.PythonFoundation.week;
}

 

let card=null;
 
    card = WeekStructure.map((week,index)=>{
            return (
                <CurriculumCard
                    CurriculumItems = {week.day}
                    week = {index+1}
                    heading = {week.weakTarget}
                    key={index}
                    />
            )
    })
   
   
    const closePopUp=()=>{
     
        setBackGroundState(["course-curriculum-popup-backgroud","close-popup"])     

        setcurriculumState(["course-curriculum-popup-cointainer","close-popup"])
    }
  
    return (
        <div>
            <div className={backGroundState.join(' ')}  onClick={()=> closePopUp()}> </div>

            <div className={curriculumState.join(' ')} >
                <div style={{marginBottom:"10px"}}> Course Curriculum </div>
                <div className="week-cointainer">
                { card }
                </div>
                
            </div>
            
        </div>
    )
}

export default CoursePopup
