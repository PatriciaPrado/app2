import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={estilo.container}>
       <View style={estilo.box}/>
       <View style={estilo.box}/>
       <View style={estilo.box}/>
       <View style={estilo.box}/>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    // flexDirection: 'column',
    flexWrap:'wrap',
    backgroundColor: '#CCC',
    alignContent: 'space-between',
    //    alignContent: 'center',
    //    alignItems: 'flex-end',
    //    alignItems: 'center',
    //    alignItems: 'flex-start',
    //    alignItems: 'base-line',
  }, 
  box:{
    flex: 1,
    height: 100,
    minWidth: 100,
    backgroundColor: '#666',
    borderColor: '#999',
    borderWidth: 5,
    margin: 10     
  },
  box1:{
    alignSelf: 'flex-end'
  }
})