 
import { applyMiddleware, createStore } from 'redux'
import { authReducer } from './authReducer'
import { thunk } from 'redux-thunk'


export const store = createStore(authReducer,applyMiddleware(thunk))