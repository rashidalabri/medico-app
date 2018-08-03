import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';

class Chat extends Component {

  render() {
    return (
        <WebView
          source={{uri: 'https://medicoapp.github.io/index.html'}}
          style={{marginTop: 20}}
        />
    );
  }
}

export default Chat;