import {
    ADD_MESSAGE,
    REMOVE_MESSAGE
} from './actions';

export function MessagesReducer(state = [], action){
    switch(action.type){
        case ADD_MESSAGE:
            return [...state, { text: action.message, user: 'Jimbo', visible: action.visible } ];
        default:
            return state;
    }
}

export function UsersReducer( state = [], action ) {
    switch(action.type) {
        default:
            return state;
    }
}

export function RemoveReducer( state = [ { visible: true } ], action ){
    switch(action.type){
        case REMOVE_MESSAGE:
            return [...state, {
                visible: action.visible
            }];
        default: 
            return state;
    }
}