

import tokenReducer from './token'

//import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({

 reducer: { token: tokenReducer }
})

export default store
