import React, { Component } from 'react'
import Login from './login'
import {_base_server_url, _base_app_url} from '../../configuration'
import { connect } from 'react-redux';
import { updateUserSession } from '../../actions/chatwindowActions';

export var logged = false;

class loginContainer extends Component {
    
    constructor(){
        super();
        this.state = {
            logActive : '70%',
            regActive : '30%',
            logDisp : 'block',
            regDisp : 'none',
            token : '',
        }

    }
    componentWillMount(){
    fetch(_base_server_url+'session',{
            credentials:'include',
            method:'GET',
            headers:{"Content-Type": "application/json",
            Accept: 'application/json',
            'authorization': `Bearer `},
        }).then(response => response.json()).then(data =>{
            console.log(data)
        }).catch(err => console.log(err));
    }
    componentDidMount(){
        logged = this.state.token;
        console.log("this.state.logDisp",this.state.token)
    }

    regClicked = () =>{
        this.setState({
            logActive : '30%',
            regActive : '70%',
            logDisp : 'none',
            regDisp : 'block'
        });
    }
    logClicked = () =>{
        this.setState({
            logActive : '70%',
            regActive : '30%',
            logDisp : 'block',
            regDisp : 'none'
        });
    }
    submitHandler = (e,k) =>{
        e.preventDefault();
        //console.log(k)
        let context = '';
        let payload = {};
        if(e.target.name === 'Login'){
            let  [a,b] = k
            context = "login"
            payload = {userName : a,userPassword : b}
            
        }else{
            if((e.target.name === 'Register')){
                context = "register"
                let [a,b,c,d] = k;
                payload = {userName : a,userEmail : b,userPhone : c, userPassword : d}
                alert('register'+a+b+c+d)
            }
        }
        fetch(_base_server_url+context,{
            credentials:'include',
            method : "POST",
            headers:{"Content-Type": "application/json",
            Accept: 'application/json',
            'authorization': `Bearer ${this.state.token}`},

            body: JSON.stringify(payload)
        }).then(response => response.json()).then(data => {
            if(!this.state.token){
            this.setState({
                token : data.token
            })}
            this.props.updateUserSession(true,data.userName,data.personId)
            console.log(data.token)
            if(data.userName !== '') this.props.history.push('/');
            }).catch(err => alert("Opertaion failed,Please try again"+err))
            console.log(this.state.token)


    }
    render() {
        
        return (
            <Login submitHandler={this.submitHandler} logActive={this.state.logActive} regActive={this.state.regActive} logDisp={this.state.logDisp} regDisp={this.state.regDisp} onlog={this.logClicked} onreg={this.regClicked}/>
        )
    }
}
const mapStateToProps = state =>{

    return{
        
    }
}
const mapDispatchToProps = dispatch => ({
    updateUserSession: (loggedIn,name,id) => dispatch(updateUserSession(loggedIn,name,id)),
    
})
export default connect(mapStateToProps,mapDispatchToProps)(loginContainer);
