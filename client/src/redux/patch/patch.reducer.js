const INITIAL_STATE = {
    currentPatch: ''
}

const patchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PATCH':
            return {
                ...state,
                currentPatch: action.payload
            }
    default: 
        return state;
    }
}

export default patchReducer;