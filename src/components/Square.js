import React from 'react'
import './Game.css'

export default class Square extends React.Component {

    render(){
        console.log(this.props)

        return (
            <button className='square' onClick={this.props.clickhandle}>
                {this.props.mark}
            </button>
        )
    }
}