/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, Image, View} from 'react-native';

 const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

 type Props = {};
 export default class App extends Component<Props> {
   render() {
    let imageSource = {uri:"http://photos.wikimapia.org/p/00/03/16/67/72_full.jpg"};
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}>
      Begin with React-Native
      </Text>
      <Text style={styles.welcome}>
      Xin chào mọi người
      </Text>

      <Text style={styles.instructions}>
      Tôi là Ngô Thanh Tùng{"\n"}

      </Text>
      
      <Image
      style={styles.imageStyle}
      source={require('./images/tung.jpg')}  
      />  
      


      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffcc88',
    },
    imageStyle:{
      width: 200, height: 200,
      marginBottom:20,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10
    },
    textStyle: {
      color: '#990000',
      fontSize: 25,
      textAlign: 'center',
      justifyContent: 'center',
      margin: 40,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      fontSize: 25,
      color: '#333333',
      marginBottom: 5,
    },
  }
  );
