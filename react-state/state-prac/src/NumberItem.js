import React, { Component } from 'react';

class NumberItem extends Component {
    handleRemove =(e) => {
        this.props.remove(this.props.value) //pass in remove method from parents into this method
    }
    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.handleRemove}>x</button>
            </li>
        )
    }
}

export default NumberItem