const topicSelectReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOPIC_SELECT':
            let new_value = !state;
            return new_value;
        default: 
            return state;
    }
}

export default topicSelectReducer;