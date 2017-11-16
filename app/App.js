import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import { Actions } from 'react-native-router-flux';

import Scan from './scanner';
import Barcode from './barcode';




export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key="root">
            <Scene key="scanner" component={Scan} initial={true} />
            <Scene key="barcode" component={Barcode} />
          </Scene>
      </Router>
    );
  }
}