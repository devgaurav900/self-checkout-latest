import { REDUCER_CONSTANT } from "../constants";

const initialState = {
  isLogin: false,
  employeeInfo: {},
  storeInfo: {},
  registerInfo: {
    register: {
      registerId: 101,
    }
  },
  tillInfo: {},

};

export const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDUCER_CONSTANT.USER_SIGNIN: {
      let isLogin = false;
      if (action.payload) isLogin = true;
      return {
        ...state,
        isLogin: isLogin,
        employeeInfo: action.payload
      };
    }
    case REDUCER_CONSTANT.STORE_OPEN:
      return {
        ...state,
        storeInfo: action.payload
      };
    case REDUCER_CONSTANT.STORE_CLOSE:
      return {
        ...state,
        storeInfo: action.payload
      };
  case REDUCER_CONSTANT.REGISTER_OPEN:
    return {
      ...state,
      registerInfo: action.payload
    };
  case REDUCER_CONSTANT.REGISTER_CLOSE:
    return {
      ...state,
      registerInfo: action.payload
    };
  case REDUCER_CONSTANT.TILL_OPEN:
    return {
      ...state,
      tillInfo: action.payload
    };
  case REDUCER_CONSTANT.TILL_CLOSE:
    return {
      ...state,
      tillInfo: action.payload
    };
  default:
    return state;
  }
};
