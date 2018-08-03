import React, { Component } from 'react';
import { WebView, TouchableWithoutFeedback } from 'react-native';

class Dashboard extends Component {
  render() {
    return (
        <WebView
          source={{uri: 'https://medicoapp.github.io/patientdashboard.html'}}
          style={{marginTop: 20}}
        />
    );
  }
}

export default Dashboard;