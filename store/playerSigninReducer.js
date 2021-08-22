import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SIGNIN_LOADING = 'SIGNIN_LOADING'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'
export const SIGNIN_FINISHED = 'SIGNIN_FINISHED'

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('token', value)
        const token = await AsyncStorage.getItem('token')

    } catch (e) {
      console.log('e desde storeData', e)
    }
  }

export function playerSignin (email, password, navigation) {
    return async function (dispatch) {
        try {
            dispatch({type: SIGNIN_LOADING})
            const { data } =await axios ({
                method: 'POST',
                baseURL: 'http://localhost:8000',
                url:'/players/signin',
                data: { email, password}
            })
            await storeData(data.token)
            console.log('data de signin: ', data)
            navigation.navigate('gameSelection')
            dispatch({type: SIGNIN_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: SIGNIN_ERROR, payload: error})        
        } finally {
            dispatch ({type: SIGNIN_FINISHED})
        }
    }
}

const initialState = {
    name:'',
    lastname: '',
    password: '',
    signinFormLoading: false,
    signinFormError: false,
    currentPlayerId: ""
}

function playerSigninReducer(state = initialState, action) {

  switch (action.type) {
    case SIGNIN_LOADING:{
      return {
        ...state,
        signinFormLoading: true
      }
    } case SIGNIN_SUCCESS: {
      console.log('signIn Success: ', action.payload)
      return {
        ...state,
        signinFormLoading: false,
        currentPlayerId: action.payload.playerId
      }
    } case SIGNIN_ERROR: {
      return {
        ...state,
        signFormError: true
      }
    } case SIGNIN_FINISHED : {
      return {
        ...state,
        signFormLoading: false,
      }
    }
    default: {
      return state
    }
  }
}

export default playerSigninReducer

