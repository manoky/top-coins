
import { CoinDataProps, StateProps , ActionTypes} from "../types"



export type ACTIONS =  {
    type: ActionTypes.SET_COINS,
    payload: CoinDataProps[]
} | {
    type: ActionTypes.SET_LOADING,
    payload: boolean
} | {
    type: ActionTypes.SET_ERROR,
    payload:  string
}

const reducer = (state: StateProps, action: ACTIONS): StateProps => {
    switch(action.type) {
        case 'SET_COINS':
            return {
                ...state,
                coinsData: action.payload,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}


export default reducer
