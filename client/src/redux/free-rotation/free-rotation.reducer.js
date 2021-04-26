const INITIAL_STATE = {
    championKeys: [],
    isFetching: false,
    errorMessage: undefined
}

const freeRotationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_FREE_ROTATION_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_FREE_ROTATION_SUCCESS':
            return{
                ...state,
                championKeys: action.payload,
                isFetching: false
            }
        case 'FETCH_FREE_ROTATION_FAILURE':
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
    default: 
        return state;
    }
}

export default freeRotationReducer;