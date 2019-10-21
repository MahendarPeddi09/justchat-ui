import React from 'react';
import Menu from '../menu/menu';
import Contacts from '../contacts';
//mport ChatWindow from './../components/chatwindow';
import ChatwindowContainer from '../chatwindow/chatwindowContainer';




export default function Main(props) {
    console.log('main',props.contacts,props.currentScreen)
   
    return (
        
        <div style={{width:'80%',height:'80%',left:'10%',top:'10%',position:'absolute',boxShadow:'0px 0px 1px 1px gray'}}>
            <Menu menuOption_h={props.menuOption_h}/>
            <Contacts contacts={props.contacts} currentScreen={props.currentScreen} launchChat_h={props.launchChat_h}/>
            <ChatwindowContainer recentChats={props.recentChats}/>
            
        </div>
    )
}

