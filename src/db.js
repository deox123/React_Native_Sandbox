import Realm from 'realm';

const ContactSchema = {
    name: 'Contact',
    primaryKey: 'id',
    properties: {
        id: 'int',
        firstName: 'string',
        lastName: 'string',
        number: 'string'
    }
}

export default new Realm({ 
    schema: [ContactSchema],
    deleteRealmIfMigrationNeeded: true
 })
    

// export default dbService = {
//     addNewContact: (contact) => {
//         db.write(() => {
//             db.create('Contact', {
//                 firstName: contact.firstName,
//                 lastName: contact.lastName,
//                 number: contact.number
//             })
//         })
//     },

//     contacts: () => {
//         return db.objects('Contact')
//     }
// }