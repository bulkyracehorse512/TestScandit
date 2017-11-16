import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import {
  ScanditModule,
  Barcode,
  BarcodePicker,
  ScanSettings,
} from 'react-native-scandit';

import { Actions } from 'react-native-router-flux';


ScanditModule.setAppKey('USE APP KEY');


export default class Scan extends Component {

  componentWillMount() {
    this.settings = new ScanSettings();
    this.settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.UPCE, true);
  }

  componentDidMount() {
    this.scanner.setVibrateEnabled(false);
    this.scanner.startScanning();
  }

  componentWillUnmount() {
    this.scanner.stopScanning();
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <BarcodePicker
          onScan={(session) => { this.onScan(session) }}
          scanSettings= { this.settings }
          ref={(scan) => { this.scanner = scan }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }

  onScan(session) {
    Actions.barcode({barcode: session.newlyRecognizedCodes[0].data})
  }
}