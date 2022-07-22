import { REDUCER_CONSTANT } from "../constants";

const initialState = 0;

export const checkoutTotalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDUCER_CONSTANT.CHECKOUT_TOTAL.GET_CHECKOUT_TOTAL:
      return state;
    case REDUCER_CONSTANT.CHECKOUT_TOTAL.SET_CHECKOUT_TOTAL:
      return action.payload;

    default:
      return state;
  }
};
