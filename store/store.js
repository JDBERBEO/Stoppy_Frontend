import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import playerReducer from './playerReducer'

const rootReducer = combineReducers({
    playerReducer
  });
  

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);

export default store;