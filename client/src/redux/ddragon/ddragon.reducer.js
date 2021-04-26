import DdragonActionTypes from './ddragon.types';

const INITIAL_STATE = {
    currentChampion: null,
    summonerSpells: null,
}

const ddragonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DdragonActionTypes.SET_CURRENT_CHAMPION:
            return {
                ...state,
                currentChampion: action.payload
            };
        case DdragonActionTypes.SET_SUMMONER_SPELLS:
            return {
                ...state,
                summonerSpells: action.payload
            };
    default: 
        return state;
    }
}

export default ddragonReducer