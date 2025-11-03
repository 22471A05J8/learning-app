import React from "react";
import { FaJava, FaPython, FaHtml5 } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './Quiz.css';
import DashboardLayout from "./Dashboard";

export default function HtmlCard() {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate("/Htmlquiz"); 
  };
const goToQuizz = () => {
    navigate("/Java"); 
  };
const goToQ = () => {
    navigate("/C"); 
  };
  const goTo = () => {
    navigate("/python"); 
  };
  return (<><DashboardLayout/>
  <div className="fl">
    <div className="card">
      <div className="icon-container">
        <FaHtml5 className="html-icon" />
      </div>
      <h3 className="card-title">Html Quiz</h3>
      <p className="card-description">
        Test your HTML knowledge with 20 interactive questions.
      </p>
      <button className="start-button" onClick={goToQuiz}>
        Start Quiz
      </button>
    </div>
    
    
    <div className="card">
      <div className="icon-container">
        <FaJava className="html-icon" />
      </div>
      <h3 className="card-title">java Quiz</h3>
      <p className="card-description">
        Test your JAVA knowledge with 20 interactive questions.
      </p>
      <button className="start-button" onClick={goToQuizz}>
        Start Quiz
      </button>
    </div>
    
    
    <div className="card">
      <div className="icon-container">
        <FaJava className="html-icon" />
      </div>
      <h3 className="card-title">C</h3>
      <p className="card-description">
        Test your C knowledge with 20 interactive questions.
      </p>
      <button className="start-button" onClick={goToQ}>
        Start Quiz
      </button>
    </div>
    
    
    <div className="card">
      <div className="icon-container">
        <FaPython className="html-icon" />
      </div>
      <h3 className="card-title">Python</h3>
      <p className="card-description">
        Test your python knowledge with 20 interactive questions.
      </p>
      <button className="start-button" onClick={goTo}>
        Start Quiz
      </button>
    </div></div></>
  );
}
