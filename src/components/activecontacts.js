import React, { Component } from 'react'
import './../css/contacts.css';
// import CSSTransition from 'react-transition-group/CSSTransition';
// import { Transition } from "react-transition-group"
// import TransitionGroup from 'react-transition-group/TransitionGroup'
import CommonHeader from '../utilComponent/commonheader';
import ContactsBody from './contactsbody';

export default class activecontacts extends Component {
    constructor(props){
        super(props);
        this.state={
            contacts : this.props.contacts
        }
       // alert(this.props.contacts)
        console.log('activecontacts',this.props.contacts);
    }
    componentWillReceiveProps(nextProps, nextContext){
        console.log('nextProps',nextProps.contacts)
        this.setState({
            contacts : nextProps.contacts
        })
    }

    
    render() {
        console.log('activecontacts',this.props.contacts);
        //alert("activerender:"+this.props.contacts)

        return (
            
            <>
                
                    <div className="activecontacts" style={{display : this.props.currentScreen === 'Chats' ? 'flex' : 'none'}}>
                        
                            <CommonHeader header="Contacts"/>
                        
                        
                            <ContactsBody contacts={this.props.contacts} launchChat_h={this.props.launchChat_h}/>
                        
                    </div>
                
            </>
        )
    }
}
