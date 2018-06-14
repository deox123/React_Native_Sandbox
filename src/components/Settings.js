import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Form from './Form';

const Settings = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Setting!</Text>
            <Form />
        </View>
    );
};

export default Settings;