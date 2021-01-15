import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        }
    }
    handleUpvote = () => {
        this.setState({
            score
        })
    }
    render() {
        return (
            <div>
                <h1>Your score is {this.state.score} </h1>
                <button onClick={this.handleUpvote} />
            </div>
        )
    }
}

export default Game