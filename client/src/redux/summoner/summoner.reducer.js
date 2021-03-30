import SummonerActionTypes from './summoner.types';

const INITIAL_STATE = {
    currentSummoner: null
}

const summonerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SummonerActionTypes.SET_CURRENT_SUMMONER:
            return {
                ...state,
                currentSummoner: action.payload
            }
    default: 
        return state;
    }
}

export default summonerReducer