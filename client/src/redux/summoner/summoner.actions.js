import SummonerActionTypes from './summoner.types';
import axios from 'axios';

export const fetchCurrentSummonerStart = () => ({
    type: SummonerActionTypes.FETCH_CURRENT_SUMMONER_START
})

export const fetchCurrentSummonerSuccess = summoner => ({
    type: SummonerActionTypes.FETCH_CURRENT_SUMMONER_SUCCESS,
    payload: summoner
})

export const fetchCurrentSummonerFailure = errorMessage => ({
    type: SummonerActionTypes.FETCH_CURRENT_SUMMONER_FAILURE,
    payload: errorMessage
})

export const fetchRecentAramStart = () => ({
    type: SummonerActionTypes.FETCH_RECENT_ARAM_START
})

export const fetchRecentAramSuccess = recentAramGames => ({
    type: SummonerActionTypes.FETCH_RECENT_ARAM_SUCCESS,
    payload: recentAramGames
})

export const fetchRecentAramFailure = errorMessage => ({
    type: SummonerActionTypes.FETCH_RECENT_ARAM_FAILURE,
    payload: errorMessage
})

export const clearAramDetails = () => ({
    type: SummonerActionTypes.CLEAR_ARAM_DETAILS
})

export const fetchCurrentSummonerStartAsync = searchName => {
    return dispatch => {
        //fetch current summoner start
        dispatch(fetchCurrentSummonerStart());
        axios
            .get('/summoner', {
                params: { searchName }
            })
            .then(response => {
                dispatch(fetchCurrentSummonerSuccess(response.data));
                //fetch aram
                dispatch(fetchRecentAramStartAsync(response.data.accountId));
            })
            .catch(errorMessage => dispatch(fetchCurrentSummonerFailure(errorMessage)));
    }
}

export const fetchRecentAramStartAsync = accountId => {
    return dispatch => {
        dispatch(fetchRecentAramStart());
        axios
        .get('/aram', {
            params: { accountId }
        })
        .then(response => {
            dispatch(fetchRecentAramSuccess(response.data.matches));
        })
        .catch(errorMessage => dispatch(fetchRecentAramFailure(errorMessage)));
    }
}
