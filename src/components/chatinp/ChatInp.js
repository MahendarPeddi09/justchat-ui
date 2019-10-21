import React from 'react'
import Popover from './PopOver'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './chatinp.css';

export default function ChatInp(props) {
    var popover = /*(props.popover) ? */ <Popover  popwindow={props.popwindow} addEmoji={props.addEmoji}/> /* : null */
    return (
        <>
            {/* <div className="poplayer">
            {popover}
            </div> */}
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
        </>
    )
}
