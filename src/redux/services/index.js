const baseURL = process.env.REACT_APP_BASE_URL;

var requestHeaders = {
  Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json",
};

export const userSignIn = async (data) => {
  const response = await fetch(`${baseURL}/auth/token/SignIn`, { 
    method: 'POST',
    headers: { 
      ...requestHeaders,
      Authorization: ''
    },
    body: JSON.stringify(data)
   })
  const jsonResponse = await response.json();
  console.log('login:', jsonResponse)
  return jsonResponse;
};

export const storeOpen = async () => {
  const response = await fetch(`${baseURL}/store-open/storeId/20002`, { headers: requestHeaders })
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const storeClose = async () => {
  const response = await fetch(`${baseURL}/store-close/storeId/20002`, { headers: requestHeaders })
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const registerOpen = async () => {
  const response = await fetch(`${baseURL}/open-register/storeId/20001/registerId/104`, { headers: requestHeaders })
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const registerClose = async () => {
    const response = await fetch(`${baseURL}/close-register/registerId/104/`, { headers: requestHeaders })
    const jsonResponse =  await response.json();
    return jsonResponse;
};

export const tillOpen = async () => {
  const response = await fetch(`${baseURL}/till-Open/tillId/105/`, { headers: requestHeaders })
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const tillClose = async () => {
    const response = await fetch(`${baseURL}/till-Close/tillId/105/`, { headers: requestHeaders });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export const getCheckoutArticle = async () => {
  const response = await fetch(`${baseURL}/itemId/191050181312`, { headers: requestHeaders });
const jsonResponse = await response.json();
return jsonResponse;
}

// export const getItems = async () => {
//   let res = await axios
//     .get(`${baseURL}/itemId/1/${enteredRegisterId}`, {
//       headers: {
        
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         Accept: "application/json",
//       },
//     })
//     .then((response) => {
//       return response;
//     });
//   return res;
// };