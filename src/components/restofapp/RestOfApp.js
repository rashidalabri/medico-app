import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';

class RestOfApp extends Component {
  render() {
    return (
        <WebView
          source={{uri: 'https://medicoapp.github.io/languages.html'}}
          style={{marginTop: 20}}
        />
    );
  }
}

export default RestOfApp;

