export const toggle = () => ({
    type: 'TOGGLE'
})

export const chooseTopic = (topic) => ({
    type: 'CHOOSE_TOPIC',
    payload: topic,
})