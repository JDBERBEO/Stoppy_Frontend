import axios from "axios";

export const GAME_LOADING = "GAME_LOADING";
export const GAME_SUCCESS = "GAME_SUCCESS";
export const GAME_ERROR = "GAME_ERROR";
export const GAME_FINISHED = "GAME_FINISHED";
export const ACTUALIZAR_SCORE = "ACTUALIZAR_SCORE"

export function getGame(gameId) {
    console.log('gameId desde getOneGame', gameId)
  return async function (dispatch) {
    try {
      dispatch({ type: GAME_LOADING });

      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8000',
        url: `/games/game/${gameId}`,
      });
      dispatch({ type: GAME_SUCCESS, payload: data });
      console.log('data desde getgame reducer', data)
    } catch (error) {
      dispatch({ type: GAME_ERROR, payload: error });
    } finally {
      dispatch({ type: GAME_FINISHED });
    }
  };
}

const initialState = {
  game: {},
  loading: false,
  error: false,
};

const getOneGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GAME_SUCCESS: {
      return {
        ...state,
        game: action.payload,
      };
    }
    case GAME_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case GAME_FINISHED: {
      return {
        ...state,
        loading: false,
      };
    }
    case ACTUALIZAR_SCORE: {
      
      console.log('actualiza score action')
      const { playerId, round, scores } = action.payload
      console.log('playerId', playerId)
      console.log('round', round)
      console.log('scores', scores)
      const newScore = scores[round]
      console.log( 'playerid: ', playerId)
      const newPlayer = state.game.players.map((player) => player._id === playerId ? player.ScorePerRound[round] = newScore : player )
     
      console.log('newscore desde actualizarScore: ', newScore)
      console.log('playerid', state.game.players[0])
      return {
        ...state,
        loading: false,
        game: {...state.game,
        players: state.game.players.map((player) => {

          if(player._id === playerId) {
            const newPlayer = {...player}
            newPlayer.ScorePerRound[round] = newScore
            return newPlayer
          }else{
            return player
          }
        })}
      };
    }
    default: {
      return state;
    }
  }
};

export default getOneGameReducer;
