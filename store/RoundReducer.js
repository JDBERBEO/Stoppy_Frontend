import axios from 'axios'

export const FILL_ANSWER = 'FILL_ANSWER'
export const NEXT_ROUND = 'NEXT_ROUND'
export const ADD_GAMEID = 'ADD_GAMEID'
export const CHANGE_SCORE = 'CHANGE_SCORE'
export const SUBMIT_ROUND_SCORE_SUCCESS = 'SUBMIT_ROUND_SCORE_SUCCESS'
export const SUBMIT_ROUND_SCORE_LOADING = 'SUBMIT_ROUND_SCORE_LOADING'


const initialState = {
    round: 0,
    rounds: [
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0}
    ],
    gameId: '',
    scores: [
      { name: 50, place:50, fruit: 50, color: 50, object: 50}
    ]
}

function roundReducer(state = initialState, action) {
  switch (action.type) {
    case FILL_ANSWER: {
      const { name, value } = action.payload
      const newRound = {...state.rounds[state.round]}
       newRound[name] = value
      return {...state, 
        rounds: state.rounds.map((r,i) => i === state.round ? newRound : r)
      }
    }
    case ADD_GAMEID: {
      return {...state, 
        gameId: action.payload
      }
    }
    case NEXT_ROUND: {
      return {...state, 
        round: state.round + 1
      }
    }
    default: {
      return state
    }
  }
}

export default roundReducer