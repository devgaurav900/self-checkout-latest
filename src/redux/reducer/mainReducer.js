import { REDUCER_CONSTANT } from "../constants";

const initialState = {
  postData: [],
};

export const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDUCER_CONSTANT.USER_SIGNIN:
      return {
        ...state,
        postData: [action.payload, ...state.postData],
      };
    case REDUCER_CONSTANT.REGISTER_OPEN:
      return {
        ...state,
        postData: [action.payload],
      };
    case REDUCER_CONSTANT.REGISTER_CLOSE:
      return {
        ...state,
        postData: [...action.payload],
      };
    case REDUCER_CONSTANT.TILL_OPEN:
      return {
        ...state,
        postData: [action.payload, ...state.postData],
      };
    case REDUCER_CONSTANT.TILL_CLOSE:
      return {
        ...state,
        postData: [action.payload, ...state.postData],
      };
    default:
      return state;
  }
};
