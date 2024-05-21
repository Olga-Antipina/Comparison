export const ADD_PHONES = 'ADD_PHONES';

export const addPhones = (phones: object) => {
    return {
        type: ADD_PHONES,
        phones,
    };
};