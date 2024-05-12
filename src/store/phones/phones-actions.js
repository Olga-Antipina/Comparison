export const ADD_PHONES = 'ADD_PHONES';
// export const SET_VISIBLE_PHONES = 'SET_VISIBLE_PHONES';
// export const SET_HIDDEN_PHONES = 'SET_HIDDEN_PHONES';

export const addPhones = (phones) => {
    return {
        type: ADD_PHONES,
        phones,
    };
};

// export const setVisiblePhones = (phones) => {
//     return {
//         type: SET_VISIBLE_PHONES,
//         phones,
//     };
// };

// export const setHiddenPhones = (phones) => {
//     return {
//         type: SET_HIDDEN_PHONES,
//         phones,
//     };
// };