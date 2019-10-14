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
    let currentscreen;
    switch (props.currentScreen) {
        case "Chats":
            currentscreen = <ActiveContacts contacts={props.contacts} launchChat_h={props.launchChat_h} currentScreen={props.currentScreen}/>
            break;
        case "Contacts":
                currentscreen = <AllContacts  currentScreen={props.currentScreen}/>
            break;
        case "Search":
            break;
        case "Settings":
            break;
    
        default:
            break;
    }
    return (
        
        
        
        <div className="contacts" style={{display:''}} >
            {currentscreen}
            {/* <ActiveContacts contacts={props.contacts} launchChat_h={props.launchChat_h} currentScreen={props.currentScreen}/>
            <AllContacts  currentScreen={props.currentScreen}/> */}
            {/* <AllContacts /> */}
            
        </div>
    )
}
export default Contacts;