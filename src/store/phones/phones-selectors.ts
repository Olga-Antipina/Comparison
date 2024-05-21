export const selectQuantityAllPhones = (state: any) => state.phones.length;

export const selectPhones = (state: any, { quantity }: any) => {
    return {
        visiblePhones: state.phones.slice(0, quantity),
        hiddenPhones: state.phones.slice(quantity, state.phones.length),
    }
};