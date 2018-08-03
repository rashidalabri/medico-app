import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Actions } from 'react-native-router-flux';


export default class Scan extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1, marginTop: 20 }}>
          <View style={{ alignItems: 'center', flex: 1 }}>
            <Image style={styles.logo} source={require('../../img/logo.png')} />
            <Text style={{fontSize: 20}}>Scan your bracelet's barcode</Text>
          </View>
          <View>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={styles.scanner}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />
          </View>
          <Button
            onPress={() => {alert('You have sent your location to emergency services nearby.')}}
            title="Emergency"
            color="#f44242"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    Actions.language();
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
  },
  scanner: {
    width: 'auto',
    height: 350,
  }

});