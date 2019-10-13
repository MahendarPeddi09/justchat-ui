import React, { Component } from 'react'

export default class formInput extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{width:'100%',height:'60px'}}>
                <input type="text"  placeholder={this.props.ph} />
            </div>
        )
    }
}
