import ChampionActionTypes from './champion.types';

export const setCurrentChampion = champion => ({
    type: ChampionActionTypes.SET_CURRENT_CHAMPION,
    payload: champion
})