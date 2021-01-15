import React, { Component } from 'react';
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
    }

    handleClick = () => {
        let rand1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        let rand2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

        this.setState({die1: rand1, die2: rand2, isRolling: true});
        
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 1000);
    }
    render() {
        return (
            <>
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
                <button onClick={this.handleClick} disabled={this.state.isRolling}>{this.state.isRolling ? 'Rolling...' : 'Roll Dice'}</button>
            </>
        )
    }
}

export default RollDice