import React from 'react'
import './login.css';
import { log as Log,reg as Reg} from './log';


export default function login(props) {
    console.log(props.logDisp);
    return (
        <div className="login">
            <div className="login_a">
                <div className="login_a_a">
                    <div  className="login_a_a_a" style={{width:props.logActive}} onClick={props.onlog}>Login</div>
                    <div  className="login_a_a_b" style={{width:props.regActive}} onClick={props.onreg}>Register</div>
                </div>
                <div className="login_a_b">
                    
                    <Log dis={props.logDisp} submitHandler={props.submitHandler}/>
                    
                    <Reg dis={props.regDisp} submitHandler={props.submitHandler}/>
                    
                </div>
            </div>
        </div>
    )
}






