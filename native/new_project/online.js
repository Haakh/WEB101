import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Online extends Component {

  onForward() {
    this.props.navigator.push({id: 2});
  }

  render() {
    return (
      <View>
        <Text>Online</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to LogIn</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
