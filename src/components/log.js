import React, { Component } from 'react'
import './../css/login.css';
import { thisExpression } from '@babel/types';
//import formInput from '../utilComponent/formInput';

export class log extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            pswd : ''
        }
        
    }
    onchange = (e) =>{
        if(e.target.name === 'uname'){
            this.setState({userName : e.target.value})
        }
        if(e.target.name === 'upswd'){
            this.setState({pswd : e.target.value})
        }
    }
    
    render() {
        //console.log(this.props.dis);
        return (
            <div className="log" style={{display:this.props.dis}}>
                
                <input className="_input" name="uname" onChange={this.onchange} value={this.state.userName} placeholder="UserName"/>
                <input className="_input" type="password" name="upswd" onChange={this.onchange} value={this.state.pswd} placeholder="password"/>
                <button className="_btn" name="Login" onClick={(e) => this.props.submitHandler(e,[this.state.userName,this.state.pswd])}>Login</button>
            </div>
        )
    }
}

//Registration From
export class reg extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName : '',
            email : '',
            ph : '',
            pswd : '',
            cpswd : '',
            validUname : '',
            namebrcolor : 'transparent',
            emailbrcolor : 'transparent',
            phbrcolor : 'transparent',
            psbrcolor : 'transparent',
            cpsbrcolor : 'transparent',
            validated : false,
            
        }
        //this.nameRegex = /[a-zA-Z_][a-zA-Z0-9_.\s]{4,20}/
        this.nameRegex = /^[A-Za-z][A-Za-z0-9\s]{0,20}$/;
        this.emailRegex = /^[a-z][a-z0-9._]+[@]{1}[a-z0-9]+[.]{1}[a-z0-9]+$/;
        this.phRegex = /^[0-9]{10}$/;
        this.pswdRegex = /[a-zA-Z0-9]{3,20}$/;
        this.onchange = this.onchange.bind(this);
    }
    onchange = (e) =>{
        var regex = '';
        if(e.target.name === 'u_name'){
            
           regex = new RegExp(this.nameRegex)
            this.setState({
                userName : e.target.value
            })
            if(e.target.value === ''){
                this.setState({namebrcolor : 'transparent'})
            }
            else{
                if(regex.test(e.target.value)){
                    if((this.state.userName.length + 1) > 6){
                        this.setState({namebrcolor : 'green'})
                        //console.log(e.target.value,this.state.userName.length + 1,this.state.namebrcolor)
                    }
                    // if(((this.state.userName.length + 1) > 6) && ((this.state.userName.length + 1) < 12)){
                    //     this.setState({namebrcolor : 'orange'})  
                    // }
                    if(((this.state.userName.length + 1) <= 6)){
                        this.setState({namebrcolor : 'black'})  
                    }

                   //this.setState({validUname : true})
                }
                else{
                    this.setState({namebrcolor : 'red'})  
                }
            }
            //console.log(e.target.value,this.state.userName.length + 1,this.state.namebrcolor)
            
        }
        if(e.target.name === 'u_email'){
            regex = new RegExp(this.emailRegex)
            var e_val = e.target.value;
            //this.setState({namebrcolor : 'red'})
            if(e.target.value !== ''){
                this.setState({email : e.target.value})
                if(regex.test(e.target.value)){

                    this.setState({emailbrcolor : 'green'})
                }
                else{
                    this.setState({emailbrcolor : 'red'})
                }

            }
            else{
                this.setState({email : e.target.value})
                this.setState({emailbrcolor : 'transparent'})
            }
            
            
        }
        if(e.target.name === 'u_phone'){
            regex = new RegExp(this.phRegex)
            this.setState({
                ph : e.target.value
            })
            if(e.target.value !==''){
                console.log(this.state.phbrcolor)
                if(regex.test(e.target.value)){
                   
                    this.setState({phbrcolor : 'green'}) 

                }
                else{
                    console.log(e.target.value,this.state.ph)
                    this.setState({phbrcolor : 'red'})
                }
            }
            else{
                this.setState({phbrcolor : 'transparent'})
            }
        }
        if(e.target.name === 'u_pswd'){
            regex = new RegExp(this.pswdRegex)
            this.setState({
                pswd : e.target.value
            })
            if(e.target.value ===''){
                this.setState({psbrcolor : 'transparent'})
            }
            else{
                console.log(this.pswdRegex)
                if(regex.test(e.target.value)){
                    //console.log(this.pswdRegex)
                    if((this.state.pswd.length > 6) && (this.state.pswd.length + 1 < 8)) this.setState({psbrcolor : 'orange'});
                    if(this.state.pswd.length > 8) this.setState({psbrcolor : 'green'});
                }
                else{
                    this.setState({psbrcolor : 'red'})
                }
            }

        }
        if(e.target.name === 'u_cpswd'){
            this.setState({
                cpswd : e.target.value
            })
            if(e.target.value ===''){
                this.setState({cpsbrcolor : 'transparent'})
            }
            else{
                if(e.target.value === this.state.pswd){
                    this.setState({cpsbrcolor : 'green'})
                    console.log(this.state.validated,this.state.cpsbrcolor,this.state.namebrcolor )
                     if(this.state.namebrcolor === 'green')// && this.state.emailbrcolor==='green' && this.state.phbrcolor==='green' && this.state.psbrcolor==='green' ){
                       
                    {
                        this.setState({validated : true})
                    }
                    else{
                        this.setState({validated : false})
                    }
                    console.log(this.state.validated,this.state.cpsbrcolor,this.state.namebrcolor ) 
                    
                }
                
            }
        }
    }
   
    onlogin = () =>{
 
    }
    

    render() {
        
        return (
            <div className="reg" style={{display:this.props.dis}}>
                <input className="_input" style={{borderBottom:'2px solid ',borderBottomColor:this.state.namebrcolor}} name="u_name" maxLength="25" onChange={this.onchange} value={this.state.userName} placeholder="UserName"/>
                <input className="_input" style={{borderBottom:'2px solid ',borderBottomColor:this.state.emailbrcolor}} name="u_email" maxLength="25" onChange={this.onchange} value={this.state.email} placeholder="Email"/>
                <input className="_input" style={{borderBottom:'2px solid ',borderBottomColor:this.state.phbrcolor}} name="u_phone" minLength="10" maxLength="10" onChange={this.onchange} value={this.state.ph} placeholder="Phone"/>
                <input className="_input" style={{borderBottom:'2px solid ',borderBottomColor:this.state.psbrcolor}} name="u_pswd"  onChange={this.onchange} value={this.state.pswd} placeholder="password"/>
                <input className="_input" style={{borderBottom:'2px solid ',borderBottomColor:this.state.cpsbrcolor}} name="u_cpswd"  onChange={this.onchange} value={this.state.epswd} placeholder="confirmpassword"/>
                <button className="_btn _btn_reg" onClick={(e) => this.props.submitHandler(e,[this.state.userName,this.state.email,this.state.ph,this.state.pswd])} name="Register" style={{backgroundColor : (this.state.validated ? 'green' :'red')}}>Register</button>
            </div>
        )
    }
}


