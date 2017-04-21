import React, { Component } from 'react';
import { connect } from 'react-redux';


class ChatMessages extends Component {
    render() {
        return (
            <div className='chat-messages'>
                <ul>
                    { this.props.messages.map((message, i) => {
                        return <li key={message.text+i} className='text-bubble'>{message.text} <p className='user'> - {message.user}</p></li>
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ChatMessages);