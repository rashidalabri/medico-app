import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';

class Bot3 extends Component {

  _handlePress() {
    alert('press');
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <WebView onPress={this._handlePress}
          source={{ uri: 'https://medicoapp.github.io/chatbot2.html' }}
          style={{ marginTop: 20 }}
        />
      </TouchableWithoutFeedback>
        );
      }
    }
    
export default Bot3;