const defaultState = {
    accuracy: "100",
}

const UPDATE_ACC = "UPDATE_ACC";

export const accuracyReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE_ACC:
            return {...state, accuracy: action.payload}
        default:
            return state;
    }
};