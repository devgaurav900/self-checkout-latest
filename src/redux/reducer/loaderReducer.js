import { REDUCER_CONSTANT } from "../constants";

const initialState = false;

export const loaderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDUCER_CONSTANT.LOADER_START:
      return action.payload;
    case REDUCER_CONSTANT.LOADER_OFF:
      return action.payload;

    default:
      return state;
  }
};
