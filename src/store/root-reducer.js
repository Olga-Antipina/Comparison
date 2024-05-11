import { combineReducers } from 'redux';
import { phonesReducer } from './phones/phones-reducers';
import { controlsReducer } from './controls/controls-reducers';

export const rootReducer = combineReducers({
    phones: phonesReducer,
    controls: controlsReducer,
});