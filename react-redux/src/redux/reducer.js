import {
    ADD_MESSAGE
} from './actions';


const initialState = {
    messages: [
        { text: 'hello world', user: 'mr moop'}
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_MESSAGE:
            const messages = [...state.messages, { text: action.message, user: 'Jimbo' } ];
            return {...state, messages};
        default:
            return state;
    }
}