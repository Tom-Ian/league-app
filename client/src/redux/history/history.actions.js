import MatchActionTypes from './history.types';
import axios from 'axios';

export const fetchMatchStart = () => ({
    type: MatchActionTypes.FETCH_MATCH_START
})

export const fetchMatchSuccess = () => ({
    type: MatchActionTypes.FETCH_MATCH_SUCCESS,
    payload: match
})

export const fetchMatchFailure = errorMessage => ({
    type: MatchActionTypes.FETCH_MATCH_FAILURE,
    payload: errorMessage
})

export const fetchMatchStartAsync = matchId => {
    return dispatch => {

    }
}