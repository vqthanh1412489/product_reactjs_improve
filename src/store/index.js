import { createStore, compose, applyMiddleware } from 'redux';
import createReducer from './createReducer';
import reduxThunk from 'redux-thunk';

const middleware = [reduxThunk];
const composed = [];

const store = createStore(createReducer(), compose(applyMiddleware(...middleware), ...composed));
export default store;
