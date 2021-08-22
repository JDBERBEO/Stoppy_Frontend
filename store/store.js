import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import playerReducer from './playerReducer'
import playerSigninReducer from './playerSigninReducer'
import roundReducer from './RoundReducer'
import getOneGameReducer from './getGameReducer'

const rootReducer = combineReducers({
    playerReducer,
    playerSigninReducer,
    roundReducer,
    getOneGameReducer
  });
  

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, middlewares);

export default store;