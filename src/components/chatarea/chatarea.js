import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import ChatInp from './../chatinp/ChatInp'
import ChatInpContainer from '../chatinp/chatinp-container';
import FileuploadContainer from '../fileupload/fileupload-container';


export default function chatarea(props) {

    
    let message = props.chats;
    const name = props.currentWindow ? props.currentWindow.name : null;

    const mgs = message.map(msg => {
        console.log(msg)
        var dir = ''
        msg.from_id === props.currentWindow.personId ? dir = 'left' : dir = 'right';
        console.log(dir)
        return <ChatMsg dir={dir} key={msg.msg_id} text={msg.msg_text} />}
    )
    //const detail = JSON.stringify(props.currentWindow)
    
    //console.log(typeof props.currentWindow);
    return (
        <div className="chatarea">
            <div className="chatheader" >
                <div className="chatheader_a">
                          <img style={{width:"60px",height:"60px",border:"5px",borderRadius:"50px"}} src="/logo.svg"/>  
                </div>
                <div className="chatheader_b" >
                    <div className="chatheader_b_a" onClick={props.infohandler}>
                        <span className="chatheader_b_a_1">{ name ? name : ''}</span>
                        <span className="chatheader_b_a_2">Away 15 min Ago</span>
                    </div>
                    <div className="chatheader_b_b">
                        <div className="chatheader_b_b_a">
                            <input className="chatheader_b_b_a_1"/>
                            <SearchIcon className="chatheader_b_b_a_2"/>
                        </div>
                    </div>
                </div>
                <div className="chatheader_c">
                    <MoreVertIcon  className="chatheader_c_1"/>
                </div>
            </div>
            <div className="chatbody">
                {mgs}
            </div>
            <FileuploadContainer />
            <ChatInpContainer />
            
        </div>
    )
}
export const ChatMsg =(props) =>{
    return(
        <div style={{width:'100%',height:'auto',minHeight:'50px',backgroundColor:'whitesmoke',marginTop:'3px',}}>
            <p style={{float:props.dir}}>{props.text}</p>
        </div>
    )
}


