import React from 'react';
import './../css/contacts.css';
const commonheader = (props) => {
    const pl = 'Search in '+props.header
    return (
        <div className="commonheader">
            <div className="headertitle">
                <h1>{props.header} </h1>
            </div>
            <div className="search_contacts">
                <input className="search_inp" placeholder={pl}/>
                <button className="search_btn">Search</button>
            </div>
            
        </div>
    )
}
export default commonheader;