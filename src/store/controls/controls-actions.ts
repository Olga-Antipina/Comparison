export const SET_QUANTITY = 'SET_QUANTITY';
export const SET_HIDDEN_FLAG = 'SET_HIDDEN_FLAG';
export const SET_VISIBLE_VALUE = 'SET_VISIBLE_VALUE';
export const SET_SEARCH = 'SET_SEARCH';

export const setQuantity = (quantity: number) => ({
    type: SET_QUANTITY,
    quantity,
});

export const setHiddenFlag = (hiddenFlag: boolean) => ({
    type: SET_HIDDEN_FLAG,
    hiddenFlag,
});

export const setVisibleValue = (visibleValue: string) => ({
    type: SET_VISIBLE_VALUE,
    visibleValue,
});

export const setSearch = (search: string) => ({
    type: SET_SEARCH,
    search,
});