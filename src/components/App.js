import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
//import Realm from 'realm';
import NewContact from './NewContact';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    // Realm.open({
    //   schema: [{name: 'Dog', properties: {name: 'string'}}]
    // }).then(realm => {
    //   realm.write(() => {
    //     realm.create('Dog', {name: 'Rex'});
    //   });
    //   this.setState({ realm });
    // });
  }

  render() {
    // const info = this.state.realm
    //   ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
    //   : 'Loading...';

    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
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
  Home,
  Settings: SettingsScreen,
  NewContact
});
