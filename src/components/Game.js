import React from 'react'
import Board from './Board'
import './Game.css'

export default class Game extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="game">
                <div className="game-board">
                    <Board markSquare={this.props.markSquare} game={this.props.game}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        )
    }
}