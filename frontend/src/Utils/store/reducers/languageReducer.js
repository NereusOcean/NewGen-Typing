const defaultState = {
    language: 'en',
}

const UPDATE_LANGUAGE = "UPDATE_LANGUAGE";

export const languageReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE_LANGUAGE:
            return {...state, language: action.payload}
        default:
            return state;
    }
};