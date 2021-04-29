import axios from 'axios';

export const fetchFreeRotaionStart = () => ({
    type: 'FETCH_FREE_ROTATION_START'
})

export const fetchFreeRotationSuccess = championKeys => ({
    type: 'FETCH_FREE_ROTATION_SUCCESS',
    payload: championKeys
})

export const fetchFreeRotationFailure = errorMessage => ({
    type: 'FETCH_FREE_ROTATION_FAILURE',
    payload: errorMessage
})

export const fetchFreeRotationStartAsync = () => {
    return dispatch => {
        dispatch(fetchFreeRotaionStart());
        axios
            .get('free-rotation')
            .then(response => dispatch(fetchFreeRotationSuccess(response.data.freeChampionIds)))
            .catch(errorMessage => dispatch(fetchFreeRotationFailure(errorMessage)))
    }
}