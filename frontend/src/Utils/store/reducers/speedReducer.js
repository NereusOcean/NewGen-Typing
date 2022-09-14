const defaultState = {
    SPM: "0",
}

const UPDATE_SPM = "UPDATE_SPM";

export const speedReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE_SPM:
            return {...state, SPM: action.payload}
        default:
            return state;
    }
};