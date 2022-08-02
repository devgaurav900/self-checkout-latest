import { REDUCER_CONSTANT } from "../constants";
import {
  userSignIn,
  storeOpen,
  storeClose,
  registerOpen,
  registerClose,
  tillOpen,
  tillClose,
  getCheckoutArticle,
} from "../services";

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
    const apiRes = await userSignIn(data);
    console.log('login response', apiRes);
    dispatch({
      type: REDUCER_CONSTANT.USER_SIGNIN,
      payload: apiRes.employee,
    });
    localStorage.setItem("access-token", await apiRes.token);
    loaderOff(dispatch);
    return true;
  } catch (err) {
    loaderOff(dispatch);
    console.log('login error:', err)
    return false;
  }
};

export const _storeOpen = async (dispatch) => {
  try {
    const apiRes = await storeOpen();
    dispatch({
      type: REDUCER_CONSTANT.STORE_OPEN,
      payload: apiRes,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const _storeClose = async (dispatch) => {
  try {
    var apiRes = await storeClose();
    dispatch({
      type: REDUCER_CONSTANT.STORE_CLOSE,
      payload: apiRes,
    });
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
};

export const _registerOpen = async (dispatch) => {
  try {
    var apiRes = await registerOpen();
    dispatch({
      type: REDUCER_CONSTANT.REGISTER_OPEN,
      payload: apiRes,
    });
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
};

export const _registerClose = async (dispatch) => {
  try {
    var apiRes = await registerClose();
    dispatch({
      type: REDUCER_CONSTANT.REGISTER_CLOSE,
      payload: apiRes,
    });
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
};

export const _tillOpen = async (dispatch) => {
  try {
    loaderStart(dispatch);
    var apiRes = await tillOpen();
    dispatch({
      type: REDUCER_CONSTANT.TILL_OPEN,
      payload: apiRes,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const _tillClose = async (dispatch) => {
  try {
    var apiRes = await tillClose();
    dispatch({
      type: REDUCER_CONSTANT.TILL_CLOSE,
      payload: apiRes,
    });
    return true;
  } catch (err) {
    console.log(err)
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
    console.log("error getting the checkout total:", error);
    return false;
  }
};

export const _getCheckoutArticle = async (dispatch) => {
  try {
    loaderStart(dispatch);
    const article = await getCheckoutArticle();
    console.log('article/item:', article)
    dispatch({
      type: REDUCER_CONSTANT.CHECKOUT_ARTICLES.GET_ARTICLE,
      payload: article,
    })
  } catch (error) {
    loaderOff(dispatch);
    console.log("error getting the checkout article:", error);
    return false;
  }
}

export const _setCheckoutTotal = async (dispatch, newTotal) => {
  try {
    dispatch({
      type: REDUCER_CONSTANT.CHECKOUT_TOTAL.SET_CHECKOUT_TOTAL,
      payload: newTotal,
    });
  } catch (error) {
    console.log("error getting the checkout total:", error);
    return false;
  }
};
