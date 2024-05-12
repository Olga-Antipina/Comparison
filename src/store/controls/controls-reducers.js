import { SET_QUANTITY, SET_HIDDEN_FLAG, SET_VISIBLE_VALUE } from "./controls-actions";

const initialState = {
    quantity: 3,
    hiddenFlag: false,
    visibleValue: '',
    comparison: false,
};

export const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUANTITY:
            return {
                ...state,
                quantity: action.quantity,
            };
        case SET_HIDDEN_FLAG:
            return {
                ...state,
                hiddenFlag: !action.hiddenFlag,
            };
        case SET_VISIBLE_VALUE:
            return {
                ...state,
                visibleValue: action.visibleValue,
            };
        default:
            return state;
    };
};