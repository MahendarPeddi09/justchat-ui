import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton';
import CSSTransition from 'react-transition-group/CSSTransition';
import './../css/contacts.css';

export default class contactsbody extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [1,2,3,4],
            title : '',
            contacts : this.props.contacts,
            testContacts1 : {user_name:"",msg_text:"",timestamp:0},
            testContacts2 : {user_name:"",msg_text:"",timestamp:0},
            
            
        }
   
        
    }
    launchChat_h = (a,b) =>{
        //alert(a)
        
        this.setState({selectedItem : a})
        this.props.launchChat_h(a,b)
    }
    launchChat = () => {
        console.log("button clicked")
    }
    componentWillMount(){
        //alert("before:"+this.props.contacts)
    }
    componentDidMount(){
        this.setState({...this.state,selectedItem : '',})
        //alert("after:"+this.state.contacts+"-"+this.props.contacts)
        setTimeout(() =>{
            this.setState({testContacts1 : {user_name:"Test1",msg_text:"Test Description",timestamp:1000020},
            testContacts2 : {user_name:"Test2",msg_text:"Test Description",timestamp:1000024}})
        },2000)
        
        
    }
    
    render() {
        //alert("render:"+this.state.contacts+"-"+this.props.contacts)
        //console.log('contactbody',this.props.contacts,this.state.contacts)
       // const empcontact = {user_name:"Test1",msg_text:"Test Description",timestamp:1000020}
       //alert(this.state.selectedItem)
        const emptylist = [<ContactsItem selectedItem={this.state.selectedItem} launchChat_h={this.launchChat_h} key={121212} contact={this.state.testContacts1}/>,
            <ContactsItem selectedItem={this.state.selectedItem} launchChat_h={this.launchChat_h} key={12121} contact={this.state.testContacts2}/>]
        
        const ll = this.props.contacts.length === 0 ?  emptylist : this.props.contacts.map((contact) => <ContactsItem selectedItem={this.state.selectedItem} style={{backgroundColor:"red"}} launchChat_h={this.props.launchChat_h} key={contact.personId} contact={contact}/>)
        return (
            <div className="contactsbody">
                
                {ll}
                
                {/* <ContactsItem title={this.state.title}/>
                <ContactsItem title={this.state.title}/>
                <ContactsItem title={this.state.title}/>
                <ContactsItem title={this.state.title}/> */}
           
            </div>

        )
    }
}

export const ContactsItem =(props) => {
    //console.log(props)
    //alert(props.selectedItem+"-"+props.contact.user_name)
    return (
        <div className="contactsItem" style={{backgroundColor : props.selectedItem && props.selectedItem === props.contact.user_name ? "#538891" : "white"}}>
            <div className="u_dis_pic">
                 <img /><Skeleton circle={true} height={50} width={50} />
            </div>
            <div className="u_dis_info" onClick={ (e) => props.launchChat_h(props.contact.user_name,props.contact.personId)} >
                <div className="u_dis_info_a">
                    <span className="u_dis_name">{props.contact.user_name|| <Skeleton duration={1} height={25}/>} </span>
                    <span className="u_dis_time">{props.contact.timestamp || <Skeleton duration={1}/>}</span>
                </div>
                <div className="u_dis_info_b">
                    <span className="u_dis_msg">{props.contact.msg_text || <Skeleton duration={1}/>}</span>
                </div>
            </div>
            
        </div>
    )
}







