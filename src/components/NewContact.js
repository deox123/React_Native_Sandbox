import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Form from './Form';

class NewContact extends Component {
        constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>New Contact</Text>
                <Form style={{minWidth: 200}}/>
            </View>
        );
    }
}

export default NewContact;