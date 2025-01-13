const initialState = {
  questions: [],
};

const questionReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_QUESTION_SUCCESS":
      return { ...state, questions: action.payload };
    case "ADD_QUESTION_SUCCESS":
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default questionReducer;
