export const FILL_ANSWER = 'FILL_ANSWER'
export const NEXT_ROUND = 'NEXT_ROUND'
export const ADD_GAMEID = 'ADD_GAMEID'
export const CHANGE_SCORE = 'CHANGE_SCORE'
export const SUBMIT_ROUND_SCORE_SUCCESS = 'SUBMIT_ROUND_SCORE_SUCCESS'
export const SUBMIT_ROUND_SCORE_LOADING = 'SUBMIT_ROUND_SCORE_LOADING'

export function sendScore(roundScore, playerId) {
  return async function (dispatch) {
      // try {
          dispatch({type: SUBMIT_ROUND_SCORE_LOADING})
          const { data } =await axios ({
              method: 'POST',
              baseURL: 'http://localhost:8000',
              url:'/games/score/roundScore',
              data: { roundScore, playerId}
          })
          dispatch({type: SUBMIT_ROUND_SCORE_SUCCESS, payload: data})
      // } catch (error) {
      //     dispatch({type: SUBMIT_ROUND_SCORE_SUCCESS, payload: error})        
      // } finally {
      //     dispatch ({type: SUBMIT_ROUND_SCORE_SUCCESS})
      // }
  }
}

const initialState = {
    round: 0,
    rounds: [
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0},
      { name: '', place: '', fruit: '', color: '', object: '', roundScore: 0}
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
    case SUBMIT_ROUND_SCORE_SUCCESS: {
      const newRound = {...state.rounds[state.round]}
      console.log('newRound: ', newRound)
      newRound.roundScore = action.payload
      console.log('newRound.score', newRound.roundScore)
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