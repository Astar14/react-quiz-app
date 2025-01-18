export const fetchQuestionRequest = () => ({
    type: "FETCH_QUESTION_REQUEST"
  })
  
  export const fetchQuestionSuccess = (payload) => ({
      type: "FETCH_QUESTION_SUCCESS",
      payload
  })
  
  export const fetchQuestionFailure = () => ({
      type: "FETCH_QUESTION_FAILURE"
})
  
export const addQuestionRequest = (payload) => ({
    type: "ADD_QUESTION_REQUEST",
    payload
  })
  
  export const addQuestionSuccess = (payload) => ({
      type: "ADD_QUESTION_SUCCESS",
      payload
  })
  
  export const addQuestionFailure = () => ({
      type: "ADD_QUESTION_FAILURE"
  })