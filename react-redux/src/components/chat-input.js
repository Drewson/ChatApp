import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';


class ChatInput extends Component {

    componentDidMount(){
        this.refs.chatinput.focus();
    }

    chat(){
        const text = this.refs.chatinput.value;
        text && this.props.dispatch(addMessage(text))
        this.refs.chatinput.value= '';
        this.refs.chatinput.focus();
    }

    onEnterPress(e){
        e.keyCode === 13 && this.chat()
    }

    render() {
        return (
            <div className='chat-input'>
                <input onKeyDown={(e) => this.onEnterPress(e)} type='text' ref='chatinput' />
                <button onClick={() => this.chat()}>Chat</button>
            </div>
        );
    }
}

export default connect()(ChatInput);