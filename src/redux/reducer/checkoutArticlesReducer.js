import { REDUCER_CONSTANT } from "../constants";

const initialState = {
  "id": 0,
  "barcode": "",
  "description": "",
  "size": 0,
  "color": "",
  "active": true,
  "crt_rcrd": "",
  "modf_rcrd": "",
  "taxable": true,
  "department": {
      "id": 0,
      "dep_desc": ""
  },
  "priceList": {
      "id": 0,
      "price": 0,
      "active": true,
      "mode_rcrd": "",
      "crt_rcrd": ""
  }
};

const checkoutArticlesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REDUCER_CONSTANT.CHECKOUT_ARTICLES.GET_ARTICLE:
      return  action.payload
  default:
    return state;
  }
};

export default checkoutArticlesReducer;


