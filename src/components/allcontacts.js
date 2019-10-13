import React, { Component } from 'react'
import './../css/contacts.css';
import CommonHeader from '../utilComponent/commonheader';
import ContactsBody from './contactsbody';


const AllContacts = (props) => {
    
        return (
            <div style={{display : props.currentScreen === 'Contacts' ? 'flex' : 'none'}}>
                <CommonHeader header="AllContacts"/>
                
            </div>
        )
    
}
export default AllContacts;