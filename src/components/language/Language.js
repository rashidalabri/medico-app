import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';

class Language extends Component {
  render() {
    return (
        <WebView
          source={{uri: 'https://medicoapp.github.io/languages.html'}}
          style={{marginTop: 20}}
        />
    );
  }
}

export default Language;

