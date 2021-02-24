import React from 'react';
import {combineReducers,createStore} from 'redux'
import historyReducer from './reducers/history'
import userReducer from './reducers/user'


const reducer=combineReducers({historyReducer,userReducer});
const store=createStore(reducer);
window.store=store;
export default store;