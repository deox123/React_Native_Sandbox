import React, { Component } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import realm from '../db';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            number: ''
        };

        this.addNewContact = this.addNewContact.bind(this);
    }

    addNewContact() {
        try {
            realm.write(() => {
                realm.create('Contact', {
                    id: new Date().valueOf(),
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    number: this.state.number
                })
                // let all = realm.objects('Contact');
                // for (let c of all) {
                //     console.log(c)
                // }
                
            })
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    value={this.state.firstName}
                    onChangeText={(firstName) => this.setState({ firstName })}
                />
                <TextInput
                    value={this.state.lastName}
                    onChangeText={(lastName) => this.setState({ lastName })}
                />
                <TextInput
                    value={this.state.number}
                    onChangeText={(number) => this.setState({ number })}
                />
                <Button
                    title='Submit'
                    onPress={this.addNewContact}
                />
            </View>
        );
    }
}

export default Form;