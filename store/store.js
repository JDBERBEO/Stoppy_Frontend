import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import playerReducer from './playerReducer'
import playerSigninReducer from './playerReducer'
import roundReducer from './RoundReducer'

const rootReducer = combineReducers({
    playerReducer,
    playerSigninReducer,
    roundReducer
  });
  

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);

export default store;