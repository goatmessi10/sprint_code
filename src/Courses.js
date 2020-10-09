import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './CourseCard.css';
import cardDetails from './Data';


export default function Courses(props) {
const [cardContent,setCardContent] = useState({cardDetails})

  return(

    <div className="course-card-display" >

        <CourseCard courseName = {cardContent.cardDetails.courseName.pythonMl} courseImg={cardContent.cardDetails.instImg.sumit} 
        InstName = {cardContent.cardDetails.instName.sumit} backGroundImg={cardContent.cardDetails.cardBackgroundImg.backGroudPythonBlueImg} 
        diffClass = {"orange"} difficulityType={cardContent.cardDetails.difficulity.medium} courseType="PythonFoundation"></CourseCard>

        <CourseCard courseName = {cardContent.cardDetails.courseName.javaDs} courseImg={cardContent.cardDetails.instImg.naresh} 
        InstName = {cardContent.cardDetails.instName.naresh} backGroundImg={cardContent.cardDetails.cardBackgroundImg.backGroudJavaRedImg} 
        diffClass = {"orange"} difficulityType={cardContent.cardDetails.difficulity.medium} courseType="JavaFoundation" ></CourseCard>

        <CourseCard courseName = {cardContent.cardDetails.courseName.cppDs} courseImg={cardContent.cardDetails.instImg.sagar} 
        InstName = {cardContent.cardDetails.instName.sagar} backGroundImg={cardContent.cardDetails.cardBackgroundImg.backGroudCppBlueImg} 
        diffClass = {"orange"} difficulityType={cardContent.cardDetails.difficulity.medium} courseType="CppFoundation"></CourseCard>

        <CourseCard courseName = {cardContent.cardDetails.courseName.cppFund} courseImg={cardContent.cardDetails.instImg.sagar} 
        InstName = {cardContent.cardDetails.instName.sagar} backGroundImg={cardContent.cardDetails.cardBackgroundImg.backGroudCppGreenImg} 
        diffClass = {""} difficulityType={cardContent.cardDetails.difficulity.beginner} courseType="CppFoundation"></CourseCard>

        <CourseCard courseName = {cardContent.cardDetails.courseName.javaFund} courseImg={cardContent.cardDetails.instImg.naresh} 
        InstName = {cardContent.cardDetails.instName.naresh} backGroundImg={cardContent.cardDetails.cardBackgroundImg.backGroudJavaPurpleImg} 
        diffClass = {""} difficulityType={cardContent.cardDetails.difficulity.beginner} courseType="JavaFoundation"></CourseCard>

        <CourseCard courseName = {cardContent.cardDetails.courseName.pythonFund} courseImg={cardContent.cardDetails.instImg.sumit} 
        InstName = {cardContent.cardDetails.instName.sumit} backGroundImg={cardContent.cardDetails.cardBackgroundImg.backGroudPythonYellowImg} 
        diffClass = {""} difficulityType={cardContent.cardDetails.difficulity.beginner} courseType="PythonFoundation"></CourseCard>

    </div>
        
  );
}
