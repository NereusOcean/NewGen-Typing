const defaultState = {
    inGame: false,
}

const UPDATE = "UPDATE";

export const inGameReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE:
            return {...state, inGame: action.payload}
        default:
            return state;
    }
};