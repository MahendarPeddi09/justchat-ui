import React from 'react';
import './menu.css';
const Menu = (props) =>{
    return (
        <div className="menu">
            <div className="menu_profile">
            <img className="menu_options_a" name="Profile" onClick={(e) => props.menuOption_h(e)}/>
            </div>
            <div className="menu_options">
                <img className="menu_options_a" name="Chats" onClick={(e) => props.menuOption_h(e)}/>
                <img className="menu_options_a" name="Contacts" onClick={(e) => props.menuOption_h(e)}/>
                <img className="menu_options_a" name="Search" onClick={(e) => props.menuOption_h(e)}/>
                <img className="menu_options_a" name="Settings" onClick={(e) => props.menuOption_h(e)}/>
            </div>
        </div>
    )
}
export default Menu;