export const toggle = () => ({
    type: 'TOGGLE'
})

export const chooseTopic = (topic) => ({
    type: 'CHOOSE_TOPIC',
    payload: topic,
})

export const topicSelect = () => ({
    type: 'TOPIC_SELECT',
})

export const addPoint = () => ({
    type: 'ADD_POINT',
})

export const selection = (selection) => ({
    type: 'SELECTION',
    payload: selection
})

