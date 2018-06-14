import React, { Component } from 'react';
import { TextInput, View, Text, Button } from 'react-native';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'ASD',
            lastName: 'adasdaAS',
            number: '1233'
        };

        this.onSubmite = this.onSubmite.bind(this)
    }

    onSubmite() {
        console.log(this.state);
    }

    render() {
        return (
            <View>
                <Text>
                    New Contact
                </Text>
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
                onPress={this.onSubmite}
                />
            </View>
        );
    }
}

export default Form;