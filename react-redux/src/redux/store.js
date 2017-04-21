import { createStore, applyMiddleware, combineReducers } from 'redux';
import {MessagesReducer, UsersReducer, RemoveReducer } from './reducer'
import reduxLogger from 'redux-logger'

// const mockMiddleWare = store => next => action => {
//     //Log the action!
//     console.log('Action: ', action)
//     //Log the state!
//     console.log('state: ', store.getState(), 'background-color: yellow')
//     //Log the next state!
//     console.log('Next State: ', )

//     next(action);
// }

export default createStore(
    combineReducers({
        messages: MessagesReducer,
        user: UsersReducer,
        visible: RemoveReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        // mockMiddleWare,
        reduxLogger
    )
)