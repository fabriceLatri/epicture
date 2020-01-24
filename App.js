import React from 'react';
import Landing from './components/Landing';
import Home from './components/Home';
import { MyImage } from './components/MyImage';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'





const MainNavigator = createStackNavigator(
  {
  Connect: Landing,
  Home: Home,
  MyImage: MyImage,
  },
  {
    initialRouteName: 'Home',
  }
);

const App = createAppContainer(MainNavigator);

export default App;
