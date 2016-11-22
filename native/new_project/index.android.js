/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 /*  // Toggle the state every second
   // setInterval(() => {
   //   this.setState({ showText: !this.state.showText });
   // }, 1000);*/


   /*    // let pic = {
       //   uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
       // };


       // return (
       //   <View style={{flex:1, flexDirection: 'column' , justifyContent: 'center',}}>
       //   <Image source={this.state.showText ? pic : null} style={{width: 60, height: 60}}/>
       //   <Text style = {styles.bigblue,{width: 60, height: 60, backgroundColor:'grey'}}> Hello There </Text>
       //   <TextInput style={{height: 40}} placeholder="Type here to translate!"
       //       onChangeText={(text) => this.setState({newtext:text})}
       //     />
       //     <Text style={{padding: 10, fontSize: 42}}>
       //       {this.state.newtext.split(' ').map((word) => word && '🍕').join(' ')}
       //     </Text>
       //     <MyScene />
       //   </View>
       // );
   */


   /*        // <MyScene
           //   title={route.title}
           //
           //   // Function to call when a new scene should be displayed
           //   onForward={ () => {
           //     const nextIndex = route.index + 1;
           //     navigator.push({
           //       title: 'Scene ' + nextIndex,
           //       index: nextIndex,
           //     });
           //   }}
           //
           //   // Function to call to go back to the previous scene
           //   onBack={() => {
           //     if (route.index > 0) {
           //       navigator.pop();
           //     }
           //   }}
           // />
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Navigator
} from 'react-native';

import Welcome from './welcome';
import Online from './online';
import ChatBox from './chat-box';


class HelloWorldApp extends Component {
  constructor() {
    super();
    }


  // onLoginHandler(x){
  //   this.props.navigator.push({index:2})
  // }

  //Render Function
  render_Scene(route, navigator) {
    if(route.index === 1){
      return <Welcome  navigator={navigator} {...route.passProps} />
    } else if(route.index ===2){
      return <Online navigator={navigator} />
    } else if(route.index ===3){
      return <ChatBox navigator={navigator} />
    }
  }


  render() {



    return (
      <Navigator
        initialRoute={{ index: 1, }}
        renderScene={this.render_Scene}
      />
    );

  }

}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 60,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('new_project', () => HelloWorldApp);
