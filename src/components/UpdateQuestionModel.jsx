import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateQuestionRequest } from '../store/questions/questionAction'

const UpdateQuestionModel = ({ setUpdateQuestionModel, selectedQuestion }) => {
    console.log(selectedQuestion)
    const [question, setQuestion] = useState(selectedQuestion.question)
    const [optionOne, setOptionOne] = useState(selectedQuestion.answers[0])
    const [optionTwo, setOptionTwo] = useState(selectedQuestion.answers[1])
    const [optionThree, setOptionThree] = useState(selectedQuestion.answers[2])
    const [optionFour, setOptionFour] = useState(selectedQuestion.answers[3])
    const [correctAnswer, setCorrectAnswer] = useState(selectedQuestion.correct)

    const dispatch = useDispatch()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(updateQuestionRequest({ id: selectedQuestion.id, question: question, answers: [optionOne, optionTwo, optionThree, optionFour], correct: correctAnswer }))
        setUpdateQuestionModel(false)
    }

    return (
        <>
            <div class="overlay" id="overlay" onClick={() => setUpdateQuestionModel(false)}></div>
            <section id="add-new-question">
                <h1>Add New Question</h1>
                <form action="" onSubmit={handleFormSubmit} class="form">
                    <div class="cross-icon" onClick={() => setUpdateQuestionModel(false)}><span>&#10006;</span></div>
                    <div id="question">
                        <h3>Question:</h3>
                        {/* <textarea name="" id="question-input"></textarea> */}
                        <input id="question-input" type="text" value={question} placeholder="Enter your questions" onChange={(e) => setQuestion(e.target.value)} />
                    </div>
                    <div class="options">
                        <h3>Option a:</h3>
                        <input id="option-a" type="text" value={optionOne} placeholder="Enter option 1" onChange={(e) => setOptionOne(e.target.value)} />
                    </div>
                    <div class="options">
                        <h3>Option b:</h3>
                        <input id="option-b" type="text" value={optionTwo} placeholder="Enter option 2" onChange={(e) => setOptionTwo(e.target.value)} />
                    </div>
                    <div class="options">
                        <h3>Option c:</h3>
                        <input id="option-c" type="text" value={optionThree} placeholder="Enter option 3" onChange={(e) => setOptionThree(e.target.value)} />
                    </div>
                    <div class="options">
                        <h3>Option d:</h3>
                        <input id="option-d" type="text" value={optionFour} placeholder="Enter option 4" onChange={(e) => setOptionFour(e.target.value)} />
                    </div>
                    <div class="options" id="correct-answer">
                        <h3>Correct Answer:</h3>
                        <input id="correct-answer-input" value={correctAnswer} type="text" placeholder="Enter the correct answer" onChange={(e) => setCorrectAnswer(e.target.value)} />
                    </div>
                    <button type="submit" id="add-question-btn">Add Question</button>
                </form>
            </section>
        </>
    )
}

export default UpdateQuestionModel