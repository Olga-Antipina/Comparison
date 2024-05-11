export const ADD_PHONES = 'ADD_PHONES';

export const addPhones = (phones) => {
    return {
        type: ADD_PHONES,
        phones,
    };
};