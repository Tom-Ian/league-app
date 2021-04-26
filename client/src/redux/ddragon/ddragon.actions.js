import DdragonActionTypes from './ddragon.types';

export const setCurrentChampion = champion => ({
    type: DdragonActionTypes.SET_CURRENT_CHAMPION,
    payload: champion
})

export const setSummonerSpells = data => ({
    type: DdragonActionTypes.SET_SUMMONER_SPELLS,
    payload: data
})