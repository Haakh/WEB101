import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Welcome extends Component {
  constructor(){
    super();
  }

  onForward = () =>{
    console.log("Touched 234");
    this.props.navigator.push({index:2});
  }

  render() {
    var that = this;
    // console.log("Welcome");
    return (

        <TouchableHighlight onPress={this.onForward}>
          <Text>Tap me to LogIn</Text>
        </TouchableHighlight>
    )
  }
}
