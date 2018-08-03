import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';

class Bot2 extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <WebView
          source={{uri: 'https://medicoapp.github.io/chatbot.html'}}
          style={{marginTop: 20}}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default Bot2;