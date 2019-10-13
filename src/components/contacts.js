import React from 'react';
import './../css/contacts.css';
import AllContacts from './allcontacts';

import ActiveContacts from './activecontacts';
import { stringify } from 'querystring';
//import AllContacts from './allcontacts';

const Contacts = (props) => {
    // const chats = <ActiveContacts contacts={props.contacts} launchChat_h={props.launchChat_h} />
    // const contacts = <AllContacts  />
    console.log('CONTACTS',props.currentScreen,props.currentScreen ,'Chats')
    console.log("contact:",props.contacts)
    return (
        
        
        <div className="contacts" style={{display:''}} >
            
            <ActiveContacts contacts={props.contacts} launchChat_h={props.launchChat_h} currentScreen={props.currentScreen}/>
            <AllContacts  currentScreen={props.currentScreen}/>
            {/* <AllContacts /> */}
            
        </div>
    )
}
export default Contacts;