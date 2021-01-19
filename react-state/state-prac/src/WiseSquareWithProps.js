import React, { Component} from 'react';

class WiseSquareWithProps extends Component {
    static defaultProps = {
        messages: [
            'hi',
            'hello',
            'goodbye'
        ]
    };

    dispenseMessage =() => {
        let {messages} = this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
    }

    render() {
        return (
            <div onMouseEnter={this.dispenseMessage}>
                onMouseEnter
            </div>
        )
    }
}

export default WiseSquareWithProps