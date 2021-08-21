export const FILL_ANSWER = 'FILL_ANSWER'
export const NEXT_ROUND = 'NEXT_ROUND'
export const ADD_GAMEID = 'ADD_GAMEID'
export const CHANGE_SCORE = 'CHANGE_SCORE'
export const SUBMIT_ROUND_SCORE = 'SUBMIT_ROUND_SCORE'

const initialState = {
    round: 0,
    rounds: [
      { name: '', place: '', fruit: '', color: '', object: '', score: 0},
      { name: '', place: '', fruit: '', color: '', object: '', score: 0},
      { name: '', place: '', fruit: '', color: '', object: '', score: 0},
      { name: '', place: '', fruit: '', color: '', object: '', score: 0},
      { name: '', place: '', fruit: '', color: '', object: '', score: 0}
    ],
    gameId: ''
}

function roundReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_ROUND: {
      return {
        ...state,
        round: state.round + 1
      }
    }
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
    case SUBMIT_ROUND_SCORE: {
      const newRound = {...state.rounds[state.round]}
      newRound.score = action.payload
      return {...state, 
        rounds: state.rounds.map((r,i) => i === state.round ? newRound : r)
      }
    }
    default: {
      return state
    }
  }
}

export default roundReducer