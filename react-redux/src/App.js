import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './redux/store';

import './App.css';
import ChatMessages from './components/chat-messages';
import ChatInput from './components/chat-input';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-window">
          <div className='sidebar'></div>
          <div className='chat-window'>
            <ChatMessages />
            <ChatInput />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
