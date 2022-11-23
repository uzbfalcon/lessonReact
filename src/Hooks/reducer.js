export const reduce = (state, action) => {
    switch (action.type) {
        case 'plus': return { count: state.count + 1 };
        case 'minus': return { count: state.count - 1 };
        case 'byamount': return { count: state.count + action.payload };
        default:
            return state;
    }
}