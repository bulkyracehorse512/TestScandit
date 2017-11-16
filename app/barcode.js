import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class Barcode extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <Text>{this.props.barcode}</Text>
        <TouchableOpacity
          style={{
              backgroundColor: 'green',
              marginTop: 5,
          }}
          onPress={ () => {Actions.scanner()}}
        >
          <Text>Go to scanner</Text>
        </TouchableOpacity>
      </View>
    );
  }

}