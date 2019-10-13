import React from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import emojiList from './../emoji'

const smilies = emojiList.smilies
const pets = emojiList.pets
export default function chatarea(props) {
var popover = /*(props.popover) ? */ <Popover  popwindow={props.popwindow} addEmoji={props.addEmoji}/> /* : null */
    
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
            <div className="poplayer">
            {popover}
            </div>
            <div className="chatinp">
                <div className="chatinp_a">
                    
                    <div className="chatinp_a_a">
                        <div className="chatinp_a_a_1" onClick={props.emojihandler} >
                            <InsertEmoticonIcon />
                        </div>
                        <div className="chatinp_a_a_2" > 
                            <input className="chatinp_a_a_2_inp" value={props.inpText} onChange={(e) => props.enterText(e)}/>
                        </div>
                        
                        <div className="chatinp_a_a_3" onClick={props.inserthandler}> 
                            
                                <AttachFileIcon style={{height:"100%",width:"100%"}}/>
                           
                        </div>

                    </div>
                    
                    <div className="chatinp_a_b">
                        <button className="chatinp_a_b_1" onClick={ () => props.sendMsg(props.inpText)}>Send</button>
                    </div>
                </div>
            </div>
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
export const  Popover = (props) =>{
    const emoji_list = smilies.map(emoji => <span className="emoji_item" onClick={() => props.addEmoji(emoji.symbol)} >{emoji.symbol}</span>)
    const pets_list = pets.map(emoji => <span className="emoji_item" onClick={() => props.addEmoji(emoji.symbol)} >{emoji.symbol}</span>)
    
   

    const emoji_options = [<InsertEmoticonIcon />,<PetsIcon />].map( emoji_option =>{
       return  <div className="emoji_option" onClick="">{emoji_option}</div>
    })
    

    let insert = <div className="popover" style={{left:'1%' ,width: '60%'}}>
        <div  className="emoji_placeholder">
            {emoji_list}
            {pets_list}
        </div>
        <div className="emoji_bottom">
            <div className="emoji_options">
            
            {emoji_options}
            </div>
            <div className="search_emoji">
                <input type="text" className="seach_emoji_inp" placeholder="Search emoji" disabled/>
            </div>
        </div>
        
        </div>
    let emoji = <div className="popover" style={{left: '60%',width: '30%'}}>
                    <div style={{width:'50px',height:'50px'}}  onClick={() => alert("Hello")}>

                        <img style={{width:'50px',height:'50px'}} />
                    </div>
                </div>



        let popover;
        if(props.popwindow === 0){
            
        }else{
            if(props.popwindow === 1) popover = insert;
            if(props.popwindow === 2) popover = emoji;
        }
       
    return (
        <>
        {popover}
        </>
    )
}

