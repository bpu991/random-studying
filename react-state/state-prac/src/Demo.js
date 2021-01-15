import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render () {
        return (
            <div>{this.props.animal}</div>
        )
    }
}

export default Demo