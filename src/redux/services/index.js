import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

var headers = {
  Authorization: `Bearer ${localStorage.getItem("access-token")}`,
};

export const userSignIn = async (data) => {
  let res = await axios
    .post(`${baseURL}/auth/token/SignIn`, { ...data })
    .then((response) => {
      return response;
    });
  return res;
};

export const registerOpen = async () => {
  let enteredRegisterId = localStorage.getItem("entered-register-id");
  let accessToken = localStorage.getItem("access-token");
  let res = await axios
    .get(`${baseURL}/open-register/registerId/${enteredRegisterId}`, {
      headers: {
        
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return response;
    });
  return res;
};

export const registerClose = async (data) => {
  let registerCloseId = localStorage.getItem("register-close-id");
  let res = await axios
    .post(`${baseURL}/close-register/registerId/${registerCloseId}`, {
      ...data,
      headers: headers,
    })
    .then((response) => {
      return response;
    });
  return res;
};

export const tillOpen = async (data) => {
  let enteredTillOpenId = localStorage.getItem("entered-till-id");
  let res = await axios
    .post(`${baseURL}/till-Open/tillId/${enteredTillOpenId}`, {
      ...data,
      headers: headers,
    })
    .then((response) => {
      return response;
    });
  return res;
};

export const tillClose = async (data) => {
  let enteredTillCloseId = localStorage.getItem("entered-till-close-id");
  let res = await axios
    .post(`${baseURL}/till-Close/tillId/${enteredTillCloseId}`, {
      ...data,
      headers: headers,
    })
    .then((response) => {
      return response;
    });
  return res;
};
