import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            clicked: false,
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick =(e) => {
        this.setState({ clicked: true });
    }

    generateNum = (e) => {
        let random = Math.floor(Math.random() * Math.floor(10));

        this.setState({number: random})
    }
    render() {
        return (
            <div>
                {/* <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
                <button onClick={this.handleClick}>Click me</button> */}
                <h1>Number is: {this.state.number}</h1>
                {this.state.number === 9 
                    ? <h2>You win</h2>
                    :<button onClick={this.generateNum}>Generate a random number</button>
                }
            </div>
        )
    }
}

export default Click