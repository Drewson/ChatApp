//String Constants
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

//Action creators
export const addMessage = (message) => ({ type: ADD_MESSAGE, message, visible: true })
export const removeMessage = (visible) => ({ type: REMOVE_MESSAGE, visible: false })

