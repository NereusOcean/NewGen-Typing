import {createStore, combineReducers} from "redux";
import { inGameReducer } from './reducers/inGameReducer';
import { speedReducer } from "./reducers/speedReducer";
import { accuracyReducer } from "./reducers/accuracyReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import { languageReducer } from "./reducers/languageReducer";

const rootReducer = combineReducers({
    inGameReducer, speedReducer, accuracyReducer,languageReducer,
});


export const store = createStore(rootReducer, composeWithDevTools());