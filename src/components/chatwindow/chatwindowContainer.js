import React, { Component } from 'react'
import Chatwindow from './chatwindow'
import { connect } from 'react-redux';
import {_base_server_url, _base_app_url} from '../../configuration'
import {socket as io} from '../main/mainContainer';
import FileuploadContainer from '../fileupload/fileupload-container';

//const io = socket;

class ChatwindowContainer extends Component {
    constructor(props){
        super(props);
        console.log(this.props.recentchats)
        this.state={
            ischatwindowopen : false,
            isinfoOpen : false,
            insertpopover : false,
            emojipopover : false,
            inpMessage : '',
            popwindow : 0,
            chats : '',
        
            
        }
    };
    componentWillReceiveProps(nextProps, nextContext){
        console.log(typeof this.props.recentchats)
        this.setState({ischatwindowopen : nextProps.iswindowActive,})
        this.setState({chats: nextProps.recentChats})
        //this.setState({chats : this.state.chats.push(nextProps.recentchats[0])})
        

    }
    enterMsg = (e) =>{
        //console.log(e.target)
        this.setState({inpMessage : e.target.value})
        if(io){
            io.emit('typing',[this.props.userSession.userId,this.props.currentWindow.personId]);
            io.once('typing', (id)=>{
             console.log("typing",id)
            alert(id)
            })
        }else{

        }
        
    }
    sendMsg = (t) =>{
        

        let msg = {msg_id:0,from_id:this.props.userSession.userId,to_id:this.props.currentWindow.personId,msg_text:this.state.inpMessage,msg_status:0}
        //re.concat(msg)
        
        console.log(io.id)
        console.log(msg)
        io.emit('message',msg);
        //var count = 0
        if(io){
            io.once('message',message =>{
                // alert(++count)
                 console.log(message)
                 this.setState({chats : this.state.chats.concat(JSON.parse(message))})
                 console.log(this.state.chats)
            })
        }else{
            
        }
        
        

    }
    infoHandler = () => {
        this.setState({isinfoOpen : !this.state.isinfoOpen})
    }
    insertpopoverh = () => {
        //this.setState({insertpopover : !this.state.insertpopover})
        if(this.state.popwindow === 0 || this.state.popwindow === 1){
            this.setState({popwindow : 2})
        }else{
            if(this.state.popwindow === 2){
                this.setState({popwindow : 0})
            }
        }
    }
    emojipopoverh =() =>{
        
        //this.setState({emojipopover : !this.state.emojipopover})
        if(this.state.popwindow === 0 || this.state.popwindow === 2){
            this.setState({popwindow : 1})
        }else{
            if(this.state.popwindow === 1){
                this.setState({popwindow : 0})
            }
        }
    }
    addEmoji = emo => {
        this.setState({inpMessage : this.state.inpMessage + emo})
    }    
    componentWillMount(){
        
    }
    
    render() {
        //console.log(this.state.ischatwindowopen,this.props.iswindowActive)
        console.log(this.props.recentchats,this.props.recentChats)
        //console.log("from chatwindow controller",JSON.parse(this.props.currentWindow),typeof this.props.currentWindow)
        return (
            <>
                <Chatwindow currentWindow={this.props.currentWindow} sendMsg={this.sendMsg} inpText={this.state.inpMessage} enterText={this.enterMsg} chats={this.state.chats}  chatwindowopen={this.state.ischatwindowopen} popwindow={this.state.popwindow} addEmoji={this.addEmoji} emojipopover={this.state.emojipopover} emojihandler={this.emojipopoverh} inserthandler={this.insertpopoverh}  popover={this.state.insertpopover} infoview={this.state.isinfoOpen} infohandler={this.infoHandler}/>
                <FileuploadContainer />
            </>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state,state.recentChats)
    return {
    userSession : state.userSession,
    currentWindow: state.chatDetails.chatwindowDetails,
    recentchats : state.recentChats,
    iswindowActive : state.chatDetails.iswindowActive,
    
  }}
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(ChatwindowContainer)