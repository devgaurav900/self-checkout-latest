import { configureStore } from '@reduxjs/toolkit'; 
import reducer from "./reducer/rootReducer";

const store = configureStore({reducer});

export default store;
