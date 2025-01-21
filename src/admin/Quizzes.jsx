import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteQuestionRequest, fetchQuestionRequest } from '../store/questions/questionAction'
import { FaRegEye } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import ViewQuestionModel from '../components/ViewQuestionModel';
import { useState } from 'react';
import AddQuestionModel from '../components/AddQuestionModel';
import Sidebar from '../components/Sidebar';
import UpdateQuestionModel from '../components/UpdateQuestionModel';
import Header from '../components/Header';

const Quizzes = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [viewQuestionModel, setViewQuestionModel] = useState(false)
  const [addQuestionModel, setAddQuestionModel] = useState(false)
  const [updateQuestionModel, setUpdateQuestionModel] = useState(false)

  const questions = useSelector((state) => state.questions.questions)
  const dispatch = useDispatch()

  const handleViewQuestionModel = (question) => {
    setSelectedQuestion(question)
    setViewQuestionModel(!viewQuestionModel)
  }


  const handleDelete = (id) => {
    console.log(id)
    if (confirm("Are you sure want to delete this question ?")) {
      dispatch(deleteQuestionRequest(id))
      // return
    }
  }

  const handleUpdateQuestionModel = (question) => {
    setSelectedQuestion(question)
    console.log(selectedQuestion)
    setUpdateQuestionModel(!updateQuestionModel)
  }

  useEffect(() => {
    dispatch(fetchQuestionRequest())
  }, [dispatch])

  return (
    <>
      {/* <header id="admin-header">
        <div id="tech-logo">
          <i class="hamburger fa-solid fa-bars" onclick="sidebarToggle()"></i>
          <img src="assets/techpaathshala.svg" alt="techpaathsala" />
        </div>
        <div class="right-side-info">
          <ul>
            <li>Welcome,</li>
            <li>Admin</li>
            <img
              id="popup"
              onclick="popUpLogout()"
              src="assets/user_image.jpg"
              alt="userimage"
            />
          </ul>
        </div>
      </header> */}

      <Header/>

      <div class="admin-main-ciontainer">

        <Sidebar />

        <section class="right-sidebar main-content">
          <div class="title">
            <h1>All Quiz Questions</h1>
          </div>
          <button id="add-new-question-btn" onClick={() => setAddQuestionModel(true)}>Add new Question</button>
          <table class="table" id="question-table">
            <tr>
              <th>Sr.No</th>
              <th>Questions</th>
              <th>Actions</th>
            </tr>

            {
              questions?.map((question, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{question.question}</td>
                  <td >
                    <FaRegEye onClick={() => handleViewQuestionModel(question)} style={{ marginRight: "10px", color: "blue", cursor: "pointer" }} />
                    <FaPen style={{ marginRight: "10px", color: "purple", cursor: "pointer" }} onClick={() => handleUpdateQuestionModel(question)} /> <FaTrashCan style={{ color: "red", cursor: "pointer" }} onClick={() => handleDelete(question.id)} />
                  </td>
                </tr>
              ))
            }


          </table>
        </section>
      </div>

      {
        viewQuestionModel && <ViewQuestionModel question={selectedQuestion} setViewQuestionModel={setViewQuestionModel} />
      }
      {
        addQuestionModel && <AddQuestionModel setAddQuestionModel={setAddQuestionModel} />
      }


      {
        updateQuestionModel && <UpdateQuestionModel selectedQuestion={selectedQuestion} setUpdateQuestionModel={setUpdateQuestionModel} />
      }





      <div id="logout-container">
        <p id="my-name">Hii, Admin</p>
        <p id="my-email">amit2546@gmail.com</p>
        <button id="logout-button" onclick="logout()">Logout</button>
      </div>
    </>
  )
}

export default Quizzes