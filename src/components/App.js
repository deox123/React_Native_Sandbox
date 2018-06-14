import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';

class HomeScreen extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

console.log(123)
//debugger;

class SettingsScreen extends React.Component {
  render() {
    return (
      <Settings />
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});
