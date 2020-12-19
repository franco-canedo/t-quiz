const chooseTopicRecuder = (state = "", action) => {
    switch (action.type) {
        case 'CHOOSE_TOPIC':
            return action.payload;
        default:
            return state;
    }
}

export default chooseTopicRecuder;