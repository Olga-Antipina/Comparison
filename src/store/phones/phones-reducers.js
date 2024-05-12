import { ADD_PHONES } from './phones-actions';


export const phonesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PHONES:
            return action.phones;
        default:
            return state;
    };
};