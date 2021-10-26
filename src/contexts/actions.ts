import { CoinDataProps, ActionTypes } from './../types';
import { ACTIONS } from './stateReducer';


const setCoins = (coins: CoinDataProps[]): ACTIONS => ({type: ActionTypes.SET_COINS, payload: coins}) 
const setError = (error: string): ACTIONS => ({type: ActionTypes.SET_ERROR, payload: error}) 
const setLoading = (loading: boolean): ACTIONS => ({type: ActionTypes.SET_LOADING, payload: loading}) 


export {setCoins, setError, setLoading}