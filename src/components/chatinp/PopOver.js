import React,{useState, useEffect} from 'react';
import emojiList from './../../emoji.json';
import PetsIcon from '@material-ui/icons/Pets';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './chatinp.css';

const smilies = emojiList.smilies
const pets = emojiList.pets
const Popover = (props) =>{
    const emoji_list = smilies.map(emoji => <span className="emoji_item" onClick={() => props.addEmoji(emoji.symbol)} >{emoji.symbol}</span>)
    const pets_list = pets.map(emoji => <span className="emoji_item" onClick={() => props.addEmoji(emoji.symbol)} >{emoji.symbol}</span>)
    console.log("-")
    useEffect(() => {

        //document.addEventListener('click', () => {console.log("event 1added")});
        //console.log("add")
        return function(){
        //    document.removeEventListener('click', () => {console.log("event 1removed ")}) 
            console.log("remove")
        }
    },[]);

    

    const emoji_options = [<InsertEmoticonIcon />,<PetsIcon />].map( (emoji_option,i) =>{
       return  <div className="emoji_option" key={i} id={i} onClick={(e) => props.emojiOptionHandler(e)}>{emoji_option}</div>
    })
    
    
    
    let emoji = <div className="popover" style={{left:'1%' ,width: '60%'}}>
        <div  className="emoji_placeholder" style={{top : 0}}>
            console.log(props.emoji_l)
            {props.emoji_l} === 0 ? {emoji_list} : {pets_list}
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
    let insert = <div className="popover" style={{left: '60%',width: '30%',padding:'10px'}}>
                        <Avatar style={{backgroundColor:'green',width:'50px',height:'50px',margin:'0 10px 10px',float:'left'}} onClick={() => alert("Hello")}>
                            <FolderIcon />
                        </Avatar>
                        <Avatar style={{backgroundColor:'gray',width:'50px',height:'50px',margin:'0 10px 10px',float:'left'}} onClick={() => alert("Hello")}>
                            <AssignmentIcon />
                        </Avatar>   
                </div>



        let popover;
        if(props.popwindow === 0){
           // console.log("pop up closed")
           //popover = insert;
           document.addEventListener('click', () =>{console.log("event added")})
        }else{
            document.removeEventListener('click', () =>{console.log("event removed")})
            if(props.popwindow === 1) popover = emoji;
            if(props.popwindow === 2) popover = insert;
           // console.log("pop up open")
        }
       
    return (
        <>
        {popover}
        </>
    )
}

export default Popover;
