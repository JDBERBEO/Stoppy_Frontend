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
  game: [],
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
      const newScore = scores[round]
      console.log('newscore desde actualizarScore: ', newScore)
      return {
        ...state,
        loading: false,
        game: state.game.players.map((player) => playerId === player._id ? player.ScorePerRound[round] = newScore : player.ScorePerRound[round])
      };
    }
    default: {
      return state;
    }
  }
};

export default getOneGameReducer;
