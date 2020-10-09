import React, { useState } from 'react'
import './CoursePopup.css';
import CurriculumCard  from './CurriculumCard';
import CourseData from './CourseData'




function CoursePopup() {

let curriculumCard = ["course-curriculum-popup-backgroud"];
const [state, setstate] = useState(curriculumCard)


let WeekStructure  = null;

WeekStructure = CourseData.week; 

let card=null;
 
    card = WeekStructure.map((week,index)=>{
            return (
                <CurriculumCard
                    CurriculumItems = {week.day}
                    week = {index+1}
                    heading = {week.weakTarget}
                    />
            )
    })
   
   
    const closePopUp=()=>{
      let temp = [...state ,"close-popup"]
      console.log(state) 
      setstate(temp)     
    }
  
    return (
        <div>
            <div className={state.join(' ')}  onClick={()=>closePopUp()}>
                <div className="course-curriculum-popup-cointainer">
                    <div style={{marginBottom:"10px"}}> Course Curriculum </div>
                    <div className="week-cointainer">
                    { card }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CoursePopup
