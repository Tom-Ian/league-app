const INITIAL_STATE = {
    champions: null
}

const championsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ChampionsActionTypes.SET_CHAMPIONS:
            return {
                ...state,
                champions: action.payload
            }
    default: 
        return state;
    }
}

export default summonerReducer