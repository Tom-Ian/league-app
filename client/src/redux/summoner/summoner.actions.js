import SummonerActionTypes from './summoner.types';

export const setCurrentSummoner = summoner => ({
    type: SummonerActionTypes.SET_CURRENT_SUMMONER,
    payload: summoner
})