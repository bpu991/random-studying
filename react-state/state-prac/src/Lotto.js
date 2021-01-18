import React, { Component } from 'react';

class Lotto extends Component {
    static defaultProps = {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
    }
    constructor(props) {
        super(props);
        this.state = {
            ball1: 0,
            ball2: 0,
            ball3: 0,
            ball4: 0
        }
    }

    handleClick = () => {
        let rand1 = Math.floor(Math.random() * this.props.numbers.length);
        let rand2 = Math.floor(Math.random() * this.props.numbers.length);
        let rand3 = Math.floor(Math.random() * this.props.numbers.length);
        let rand4 = Math.floor(Math.random() * this.props.numbers.length);
        this.setState({
            ball1: rand1,
            ball2: rand2,
            ball3: rand3,
            ball4: rand4,
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.ball1} {this.state.ball2} {this.state.ball3} {this.state.ball4}</h1>
                <button onClick={this.handleClick}>Generate Numbers</button>
            </>
        )
    }
}

export default Lotto