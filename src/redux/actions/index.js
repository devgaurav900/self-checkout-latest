import { REDUCER_CONSTANT } from "../constants";
import { userSignIn, registerOpen,registerClose, tillOpen, tillClose } from "../services";

const loaderStart = (dispatch) => {
  dispatch({
    type: REDUCER_CONSTANT.LOADER_START,
    payload: true,
  });
};

const loaderOff = (dispatch) => {
  dispatch({
    type: REDUCER_CONSTANT.LOADER_OFF,
    payload: false,
  });
};

export const _userSignIn = async (dispatch, data) => {
  try {
    loaderStart(dispatch);
    var apiRes = await userSignIn(data);
    dispatch({
      type: REDUCER_CONSTANT.USER_SIGNIN,
      payload: apiRes.data,
    });
    localStorage.setItem("access-token", apiRes.data.token);
    localStorage.setItem("actual-register-id", apiRes.data.registerId);
    loaderOff(dispatch);
    return true;
  } catch (err) {
    loaderOff(dispatch);
    return false;
  }
};

export const _registerOpen = async (dispatch, data) => {
  try {
    loaderStart(dispatch);
    var apiRes = await registerOpen(data);
    dispatch({
      type: REDUCER_CONSTANT.REGISTER_OPEN,
      payload: [...apiRes.data],
    });
    loaderOff(dispatch);
    return true;
  } catch (err) {
    dispatch({
      type: REDUCER_CONSTANT.REGISTER_OPEN,
      payload: {
        data: [],
      },
    });
    loaderOff(dispatch);
    return err;
  }
};

export const _registerClose = async (dispatch, data) => {
  try {
    loaderStart(dispatch);
    var apiRes = await registerClose(data);
    dispatch({
      type: REDUCER_CONSTANT.REGISTER_CLOSE,
      payload: apiRes.data,
    });
    localStorage.setItem("register-close-id", apiRes.data.closeId);
    loaderOff(dispatch);
    return true;
  } catch (err) {
    loaderOff(dispatch);
    return false;
  }
};

export const _tillOpen = async (dispatch, data) => {
  try {
    loaderStart(dispatch);
    var apiRes = await tillOpen(data);
    dispatch({
      type: REDUCER_CONSTANT.TILL_OPEN,
      payload: apiRes.data,
    });
    localStorage.setItem("entered-till-id", apiRes.data.tillId);
    loaderOff(dispatch);
    return true;
  } catch (err) {
    loaderOff(dispatch);
    return false;
  }
};

export const _tillClose = async (dispatch, data) => {
  try {
    loaderStart(dispatch);
    var apiRes = await tillClose(data);
    dispatch({
      type: REDUCER_CONSTANT.TILL_CLOSE,
      payload: apiRes.data,
    });
    localStorage.setItem("entered-till-close-id", apiRes.data.tillId);
    loaderOff(dispatch);
    return true;
  } catch (err) {
    loaderOff(dispatch);
    return false;
  }
};

export const _getCheckoutTotal = async (dispatch) => {
  try {
    loaderStart(dispatch);
    dispatch({
      type: REDUCER_CONSTANT.CHECKOUT_TOTAL.GET_CHECKOUT_TOTAL,
    });
    loaderOff(dispatch);
  } catch (error) {
    loaderOff(dispatch);
    console.log('error getting the checkout total:', error);
    return false;
  }
}


export const _setCheckoutTotal = async (dispatch, newTotal) => {
  try {
    dispatch({
      type: REDUCER_CONSTANT.CHECKOUT_TOTAL.SET_CHECKOUT_TOTAL,
      payload: newTotal
    });
  } catch (error) {
    console.log('error getting the checkout total:', error);
    return false;
  }
}