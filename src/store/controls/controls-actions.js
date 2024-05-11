export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_HIDDEN_PHONES = 'SET_HIDDEN_PHONES';

export const setQuantity = (quantity) => ({
    type: SET_QUANTITY,
    quantity,
});

export const setHiddenPhones = (hiddenFlag) => ({
    type: SET_HIDDEN_PHONES,
    hiddenFlag,
});