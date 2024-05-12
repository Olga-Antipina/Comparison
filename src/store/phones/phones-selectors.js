export const selectQuantityAllPhones = (state) => state.phones.length;

export const selectPhones = (state, { quantity }) => {
    return {
        visiblePhones: state.phones.slice(0, quantity),
        hiddenPhones: state.phones.slice(quantity, state.phones.length),
    }
};