import SummonerActionTypes from './summoner.types';

const INITIAL_STATE = {
    currentSummoner: null,
    recentAram: {
        overview: null, 
        details: null
    },
    isFetchingCurrentSummoner: false,
    isFetchingRecentAram: false,
    errorFetchingSummoner: undefined,
    errorFetchingAram: undefined
}

const summonerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SummonerActionTypes.FETCH_CURRENT_SUMMONER_START:
            return {
                ...state,
                isFetchingCurrentSummoner: true
            }
        case SummonerActionTypes.FETCH_CURRENT_SUMMONER_SUCCESS:
            return {
                ...state,
                isFetchingCurrentSummoner: false,
                currentSummoner: action.payload
            } 
        case SummonerActionTypes.FETCH_CURRENT_SUMMONER_FAILURE:
            return {
                ...state,
                isFetchingCurrentSummoner: false,
                errorFetchingSummoner: action.payload
            }
        case SummonerActionTypes.FETCH_RECENT_ARAM_START:
            return{
                ...state,
                isFetchingRecentAram: true
            }
        case SummonerActionTypes.FETCH_RECENT_ARAM_SUCCESS:
            return {
                ...state,
                isFetchingRecentAram: false,
                recentAram: action.payload
            }
        case SummonerActionTypes.FETCH_RECENT_ARAM_FAILURE:
            return {
                ...state,
                isFetchingRecentAram: false,
                errorFetchingAram: action.payload
            }
    default: 
        return state;
    }
}

export default summonerReducer