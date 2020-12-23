const selectionReducer = (state = '', action) => {
    switch (action.type) {
        case 'SELECTION':
            let selection = action.payload
            return selection;
        default:
            return state;
    }
}

export default selectionReducer;