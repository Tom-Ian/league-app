import ChampionActionTypes from './champion.types';

const INITIAL_STATE = {
    currentChampion: null
}

const championReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ChampionActionTypes.SET_CURRENT_CHAMPION:
            return {
                ...state,
                currentChampion: action.payload
            }
    default: 
        return state;
    }
}

export default championReducer