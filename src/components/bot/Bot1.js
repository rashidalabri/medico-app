import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux'

class Bot1 extends Component {

  onPress() {
    Actions.chat();
  }
  render() {

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <WebView onPress={this.onPress}
          source={{ uri: 'https://medicoapp.github.io/waitingconnectionchatbot.html' }}
        style={{ marginTop: 20 }}
        />
      </TouchableWithoutFeedback>
    );
  }
}

export default Bot1;