const addPointReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_POINT':
            let score = state + 1;
            return score
        default:
            return state;
    }
}

export default addPointReducer