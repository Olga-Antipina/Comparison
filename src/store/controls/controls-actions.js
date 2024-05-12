export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_HIDDEN_FLAG = 'SET_HIDDEN_FLAG';
export const SET_VISIBLE_VALUE = 'SET_VISIBLE_VALUE';

export const setQuantity = (quantity) => ({
    type: SET_QUANTITY,
    quantity,
});

export const setHiddenFlag = (hiddenFlag) => ({
    type: SET_HIDDEN_FLAG,
    hiddenFlag,
});

export const setVisibleValue = (visibleValue) => ({
    type: SET_VISIBLE_VALUE,
    visibleValue,
});