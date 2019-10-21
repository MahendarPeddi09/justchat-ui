import React, { Component } from 'react'
import FileUpload from './FileUpload'

const sty1 = {width: '350px',height:'400px',position:'absolute',top:'20%',left: '50%',backgroundColor:'transparent'}
const sty2 = {width: '600px',height:'400px',position:'absolute',top:'20%',left: '40%',backgroundColor:'transparent'}
const sty3 = {width: '70%',height:'90%',position:'absolute',top:'10%',left: '30%',backgroundColor:'transparent'}


export default class fileuploadContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            src : '',
            files_selected : false,
            uploadedFiles : [],
            preview_selected : false,
        }
    }



    fileHandler =(e) =>{
        const files = e.target.files;
        let arr = this.state.uploadedFiles.length >0 ? this.state.uploadedFiles : [];
        if(files && files[0]) {
            this.setState({files_selected : true})
        }
        
        
        for (let index = 0; index < files.length; index++) {
            let reader = new FileReader();
            const file = files[index];
            let obj = {name : file.name,size : file.size,type:file.type, progress : 0}
            reader.readAsDataURL(file)
            arr.push(obj)
            this.setState({uploadedFiles : arr})
            reader.onloadstart = () =>{
                console.log(file,obj)
                console.log(file.name+'reading strted')
                this.setState({

                })
            }
            reader.onprogress = (e) =>{
                arr[index].progress  = 50;
                this.setState({uploadedFiles : arr})
                console.log(arr)
                let prgs = Math.round(e.loaded / e.total)*100;
                arr[index].progress  = prgs;
                this.setState({uploadedFiles : arr})
                console.log(file.name + 'reading in progress' + {...file} + ' - ' +Math.round(e.loaded / e.total)*100)
            }
            reader.onload = () =>{
                arr[index].progress  = 100;
                console.log(reader.result.length)
                let src = `'${reader.result}'`
               // arr[index].filecontent = <img src={src} alt={file.name}/>
                document.getElementsByClassName("fl-item-icon")[0].append(<img src=""  alt="name"/>)
                setTimeout(() =>{},1000)
                this.setState({uploadedFiles : arr})
                console.log(file.name + 'reading completed' + arr[0])
                console.log(reader.result.length , file.length)

            }
           
        }
        
    }

    render() {
        return (
            <div style={this.state.files_selected ? sty2 : sty1}>
                <FileUpload  fileHandler={this.fileHandler} filesUploaded={this.state.uploadedFiles} files_selected={this.state.files_selected}/>
                

            </div>
        )
    }
}
