import React from 'react'
import './curriculumCard.css';


function CurriculumCard(props) {

    let curriculumItems = null;
    curriculumItems = (
        <ul>
             { 
               props.CurriculumItems.map( item => {
                   return <li> {item} </li> 
               })
             } 
        </ul>
    )


    return (
        <div className="curriculum-card-cointainer">
            <div style={{paddingLeft:'10px'}}> <strong> Week {props.week} </strong></div>
            <div style={{paddingLeft:'15px'}}> {props.heading} </div>
            {curriculumItems}
        </div>
    )
}

export default CurriculumCard
