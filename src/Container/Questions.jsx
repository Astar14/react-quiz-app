import React, { useEffect, useState } from "react";
import userImage from "../assets/user_image.jpg";
import techpaathshala from "../assets/techpaathshala.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionRequest } from "../store/questions/questionAction";
import { addUserTestRequest } from "../store/userTest/userTestAction";

const Questions = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState([]);
  const [progressBar, setProgressBar] = useState(0);
  const [score, setScore] = useState(0);

  let userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))

  const maxSliderValue = 100;
  const initialSilderValue = maxSliderValue / randomQuestions.length;

  const questions = useSelector((state) => state.questions.questions);

  const handleOptionSelect = (index) => {
    const updatedOptions = [...selectedOption];
    updatedOptions[questionIndex] = index;
    setSelectedOption(updatedOptions);
    console.log(index);
    console.log("updatedoptions", updatedOptions);
  };

  const calculateScore = () => {
    let totalScore = 0;
    randomQuestions.forEach((question, index) => {
      if (selectedOption[index] === question.correct) {
        totalScore += 10;
      }
    });
    const finalScore = totalScore;
    setScore(finalScore);
    alert(`Your final score is ${finalScore} out of 100`);
    let userInfo = JSON.parse(localStorage.getItem("userLoggedIn"))
    console.log({ userInfo, totalScore, randomQuestions, selectedOption })
    dispatch(addUserTestRequest({ userInfo, totalScore, randomQuestions, selectedOption }))
  };

  const handleNextQuestion = () => {
    if (selectedOption[questionIndex] === undefined) {
      alert("Please select an answer before moving to the next question.");
      return;
    }
    if (questionIndex < randomQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setProgressBar(progressBar + 1);
    } else {
      // // const finalScore = calculateScore();
      // // setScore(finalScore);
      // alert(`Your final score is ${finalScore} out of 100`);
      calculateScore()
    }
  };

  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
    setProgressBar(progressBar - 1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionRequest());
    console.log(questions);
  }, [dispatch]);

  useEffect(() => {
    const shuffleQuestions = () => {
      let shuffledData = Array.from(questions);
      shuffledData.sort(() => Math.random() - 0.5);
      return shuffledData.slice(0, 2);
    };
    setRandomQuestions(shuffleQuestions());
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
            <li>{userInfo.fullName}</li>
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
            <div
              id="progress-bar"
              style={{
                width: `${initialSilderValue * progressBar +
                  maxSliderValue / randomQuestions.length
                  }%`,
              }}
            ></div>
          </div>
          <div className="question">
            <h2 id="question-text">
              {randomQuestions[questionIndex]?.question}
            </h2>
          </div>
          <div className="answer">
            <ol type="1" id="options-list">
              {randomQuestions[questionIndex].answers.map((option, index) => (
                <li
                  id="option-2"
                  className={`option ${selectedOption[questionIndex] === index ? "selected" : ""
                    }`}
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </li>
              ))}
            </ol>
          </div>
          {questionIndex > 0 && (
            <button onClick={handlePreviousQuestion} id="prev">
              <i className="fa-solid fa-arrow-left"></i> Previous
            </button>
          )}

          <button onClick={handleNextQuestion} id="next">
            {questionIndex === randomQuestions.length - 1
              ? "Finish"
              : "Next"}{" "}
            <i className="fa-solid fa-arrow-right"></i>
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
