import React, { useEffect, useState } from "react";
import userImage from "../assets/user_image.jpg";
import techpaathshala from "../assets/techpaathshala.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionRequest } from "../store/questions/questionAction";

const Questions = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = useSelector((state) => state.questions.questions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionRequest());
    console.log(questions);
  }, [dispatch]);

  useEffect(() => {
    const shuffleQuestions = () => {
      let shuffledData = Array.from(questions);
      shuffledData.sort(() => Math.random() - 0.5);
      return shuffledData.slice(0, 10);
    };
    // console.log(shuffleQuestions())
    setRandomQuestions(shuffleQuestions());
    // console.log(randomQuestions);
  }, [questions]);
  console.log({ randomQuestions });
  return (
    <>
      <header id="header">
        <div id="tech-logo">
          <a href="startquiz.html">
            <img src={techpaathshala} alt="techpaathsala" />
          </a>
        </div>

        <div className="right-side-info">
          <ul>
            <a href="startquiz.html">
              <li></li>
            </a>
            <li>Welcome,</li>
            <li>A</li>
            <img id="popup" src={userImage} alt="userimage" />
          </ul>
        </div>
      </header>

      {randomQuestions.length ? (
        <section id="question-answer">
          <h1 id="question-number">
            Question {questionIndex + 1} of {randomQuestions.length}
          </h1>
          <div id="progressbar-container">
            <div id="progress-bar"></div>
          </div>
          <div className="question">
            <h2 id="question-text">
              {randomQuestions[questionIndex]?.question}
            </h2>
          </div>
          <div className="answer">
            <ol type="1" id="options-list">
              <li id="option-1"></li>
              <li id="option-2"></li>
              <li id="option-3"></li>
              <li id="option-4"></li>
            </ol>
          </div>
          <button onclick="previousQuestion()" id="prev">
            <i className="fa-solid fa-arrow-left"></i> Previous
          </button>
          <button onclick="nextQuestion()" id="next">
            Next <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
      ) : null}

      <div id="logout-container">
        <p id="my-name">Hii, Amit</p>
        <p id="my-email">amit2546@gmail.com</p>
        <button id="logout-button" onclick="logout()">
          Logout
        </button>
        <button id="logout-button">Edit</button>
      </div>
    </>
  );
};

export default Questions;
