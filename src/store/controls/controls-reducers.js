import { SET_QUANTITY, SET_HIDDEN_PHONES } from "./controls-actions";

const initialState = {
    quantity: 3,
    hiddenFlag: false,
    comparison: false,
};

export const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUANTITY:
            return {
                ...state,
                quantity: action.quantity,
            };
        case SET_HIDDEN_PHONES:
            return {
                ...state,
                hiddenFlag: !action.hiddenFlag,
            };
        default:
            return state;
    };
};