import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMessage } from '../redux/actions';



class ChatMessages extends Component {

    remove(){
        // this.props.dispatch(removeMessage(false))

        if(this.props.visible){
            return {
                background: 'black'
            }
        }
        
    }

    render() {
        return (
            <div className='chat-messages'>
                <ul>
                    {
                    this.props.messages.map((message, i) => {    
                        return <li key={Date.now()} className='text-bubble'>{message.text} <p className='user'> - {message.user}</p>
                        <button style={this.remove()} className='pointless' ref='pointless' onClick={() => this.remove()}>Remove</button>
                        </li>
                    })
                    }
                </ul>
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages,
        visible: state.visible
    }
}

export default connect(mapStateToProps)(ChatMessages);