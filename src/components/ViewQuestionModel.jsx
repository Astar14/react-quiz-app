import React from 'react'

const ViewQuestionModel = ({ question, setViewQuestionModel }) => {
    console.log(question)
    return (
        <>
            <div class="overlay" id="overlay" onClick={()=>setViewQuestionModel(false)}></div>
            <div class="question-details">
                <h1>Question Details</h1>
                <div class="cross-icon" id="cross-icon" onClick={()=>setViewQuestionModel(false)}><span>&#10006;</span></div>

                <p id="view-question">{question.question}</p>
                <p>Options:</p>
                <ol type="1" id="optionsList">
                    {
                        question.answers.map((answer) => (
                            <li>{answer}</li>
                        ))
                    }
                </ol>
                <p id="view-correct-answer" ><strong>Correct Answer:</strong><span style={{color:"red", marginLeft:"5px"}}>{question.answers[question.correct]}</span></p>
            </div>
        </>
    )
}

export default ViewQuestionModel