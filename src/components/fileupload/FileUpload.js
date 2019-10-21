import React from 'react'
import './fileupload.css'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';

export default function FileUpload(props) {

    const fl = props.filesUploaded.map((item,i) => {
        return (<FileListItem name={item.name} progress={item.progress} key={i}/>)
    })

    return (
        <div className="fileupload-main1">
            <div className="fu-header">
               
            </div>
            <div className="fu-content">
                <div className= {props.files_selected ? "fu-main2" : "fu-main1"}>
                    <div className={props.files_selected ? "fu-droped" : "fu-drop"} >
                        <div>
                            <img />
                            <span></span>
                        </div>
                    </div>
                    <div className="fu-browse">
                        <input type="file" id="file"  style={{display: "none"}} onChange={props.fileHandler} multiple />
                        <button onClick={() =>document.getElementById('file').click()}>Upload</button>
                    </div>

            </div>
                <div className="fu-list" style={{display : props.files_selected ? 'block' : 'none'}}>
                    {fl}
                </div>
                <div className="fu-preview">

                </div>
            </div>
           
        </div>
    )
}

export const FileListItem  = (props) =>{
    console.log(props.filecontent)
    return (
        <div className="fu-fl-item">
            <div className="fl-item-icon">
                <img src=""/>

            </div>
            <div className="fl-item-details">
                    {props.name}{props.progress}
                <div>
                   {(props.progress === 100) ? props.filecontent : 'none'}
                </div>
                <div style={{height:'2px',backgroundColor:'green',width : props.progress +'%'}}>
                    
                </div>
            </div>
            
        </div>
        
    )
}
FileUpload.propTypes = {
    files_selected : PropTypes.bool,
    filesUploaded : PropTypes.array,
}
FileListItem.propTypes = {
    name : PropTypes.string,
    progress : PropTypes.number,
    filecontent : PropTypes.element,
}