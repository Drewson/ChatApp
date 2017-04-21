import { createStore, applyMiddleware } from 'redux';
import MessagesReducer from './reducer'
import reduxLogger from 'redux-logger'

const mockMiddleWare = store => next => action => {
    //Log the action!
    console.log('Action: ', action)
    //Log the state!
    console.log('state: ', store.getState(), 'background-color: yellow')
    //Log the next state!
    console.log('Next State: ', )

    next(action);
}

export default createStore(
    MessagesReducer,
    applyMiddleware(
        mockMiddleWare,
        reduxLogger
    )
)