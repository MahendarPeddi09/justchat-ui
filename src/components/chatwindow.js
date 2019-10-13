import React from 'react';
import ChatArea from './chatarea'
import ChatInfo from './chatinfo'
import './../css/chatwindow.css';


const Chatwindow = (props) => {

        var info = (props.infoview) ? <ChatInfo /> : null;
        var chatarea =  (props.chatwindowopen)  ? <ChatArea   inpText={props.inpText} enterText={props.enterText} chats={props.chats} sendMsg={props.sendMsg} currentWindow={props.currentWindow} popwindow={props.popwindow} infohandler={props.infohandler} addEmoji={props.addEmoji} emojipopover={props.emojipopover} emojihandler={props.emojihandler} inserthandler={props.inserthandler} popover={props.popover}/> : null
        //console.log(props.popover,chatarea,props.currentWindow)
        //console.log(props.currentWindow)
        
    return (
        
        <div className="chatwindow">
            
            {chatarea}
            {info}
            
        </div>
    )
}
export default Chatwindow;
