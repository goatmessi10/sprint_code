import { Avatar } from '@material-ui/core';
import React from 'react'
import './CourseCard.css';

function CourseCard(props) {

    const difficultyClass = ["font-lg"]
    difficultyClass.push(props.diffClass);
    
    return (
        <div className="course-cointainer">
                    <div style={{backgroundImage: `url(${props.backGroundImg})`}} className="course-cointainer-size course-cointainer-img">
                        <div className="course-difficulity-level">
                            <span className="font-lg orange"> .</span>
                            <span className={difficultyClass.join(' ')}> .</span>
                            <span className="font-lg"> .</span>
                
                        </div>
                        <div className="course-difficulity-name">{props.difficulityType}</div>

                        <h4 className="course-name">
                            {props.courseName}
                        </h4>

                        <div className="course-inst-cointainer">

                            <Avatar alt={props.courseName} src={props.courseImg} />

                             <div className="course-inst-head">Instructor</div>
                             <div className="course-inst-name">{props.InstName}</div>
                        </div>
                    </div>
        </div>
    )
}

export default CourseCard
