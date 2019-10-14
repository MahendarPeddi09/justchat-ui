import React, { Component } from 'react'
import Main from './main';
import { connect } from 'react-redux'
import io from 'socket.io-client';
import { updateUserSession } from '../../actions/chatwindowActions';
import {_base_server_url, _base_app_url} from '../../configuration'
import { chatwindowLaunch, saveChats } from '../../actions/chatwindowActions';
export const socket =  io.connect("http://localhost:7000/");




class mainContainer extends Component {
    constructor(props){
        super(props);

        this.state={
                currentScreen : 'Chats',
                activeContacts : [],
                allContacts : [],
                recentChats : [],
                selectedChat : '',
        }
        
    }
    componentWillMount(){
        //alert("beforeMainContainer:"+this.state.activeContacts)
    }
    
componentDidMount(){
        
    fetch(_base_server_url+'session',{
        credentials:'include',
        method:'GET',
        headers:{"Content-Type": "application/json",
        Accept: 'application/json',
        'authorization': `Bearer `},
    }).then(response => response.json()).then(data =>{
        let d = JSON.parse(data)
        
        this.props.updateUserSession(true,d.userName,d.userId)
    }).catch(err => console.log(err));
        
            socket.on('message',(ms) =>{
                //alert(ms)
                let msg = JSON.parse(ms);
                let temp_activeContacts = this.state.activeContacts;
                //alert(msg)
                if(temp_activeContacts.length > 0 ){
                    let t = '';
                    temp_activeContacts = temp_activeContacts.filter( obj =>{

                        if(obj.personId === msg.from_id || obj.personId === msg.to_id){
                            console.log("found")
                            t = obj
                            return 0
                        }
                        else{
                            return 1
                        }
                    })
                    t = {...t,msg_text : msg.msg_text,timestamp : msg.timestamp}
                    temp_activeContacts.reverse()
                    temp_activeContacts.push(t);
                    temp_activeContacts.reverse();

                    //temp_activeContacts = temp_activeContacts.map(obj =>(obj.personId === msg.from_id || obj.personId === msg.to_id) ? { ...obj, msg_text : msg.msg_text,timestamp : msg.timestamp } : obj)
                }
                
                this.setState({activeContacts : temp_activeContacts})
                //alert("stateUpdate")

            })
            
            //socket.emit('message',"new msg");
            socket.on('allcontactsList',allList =>{
                allList = JSON.parse(allList)
                console.log(allList)
                this.setState({
                    allContacts : allList,

                })
            })

            socket.on('contactsList', list =>{
                list = JSON.parse(list)
                console.log(list[0]);
            console.log(this.state.allContacts)
            // if(this.state.allContacts.length !== 0){
                const allC = this.state.allContacts
                console.log(allC)
                for (let index = 0; index < list.length; index++) {
                    console.log(allC)
                    const element = list[index];
                    
                    allC.some((c,i) => {
                        if(c.to_id === element.personId || c.from_id === element.personId){
                            list[i]["personId"] = c.personId
                            list[i]["user_name"] = c.user_name
                            console.log(list[i]);
                            
                        }
                    })
                    
                }
            //}
            this.setState({

                activeContacts : list
            })
            //alert("stateUpdate")
            
            //setTimeout(() =>console.log(this.state.originalcontacts),1000)
            })
            //alert("afterMainContainer:"+this.state.activeContacts)
    window.addEventListener('online', () =>{
        // socket.emit("online",() =>{

        // })
    })       
     socket.on('typing',id =>{

        alert(`${id}typing`)
     })
            
        

    }

    launchChat_h = (name1,id) =>{
        
        console.log("launching chat",name1,id)
       this.props.simpleAction({name : name1,personId:id})
    //    this.setState({selectedChat : name1})

        fetch("http://localhost:7000/recentChats",{
            method: 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({'owner' : this.props.userSession.userId,'friend' : id })
            //body: JSON.stringify({})
            }).then(respnse => respnse.json()).then(data => {
                console.log(data);
                this.setState({recentChats : []})
                let d = this.state.recentChats.concat(data)
                console.log(d.length,d)
                this.setState({recentChats : d})
                console.log(data,this.state.recentChats);
                this.props.saveChatsAction(JSON.parse("this.state.recentChats"));
            }).catch( err =>console.log('recentChatserror',err))
       let t = {};
       t[name1] = this.state.recentChats;
       console.log(this.state.recentChats.length,t);
       this.props.saveChatsAction(name1,this.state.recentChats);
       
    }
    menuOptionHandler =(e) =>{
        
        this.setState({currentScreen : e.target.name})
        console.log(e.target.name,this.state.currentScreen)
    }

    render() {
        //alert("renderMainContainer:"+this.state.activeContacts)
        console.log(this.state.activeContacts)
        return (

            
            <div>
                
                    <Main menuOption_h={this.menuOptionHandler}   recentChats={this.state.recentChats} currentScreen={this.state.currentScreen} contacts={this.state.activeContacts} launchChat_h={this.launchChat_h}/>
                
            </div>
            
        )
    }
    
}
const mapStateToProps = state => {
    console.log(state.chatDetails.chatwindowDetails)

    return {
   
        userSession : state.userSession,
        chatSession : state.chatDetails.chatwindowDetails,
    
  }}
const mapDispatchToProps = dispatch => ({
    updateUserSession: (loggedIn,name,id) => dispatch(updateUserSession(loggedIn,name,id)),
    simpleAction: details => dispatch(chatwindowLaunch(details)),
    saveChatsAction : (id,chats) => dispatch(saveChats(id,chats)),
})

export default connect(mapStateToProps,mapDispatchToProps)(mainContainer)



