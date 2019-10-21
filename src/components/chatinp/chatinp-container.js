import React, { Component } from 'react'
import { connect } from 'react-redux';
import {_base_server_url, _base_app_url} from '../../configuration'
import {socket as io} from '../main/mainContainer';
import Popover from './PopOver';
import ChatInp from './ChatInp';
import './chatinp.css';
import { couldStartTrivia } from 'typescript';
import emojiList from './../../emoji.json';
//const io = socket;




class ChatInpContainer extends Component {
    constructor(props){
        
        super(props)
        this.state = {
            previouspopwinsow : -1,
            popwindow : 0,
            inpMessage : '',
            emoji_l : 0
            
        }
        
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
        this.setState({inpMessage : ''})
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
        //console.log("emoji button clickd")
        //this.setState({emojipopover : !this.state.emojipopover})
        if(this.state.popwindow === 0 || this.state.popwindow === 2){
            this.setState({previouspopwinsow : this.state.popwindow})
            this.setState({popwindow : 1})
        }else{
            if(this.state.popwindow === 1){
                this.setState({previouspopwinsow : this.state.popwindow})
                this.setState({popwindow : 0})
            }
        }
        if(this.state.popwindow ===0){
            //console.log("event listner added")
            document.addEventListener('click', this.handleOutsideClick,false);
         }else{
            
         }
    }
    addEmoji = emo => {
        this.setState({inpMessage : this.state.inpMessage + emo})
        //alert(this.state.inpMessage)
    }

    handleClick = () => {
        if(this.state.popwindow !==0){
            
        }else{
            
        }

   };
   emojiOptionHandler = (e) =>{
        console.log(e.target)
        this.setState({emoji_l : parseInt(e.target.id)})
   }
   
   
   componentDidUpdate(){

       let prepop = this.state.previouspopwinsow
       let pop = this.state.popwindow
       //console.log(prepop,pop)
        if( prepop > 0 && prepop > pop && pop === 0){
           // console.log("event listner removed")
           // document.removeEventListener('click', this.handleOutsideClick,false)
     
        }
        else{
            
        }
    }
   
   
   
   handleOutsideClick = (e) =>{
       //alert(popupele.contains(e.target))
    //    if(document.getElementsByClassName('popover')[0].contains(e.target) || 
    //    document.getElementsByClassName('chatinp_a_a_1')[0].contains(e.target) || 
    //    document.getElementsByClassName('chatinp_a_a_3')[0].contains(e.target))
    //     {

    //     }else{
    //         //setTimeout(() =>{
    //             this.setState({previouspopwinsow : this.state.popwindow})
    //             this.setState({popwindow : 0})
    //         //},2000)
    //         //this.setState({popwindow : 0})
    //     }
    }
    //shouldComponentUpdate(nextProps, nextState, nextContext)

    render() {
         
        return (
            <div className="ChatInp">
                
                <div className="poplayer">
                    <Popover popwindow={this.state.popwindow} emoji_l={this.state.emoji_l} addEmoji={this.addEmoji} emojiOptionHandler={this.emojiOptionHandler}/>
                </div>
                <ChatInp emojihandler={this.emojipopoverh} inserthandler={this.insertpopoverh} inpText={this.state.inpMessage} enterText={this.enterMsg} sendMsg={this.sendMsg}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    //console.log(state,state.recentChats)
    return {
    userSession : state.userSession,
    currentWindow: state.chatDetails.chatwindowDetails,
    
  }}
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    //onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(ChatInpContainer)
