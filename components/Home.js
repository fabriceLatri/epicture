import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the Home screen</Text>
        <Button onPress={() => this.props.navigation.navigate('Connect')} title="Connect"/>
        <Button onPress={() => this.props.navigation.navigate('MyImage')} title="Image"/>
      </View>
    )
  }
};

export default Home;