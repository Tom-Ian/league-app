const INITIAL_STATE = {
    championKeys: []
}

const freeRotationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_FREE_ROTATION':
            return {
                ...state,
                championKeys: action.payload
            }
    default: 
        return state;
    }
}

export default freeRotationReducer;