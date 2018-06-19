import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import realm from '../db';

// const Home = () => {
//     console.log('ji')
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//             <Text>HomAASDASDDe!</Text>
//             <FlatList
//                 data={[
//                     { key: 'Devin' },
//                     { key: 'Jackson' },
//                     { key: 'James' },
//                     { key: 'Joel' },
//                     { key: 'John' },
//                     { key: 'Jillian' },
//                     { key: 'Jimmy' },
//                     { key: 'Julie' },
//                 ]}
//                 renderItem={({ item }) => <Text>{item.key}</Text>}
//             />
//             <Text>HomAASDASDDe!</Text>
//         </View>
//     );
// };


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };

        this.contactList = realm.objects('Contact')
    }

    componentDidMount() {
        // let contacts = realm.objects('Contact')
        // this.setState({contacts})
        // realm.write(() => {
        //     console.log('start');
        //     let contactsObject = realm.objects('Contact');
        //     contactsArr = [];
        //     // for (let c of contactsObject) {
        //     //     contactsArr.push({
        //     //         firstName: c.firstName,
        //     //         lastName: c.lastName,
        //     //         number: c.number
        //     //     })
        //     // }
        //     this.setState({contacts: contactsObject})
        //     console.log('finish');
        // })
    }

    _keyExtractor = (item, index) => item.id.toString();


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ paddingBottom: 20 }} >Home!</Text>
                {/* {this.state.contacts.map(c => {
                    console.log('start')
                    return <Text key={c.id}>{c.firstName} | {c.lastName} | {c.number}</Text>
                })} */}
                <FlatList
                    data={this.contactList}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) => <Text>{item.firstName}</Text>}
                />
            </View>
        );
    }
}

export default Home;
